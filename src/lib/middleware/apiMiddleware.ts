import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from 'lib/config/clients/firebaseAdmin'

export function withFireBaseAuth(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idToken = req.cookies.QuranTrackerFirebaseAuthToken
      if (!req.cookies.QuranTrackerFirebaseAuthToken) {
        return res.status(401).send({ message: 'No token found' })
      }
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
      const { uid } = decodedToken
      req.cookies.uid = uid
      return handler(req, res)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
