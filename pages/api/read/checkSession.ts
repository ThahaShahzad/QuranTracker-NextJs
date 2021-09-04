import { getSession, withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  res.status(200).json(session)
}
export default withApiAuthRequired(handler)
