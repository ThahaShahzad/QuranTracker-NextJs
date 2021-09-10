import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDER_EMAIL } from 'lib/config/envVariables'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = getSession(req, res)
  const { adminEmail } = req.body
  sgMail.setApiKey(SENDGRID_API_KEY)
  const msgToAdmin = {
    to: adminEmail, // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }
  const msgToQuranTracker = {
    to: 'thaha.shahzads@gmail.com', // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }
  const response = {
    email1: {
      sent: false,
      error: ''
    },
    email2: {
      sent: false,
      error: ''
    }
  }
  // sgMail
  //   .send(msgToAdmin)
  //   .then(() => {
  //     console.log('Email sent')
  //     respone.email1.sent = true
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //     respone.email1.error = error
  //   })
  // sgMail
  //   .send(msgToQuranTracker)
  //   .then(() => {
  //     console.log('Email sent')
  //     respone.email2.sent = true
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //     respone.email2.error = error
  //   })
  // if (respone.email1.sent && respone.email2.sent) res.status(200).send(true)
  // if (respone.email1.error || respone.email2.error) res.status(500).json(respone.email1.error || respone.email2.error)
  res.status(200).send(true)
}

export default handler