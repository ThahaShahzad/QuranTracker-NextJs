import { Call, Function } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { AssignmentDoc } from 'lib/graphql/fixedGenerated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { studentId } = req.query
  try {
    const Assignments: faunaRes<[AssignmentDoc[]]> = await faunaClient.query(Call(Function('GetStudentAssignments'), studentId.toString()))
    res.json(Assignments)
  } catch (error: any) {
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
