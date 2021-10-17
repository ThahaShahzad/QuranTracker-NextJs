import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { PrismaClient } from '@prisma/client'
// import prisma from 'lib/prisma'
import { AdminApplicationType } from 'lib/models/auth'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  sgMail.setApiKey(SENDGRID_API_KEY)

  const session = (await getSession({ req })) as DbUser
  const schoolInfo = req.body as AdminApplicationType

  const msgToAdmin = {
    to: schoolInfo.email, // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: 'QuranTracker Admin Application',
    text: 'QuranTracker Admin Application',
    html: `<body>
                <div>
                  <div>
                    Dear ${session.dbuser?.userName},
                  </div>
                  <div>
                    Jazkallahukhairun for apply for QuranTracker ...
                  </div>
                </div>
              </body>`
  }
  const msgToQuranTracker = {
    to: 'thaha.shahzads@gmail.com', // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: 'QuranTracker Application',
    text: 'QuranTracker Application',
    html: `<body>
              <h2>
                  ${schoolInfo.schoolName} has applied to QuranTracker 
              </h2>
              <ul>
                  <li>
                      ${schoolInfo.email}
                  </li>
                  <li>
                      ${schoolInfo.phone}
                  </li>
                  <li>
                      ${schoolInfo.type}
                  </li>
                  <li>
                      ${schoolInfo.state}
                  </li>
                  <li>
                      ${schoolInfo.city}
                  </li>
              </ul>
          </body>`
  }
  try {
    const school = await prisma.school.create({
      data: {
        ...schoolInfo
      }
    })
    const user = await prisma.user.update({
      data: {
        schoolId: school.id,
        submittedApplication: true
      },
      where: {
        id: session.dbuser?.id
      }
    })
    const adminEmailRes = await sgMail.send(msgToAdmin)
    const qtEmailRes = await sgMail.send(msgToQuranTracker)

    res.status(200).send(true)
  } catch (error) {
    res.status(500).json({ error })
  }
}
