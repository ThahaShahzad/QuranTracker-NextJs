import type { NextApiRequest, NextApiResponse } from 'next'
import { generate } from 'generate-password'
import { hash } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import firebaseAdmin from 'lib/config/clients/firebaseAdmin'
import { completedForm } from 'lib/models/auth/accountCreation'
import { faunaClient } from 'lib/config/clients/fauna'
import { UserAccType } from 'lib/graphql/generated'
import { Call, Collection, Function, Ref, Update } from 'faunadb'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { getDbUser } from 'lib/api/services/getUser'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { Teachers, Students, Parents, Classes, schoolId } = req.body as completedForm
  const date = new Date().toISOString()
  sgMail.setApiKey(SENDGRID_API_KEY)
  if (req.method !== 'POST') {
    return res.status(400).send({ message: 'Only POST requests allowed' })
  }
  const user = await getDbUser(req.cookies.uid)
  try {
    console.time('Total')
    console.time('teachers create')
    const teacherDbDocs: any[] = []
    const teacherTableData: any[] = []
    const teachersWithHashedPasswords = await Promise.all(
      Teachers.map(async (teacher) => {
        const userUID = uuidv4()
        const generatedPassword = generate({
          length: 10,
          numbers: true
        })
        const hashedPassword = await hash(generatedPassword, 10)
        const teacherDoc = {
          uid: userUID,
          firstName: teacher['First Name'],
          lastName: teacher['Last Name'],
          email: teacher.Email,
          emailVerified: false,
          accType: UserAccType.Teacher,
          school: Ref(Collection('school'), schoolId),
          isActive: true,
          createdAt: date,
          updatedAt: date
        }
        teacherDbDocs.push(teacherDoc)
        const teacherData = {
          firstName: teacher['First Name'],
          lastName: teacher['Last Name'],
          email: teacher.Email,
          password: generatedPassword
        }
        teacherTableData.push(teacherData)
        return {
          uid: userUID,
          displayName: `${teacher['First Name']} ${teacher['Last Name']}`,
          email: teacher.Email,
          emailVerified: false,
          passwordHash: Buffer.from(hashedPassword),
          disabled: false
        }
      })
    )
    const teacherFirebaseResults = await firebaseAdmin.auth().importUsers(teachersWithHashedPasswords, {
      hash: {
        algorithm: 'BCRYPT'
      }
    })
    const createdTeacherDocs: any[] = await faunaClient.query(Call(Function('CreateManyTeachers'), teacherDbDocs))
    // console.log(createdTeacherDocs)
    console.timeEnd('teachers create')
    console.time('parents create')
    const parentDbDocs: any[] = []
    const parentTableData: any[] = []
    const parentsWithHashedPasswords = await Promise.all(
      Parents.map(async (parent) => {
        const userUID = uuidv4()
        const generatedPassword = generate({
          length: 10,
          numbers: true
        })
        const hashedPassword = await hash(generatedPassword, 10)
        const parentDoc = {
          uid: userUID,
          firstName: parent['First Name'],
          lastName: parent['Last Name'],
          email: parent.Email,
          emailVerified: false,
          accType: UserAccType.Parent,
          school: Ref(Collection('school'), schoolId),
          isActive: true,
          createdAt: date,
          updatedAt: date
        }
        parentDbDocs.push(parentDoc)
        const parentData = {
          firstName: parent['First Name'],
          lastName: parent['Last Name'],
          email: parent.Email,
          password: generatedPassword
        }
        parentTableData.push(parentData)
        return {
          uid: userUID,
          displayName: `${parent['First Name']} ${parent['Last Name']}`,
          email: parent.Email,
          emailVerified: false,
          passwordHash: Buffer.from(hashedPassword),
          disabled: false
        }
      })
    )
    const parentFirebaseResults = await firebaseAdmin.auth().importUsers(parentsWithHashedPasswords, {
      hash: {
        algorithm: 'BCRYPT'
      }
    })
    const createdParentDocs: any[] = await faunaClient.query<any[]>(Call(Function('CreateManyParents'), parentDbDocs))
    // console.log(createdParentDocs)
    console.timeEnd('parents create')
    console.time('students create')
    const studentDbDocs: any[] = []
    await Promise.all(
      Students.map((student) => {
        const parentDoc = createdParentDocs.find((parent) => parent.data.email === student['Parent Email'])
        const studentDoc = {
          studentId: student['Student ID'],
          firstName: student['First Name'],
          lastName: student['Last Name'],
          parent: Ref(Collection('user'), parentDoc.ref.id),
          school: Ref(Collection('school'), schoolId),
          assignments: [],
          isActive: true,
          createdAt: date,
          updatedAt: date
        }
        studentDbDocs.push(studentDoc)
      })
    )
    const createdStudentDocs: any[] = await faunaClient.query<any[]>(Call(Function('CreateManyStudents'), studentDbDocs))
    // console.log(createdStudentDocs)
    console.timeEnd('students create')
    console.time('classes create')
    const classesDbDocs: any[] = []
    await Promise.all(
      Classes.map((clas) => {
        const teacherDoc = createdTeacherDocs.find((teacher) => teacher.data.email === clas["Teacher's email"])
        const studentDocs = createdStudentDocs.filter((student) => clas.Students.indexOf(student.data.studentId) !== -1)
        const studentRefs = studentDocs.map((studentDoc) => {
          return Ref(Collection('student'), studentDoc.ref.id)
        })
        const classDoc = {
          name: clas.Name,
          teacher: Ref(Collection('user'), teacherDoc.ref.id),
          students: studentRefs,
          school: Ref(Collection('school'), schoolId),
          isActive: true,
          createdAt: date,
          updatedAt: date
        }
        classesDbDocs.push(classDoc)
      })
    )
    const createdClassesDocs = await faunaClient.query<any[]>(Call(Function('CreateManyClasses'), classesDbDocs))
    const studentClasses = createdStudentDocs.map((student, i) => {
      const classes = createdClassesDocs.filter((clas) => clas.students.indexOf(Ref(Collection('student'), student.ref.id) !== -1))
      const classIds = classes.map((clas) => {
        return Ref(Collection('classes'), clas.ref.id)
      })
      return {
        studentId: Ref(Collection('student'), student.ref.id),
        classIds
      }
    })
    const linkStudentsToClasses = await faunaClient.query<any[]>(Call(Function('LinkStudentsToClasses'), studentClasses))
    // console.log(createdClassesDocs)
    console.timeEnd('classes create')
    console.time('send emails')
    const adminEmail = user.email as string
    const teacherRows = teacherTableData.map((teacher) => {
      return `<tr>
        <td>${teacher.firstName}</td>
        <td>${teacher.lastName}</td>
        <td>${teacher.email}</td>
        <td>${teacher.password}</td>
        <td>Teacher</td>
      </tr>`
    })
    const parentRows = parentTableData.map((parent) => {
      return `<tr>
        <td>${parent.firstName}</td>
        <td>${parent.lastName}</td>
        <td>${parent.email}</td>
        <td>${parent.password}</td>
        <td>Parent</td>
      </tr>`
    })
    const msgToAdmin: sgMail.MailDataRequired = {
      to: adminEmail,
      from: SENDER_EMAIL,
      subject: 'QuranTracker Account Creation',
      text: 'QuranTracker Account Creation completed',
      html: `<body>
                <style>
                  table {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                  }

                  td,
                  th {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                  }

                  tr:nth-child(even) {
                    background-color: #dddddd;
                  }
              </style>
              <h2>Asalamualaykum admin</h2>
              <p>account creation completed here are all created accounts</p>
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Account Type</th>
                </tr>
                ${teacherRows.join('')}${parentRows.join('')}
              </table>
                </body>`
    }
    const adminEmailRes = await sgMail.send(msgToAdmin)
    console.timeEnd('send emails')
    const updateUser = await faunaClient.query(Update(Ref(Collection('user'), user.id), { data: { initialAccountCreation: true } }))
    console.timeEnd('Total')
    res.status(200).send(true)
  } catch (error) {
    console.error(error)
    res.send(error)
  }
}
export default withFireBaseAuth(handler)
