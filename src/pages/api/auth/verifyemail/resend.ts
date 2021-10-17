import { CreateUserHash } from 'lib/api/auth/services/genJWT'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { DbUser } from 'lib/models/dbuser'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  try {
    sgMail.setApiKey(SENDGRID_API_KEY)
    const { dbuser } = req.body as DbUser
    const oldJWT = await prisma.vECPJWT.findFirst({
      where: {
        id: dbuser?.id
      }
    })
    if (oldJWT) {
      const deletedJWT = await prisma.vECPJWT.delete({
        where: {
          id: oldJWT.id
        }
      })
    }
    const verifyEmailJWT = await CreateUserHash({ userId: dbuser?.id, type: 'verifyEmail' })
    if (verifyEmailJWT) {
      const msgToNewUser = {
        to: dbuser?.email, // Change to your recipient
        from: SENDER_EMAIL, // Change to your verified sender
        subject: 'QuranTracker Verify Email',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<body>
                    <div>
                      <div>
                        Dear ${dbuser?.userName}, 
                      </div>
                      <div>
                        Please verify your email address
                      </div>
                    </div>
                    <button><a href='http://localhost:3000/api/auth/verifyemail/${verifyEmailJWT.jwt}' target='blank'>Verify Email<a/></button>
                  </body>`
      }
      const emailRes = await sgMail.send(msgToNewUser)
      res.status(200).send(true)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
}
