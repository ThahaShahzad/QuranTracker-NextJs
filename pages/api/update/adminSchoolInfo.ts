import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Schools, Users } from 'util/models'
import connectDB from 'util/mongoDb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const userId = session?.user.sub.substring(6)
  const schoolData = req.body
  try {
    const user = await Users.findByIdAndUpdate(
      userId,
      { $set: { submittedApplication: true }, school: schoolData },
      { new: true }
    )
    const savedSchool = await Schools.create({ _id: user?.school._id })
    console.log(user, savedSchool)
    res.status(200).send(true)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}
export default connectDB(withApiAuthRequired(handler))