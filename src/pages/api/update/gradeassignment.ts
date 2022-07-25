import { Call, Collection, Function, Ref, Update } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { AssignmentUpdateObj } from 'lib/graphql/fixedGenerated'
import { User } from 'lib/graphql/generated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { assignmentId, data } = req.body as AssignmentUpdateObj
  try {
    const UpdateAssignment: faunaRes<[User]> = await faunaClient.query(
      Update(Ref(Collection('assignment'), assignmentId), {
        // data: {
        data
        // }
      })
    )
    res.send(true)
  } catch (error: any) {
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
