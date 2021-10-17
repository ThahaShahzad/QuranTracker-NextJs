import { NextApiRequest, NextApiResponse } from 'next'
import { CreateUserHash } from 'lib/api/auth/services/genJWT'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  sgMail.setApiKey(SENDGRID_API_KEY)
  const { dbuser } = (await getSession({ req })) as DbUser

  try {
    const verifyEmailJWT = await CreateUserHash({ userId: dbuser?.id, type: 'ChangePassword' })
    if (verifyEmailJWT) {
      const msgToUser = {
        to: dbuser?.email, // Change to your recipient
        from: SENDER_EMAIL, // Change to your verified sender
        subject: 'QuranTracker Reset Password',
        text: 'QuranTracker Reset Password',
        html: `<body>
                  <div>
                    <div>
                      Dear ${dbuser?.userName}, 
                    </div>
                    <div>
                      Click link to change password
                    </div>
                  </div>
                  <button><a href='http://localhost:3000/auth/resetpassword/${verifyEmailJWT.jwt}' target='blank'>Reset Password<a/></button>
                </body>`
      }
      const emailRes = await sgMail.send(msgToUser)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(500).json({ error })
  }
}
