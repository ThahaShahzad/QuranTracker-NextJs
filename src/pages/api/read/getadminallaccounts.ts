import { Call, Function } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { User } from 'lib/graphql/generated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { schoolId } = req.query as any
  try {
    const Users: faunaRes<[User]> = await faunaClient.query(Call(Function('GetAdminAllAccounts'), schoolId))
    res.json(Users)
  } catch (error: any) {
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
