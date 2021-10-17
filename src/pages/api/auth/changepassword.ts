import { PrismaClient } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import { ChangePasswordType } from 'lib/models/dash/settings/changepassword'
import { DbUser } from 'lib/models/dbuser'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PATCH') {
    res.status(400).send({ message: 'Only PATCH requests allowed' })
    return
  }

  const passwords = req.body as ChangePasswordType
  try {
    const { dbuser } = (await getSession({ req })) as DbUser

    const user = await prisma.user.findUnique({ where: { id: dbuser?.id } })
    if (user) {
      const isPassMatch = await compare(passwords.oldPassword, user.password)
      if (isPassMatch) {
        const hashedPass = await hash(passwords.newPassword, 10)
        const updatedUser = await prisma.user.update({
          where: { id: user.id },
          data: {
            password: hashedPass
          }
        })
        res.status(200).send(true)
      }
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
}
