import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { AdminSignUpType } from 'lib/models/auth/signup'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  const userInfo = req.body as AdminSignUpType
  const hashedPass = await hash(userInfo.password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        ...userInfo,
        password: hashedPass
      }
    })
    res.status(200).send(true)
  } catch (error) {
    res.status(500).json({ error })
  }
}
