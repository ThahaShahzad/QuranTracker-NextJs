import { Append, Call, Function, Get, Let, Select, Update, Var } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { AssignmentCreateObj, AssignmentDoc } from 'lib/graphql/fixedGenerated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { Collection, Ref } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const newAssignment = req.body as AssignmentCreateObj
  const newAssignmentDoc = {
    ...newAssignment,
    student: Ref(Collection('student'), newAssignment.student),
    teacher: Ref(Collection('user'), newAssignment.teacher),
    classRef: Ref(Collection('classes'), newAssignment.classRef),
    school: Ref(Collection('user'), newAssignment.school)
  }
  //  classes: [Class("320555763876495428"), Class("320555762536415297")]
  try {
    const NewAssignmentRes: AssignmentDoc = await faunaClient.query(Call(Function('CreateNewAssignment'), newAssignmentDoc))
    console.log(NewAssignmentRes.ref)
    const UpdateStudentAssignments = await faunaClient.query(
      Let(
        {
          ref: Ref(Collection('student'), newAssignment.student),
          doc: Get(Var('ref')),
          array: Select(['data', 'assignments'], Var('doc'))
        },
        Update(Var('ref'), { data: { assignments: Append([NewAssignmentRes.ref], Var('array')) } })
      )
    )
    res.send(true)
  } catch (error: any) {
    console.log(error)
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
