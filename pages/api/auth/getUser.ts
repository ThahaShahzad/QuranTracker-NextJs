import { getSession } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Users } from 'util/models'
import connectDB from 'util/mongoDb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const userDb = await Users.findById(session?.user.sub.substring(6))
  res.status(200).json(userDb)
}
export default connectDB(handler)
