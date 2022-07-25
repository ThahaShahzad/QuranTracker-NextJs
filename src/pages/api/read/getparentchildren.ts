import { Call, Function } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { Student } from 'lib/graphql/generated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query as any
  try {
    const Children: faunaRes<[Student]> = await faunaClient.query(Call(Function('GetParentsChildren'), userId))
    res.json(Children)
  } catch (error: any) {
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
