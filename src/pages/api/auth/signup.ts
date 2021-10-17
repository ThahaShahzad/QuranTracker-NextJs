import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { AdminSignUpType } from 'lib/models/auth/signup'
import { CreateUserHash } from 'lib/api/auth/services/genJWT'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  sgMail.setApiKey(SENDGRID_API_KEY)
  const userInfo = req.body as AdminSignUpType
  const hashedPass = await hash(userInfo.password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        ...userInfo,
        password: hashedPass
      }
    })

    const verifyEmailJWT = await CreateUserHash({ userId: user.id, type: 'verifyEmail' })
    if (verifyEmailJWT) {
      const msgToNewUser = {
        to: user.email, // Change to your recipient
        from: SENDER_EMAIL, // Change to your verified sender
        subject: 'QuranTracker Verify Email',
        text: 'QuranTracker Verify Email',
        html: `<body>
                  <div>
                    <div>
                      Dear ${user.userName}, 
                    </div>
                    <div>
                      Please verify your email address
                    </div>
                  </div>
                  <button><a href='http://localhost:3000/api/auth/verifyemail/${verifyEmailJWT.jwt}' target='blank'>Verify Email<a/></button>
                </body>`
      }
      const emailRes = await sgMail.send(msgToNewUser)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(500).json({ error })
  }
}
