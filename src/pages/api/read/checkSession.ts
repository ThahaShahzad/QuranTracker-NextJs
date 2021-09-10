import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = getSession(req, res)
  res.status(200).json('')
}
export default handler
