import { NextApiRequest, NextApiResponse } from 'next'
import { faunaClient } from 'lib/config/clients/fauna'
import { Collection, Create } from 'faunadb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  const { uid, email, emailVerified } = req.body
  const date = new Date()
  const userInfo = {
    uid,
    email,
    emailVerified,
    active: false,
    submittedApplication: false,
    accountsCreated: false,
    accType: 'admin',
    createdAt: date,
    updatedAt: date
  }
  const newUser = await faunaClient.query(Create(Collection('users'), { data: userInfo }))
  res.json(userInfo)
}
export default handler
