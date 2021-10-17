import { CheckUserHash } from 'lib/api/auth/services/genJWT'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { emailJWT } = req.query
  const isValidJWT = await CheckUserHash({ token: emailJWT, type: 'ChangePassword' })
  if (isValidJWT) {
    res.writeHead(307, { Location: '/dash' })
    res.end()
  }
  res.writeHead(500, { Location: '/auth/verifyemailerror' })
  res.end()
}
