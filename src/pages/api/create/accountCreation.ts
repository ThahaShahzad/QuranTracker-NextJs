// import type { NextApiRequest, NextApiResponse } from 'next'
// import { generate } from 'generate-password'
// import axios from 'axios'
// import { Users, Classes, Students } from 'lib/models'
// import connectDB from 'lib/config/mongoDb'
// import { Auth0CreateAccRes } from 'lib/models/ts/accounts'
// import { IStudents } from 'lib/models/students'
// import { IClasses } from 'lib/models/classes'
// // import { getSession } from '@auth0/nextjs-auth0'
// // import { auth0ApiUrl } from 'lib/envVariables'

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // get teachers from json
//   const session = ''
//   const auth0ApiUrl = ''
//   // getSession(req, res)
//   // const { accessToken } = await getAccessToken(req, res)
//   // accountsJson
//   try {
//     console.time('Total')
//     // loop over teachers and call /api/v2/users to create their accounts
//     // use firstName = given_name && lastName = family_name and generate random password
//     // get array of all teacher accounts
//     console.time('teachers create')
//     const teacherAccounts: Auth0CreateAccRes[] = []
//     await Promise.all(
//       accountsJson.teachers.map(async (teacher) => {
//         teacher.name = `${teacher.given_name} ${teacher.family_name}`
//         teacher.teacherClasses = []
//         const generatedPassowrd = generate({
//           length: 10,
//           numbers: true
//         })
//         teacher.password = generatedPassowrd
//         const response: any = await axios.post(`${auth0ApiUrl}/api/v2/users`, teacher, {
//           headers: {
//             authorization: `Bearer ${session}`
//           }
//         })
//         const savedTeacher = response.data
//         teacherAccounts.push(savedTeacher)
//       })
//     )
//     console.timeEnd('teachers create')
//     console.time('parents create')
//     // SAME AS ^^ JUST FOR PARENTS
//     const parentAccounts: Auth0CreateAccRes[] = []
//     const parentChildren = accountsJson.parents.map((parent) => parent.children)
//     await Promise.all(
//       accountsJson.parents.map(async (parent) => {
//         parent.name = `${parent.given_name} ${parent.family_name}`
//         parent.children = []
//         const generatedPassowrd = generate({
//           length: 10,
//           numbers: true
//         })
//         parent.password = generatedPassowrd
//         const response: any = await axios.post(`${auth0ApiUrl}/api/v2/users`, parent, {
//           headers: {
//             authorization: `Bearer ${session}`
//           }
//         })
//         const savedParent: Auth0CreateAccRes = response.data
//         parentAccounts.push(savedParent)
//       })
//     )
//     console.timeEnd('parents create')
//     console.time('students create')
//     // loop over students and make new document for each
//     // get array of all student documents
//     const studentDocuments: IStudents[] = []
//     await Promise.all(
//       accountsJson.students.map(async (student) => {
//         student.studentClasses = []
//         const savedStudent = await Students.create(student)
//         studentDocuments.push(savedStudent)
//         // update parent users document with thier childrens Id
//         const parentAcc = parentAccounts.find((parent) => parent.email === student.parentEmail)
//         if (parentAcc) {
//           const savedParent = await Users.updateOne(
//             { _id: parentAcc.user_id.substring(6) },
//             { $push: { children: savedStudent._id } }
//           )
//         }
//       })
//     )
//     console.timeEnd('students create')
//     console.time('classes create')
//     // loop over classes and make new document for each
//     const classesDocuments: IClasses[] = []
//     await Promise.all(
//       accountsJson.classes.map(async (classI, i) => {
//         // match class names from teachers arary(json) to add teacherId as teacher field
//         const teacherAcc = teacherAccounts.find((teacher) => teacher.email === classI.teacherEmail)
//         // match class names from student arary(json) to add all studentIds to studnets[]
//         const studentAccs = accountsJson.students.map((student, i) => {
//           const isPartofClass = student.studentClasses.find((classId) => classId === classI.classId)
//           if (isPartofClass) classI.students.push(studentDocuments[i]._id)
//         })
//         const savedClass = await Classes.create({
//           name: classI.name,
//           teacherId: teacherAcc?.user_id.substring(6),
//           students: classI.students
//         })
//         classesDocuments.push(savedClass)
//       })
//     )
//     console.timeEnd('classes create')
//     console.time('teachClasses, studentClasses')
//     await Promise.all(
//       classesDocuments.map(async (classI) => {
//         // match teacher from classes document to add classIds to teacher in User.teacherClasses
//         const teacher = teacherAccounts.find((teacher) => teacher.user_id.substring(6) === classI.teacherId)
//         if (teacher) {
//           const savedTeacher = Users.updateOne(
//             { _id: teacher.user_id.substring(6) },
//             { $push: { teacherClasses: classI._id } }
//           )
//         }
//         // match class name in classes to class names in student arary(json) to add classId to students.classes
//         //   const student = studentDocuments.find((student) => student._id === classI.students)
//         const student = studentDocuments.map((student) => {
//           const isPartofClass = classI.students.find((studentId) => studentId === student._id)
//           if (isPartofClass) {
//             const savedStudent = Students.updateOne({ _id: student._id }, { $push: { studentClasses: classI._id } })
//           }
//         })
//       })
//     )
//     console.timeEnd('teachClasses, studentClasses')
//     console.timeEnd('Total')
//     res.status(200).send(true)
//   } catch (error) {
//     console.error(error)
//   }
// }
// export default connectDB(handler)

// const accountsJson = {
//   classes: [
//     {
//       classId: 1,
//       name: 'memo',
//       teacherEmail: 'main.alquda@gmail.com',
//       students: ['Adam', 'Sara', 'Ibrahim']
//     },
//     { classId: 2, name: 'revison', teacherEmail: 'arifKhan@gmail.com', students: ['Ali', 'Khizar', 'Omair'] },
//     { classId: 3, name: 'sabqi', teacherEmail: 'hamzaGhia@gmail.com', students: ['Aaeesha', 'Aasia', 'Adnan'] }
//   ],
//   teachers: [
//     {
//       name: '',
//       given_name: 'Main',
//       family_name: 'Al-Quda',
//       email: 'main.alquda@gmail.com',
//       password: '',
//       teacherClasses: [1]
//     },
//     {
//       name: '',
//       given_name: 'Arif',
//       family_name: 'Khan',
//       email: 'arifKhan@gmail.com',
//       password: '',
//       teacherClasses: [2]
//     },
//     {
//       name: '',
//       given_name: 'Hamza',
//       family_name: 'Ghia',
//       email: 'hamzaGhia@gmail.com',
//       password: '',
//       teacherClasses: [3]
//     }
//   ],
//   parents: [
//     {
//       name: '',
//       given_name: 'Tamuir',
//       family_name: 'Sid',
//       email: 'Tamuir.Sid@gmail.com',
//       password: '',
//       children: ['Ali', 'Omair', 'Adnan']
//     },
//     {
//       name: '',
//       given_name: 'Matin',
//       family_name: 'Baji',
//       email: 'Matin.Baji@gmail.com',
//       password: '',
//       children: ['Khizar', 'Aaeesha', 'Sara']
//     },
//     {
//       name: '',
//       given_name: 'Saleem',
//       family_name: 'Udeen',
//       email: 'Saleem.Udeen@gmail.com',
//       password: '',
//       children: ['Adam', 'Aasia', 'Ibrahim']
//     }
//   ],

//   students: [
//     {
//       parentEmail: 'Saleem.Udeen@gmail.com',
//       firstName: 'Adam',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [1]
//     },
//     {
//       parentEmail: 'Matin.Baji@gmail.com',
//       firstName: 'Sara',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [1]
//     },
//     {
//       parentEmail: 'Saleem.Udeen@gmail.com',
//       firstName: 'Ibrahim',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [1]
//     },
//     {
//       parentEmail: 'Tamuir.Sid@gmail.com',
//       firstName: 'Ali',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [2]
//     },
//     {
//       parentEmail: 'Matin.Baji@gmail.com',
//       firstName: 'Khizar',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [2]
//     },
//     {
//       parentEmail: 'Tamuir.Sid@gmail.com',
//       firstName: 'Omair',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [2]
//     },
//     {
//       parentEmail: 'Matin.Baji@gmail.com',
//       firstName: 'Aaeesha',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [3]
//     },
//     {
//       parentEmail: 'Saleem.Udeen@gmail.com',
//       firstName: 'Aasia',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [3]
//     },
//     {
//       parentEmail: 'Tamuir.Sid@gmail.com',
//       firstName: 'Adnan',
//       lastName: 'lname',
//       age: '',
//       grade: '',
//       studentClasses: [3]
//     }
//   ]
// }

export {}
