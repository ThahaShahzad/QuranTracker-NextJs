import { Get, Index, Match, Select, Update } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import firebase from 'lib/config/clients/firebase'
import { User } from 'lib/graphql/generated'
import { faunaDoc } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query as any
  try {
    const { data } = await firebase.auth().checkActionCode(code)
    const email = data.email as string
    await firebase.auth().applyActionCode(code)
    const dbUser: faunaDoc<User> = await faunaClient.query(
      Update(Select(['ref'], Get(Match(Index('findUserByEmail'), email))), { data: { emailVerified: true } })
    )
    res.send(dbUser)
  } catch (error) {
    res.send(error)
  }
}
export default handler
