import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'
import { DbUser } from 'lib/models/dbuser'
import { AdminApplicationType } from 'lib/models/auth'
import { faunaDoc } from 'lib/models/faunaRes'
import { User } from 'lib/graphql/generated'
import { faunaClient } from 'lib/config/clients/fauna'
import { Call } from 'faunadb'
interface body {
  user: DbUser
  school: AdminApplicationType
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  sgMail.setApiKey(SENDGRID_API_KEY)
  const { user, school } = req.body as body

  const email = user.email as string
  const msgToAdmin = {
    to: email,
    from: SENDER_EMAIL,
    subject: 'QuranTracker Admin Application',
    text: 'QuranTracker Admin Application',
    html: `<body>
                <div>
                  <div>
                    Asalamualaykum ${user.firstName},
                  </div>
                  <div>
                    Jazkallahukhairun for apply for QuranTracker ...
                  </div>
                </div>
              </body>`
  }
  // const msgToQuranTracker = {
  //   to: 'thaha.shahzads@gmail.com', // Change to your recipient
  //   from: SENDER_EMAIL, // Change to your verified sender
  //   subject: 'QuranTracker Application',
  //   text: 'QuranTracker Application',
  //   html: `<body>
  //             <h2>
  //                 ${schoolInfo.schoolName} has applied to QuranTracker
  //             </h2>
  //             <ul>
  //                 <li>
  //                     ${schoolInfo.email}
  //                 </li>
  //                 <li>
  //                     ${schoolInfo.phone}
  //                 </li>
  //                 <li>
  //                     ${schoolInfo.type}
  //                 </li>
  //                 <li>
  //                     ${schoolInfo.state}
  //                 </li>
  //                 <li>
  //                     ${schoolInfo.city}
  //                 </li>
  //             </ul>
  //         </body>`
  // }
  try {
    const UpdatedUser: faunaDoc<User> = await faunaClient.query(Call(Function('AdminApplication'), user.id, school))
    const adminEmailRes = await sgMail.send(msgToAdmin)
    // const qtEmailRes = await sgMail.send(msgToQuranTracker)

    res.status(200).send(true)
  } catch (error) {
    res.status(500).json({ error })
  }
}
export default handler
