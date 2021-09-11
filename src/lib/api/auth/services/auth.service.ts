import JWT from 'jsonwebtoken'
import { EMAIL_JWT_SECRET } from 'lib/config/envVariables'

export default {
  CreateUserHash: async (userName: string) => {
    const jwt = JWT.sign({ userName }, EMAIL_JWT_SECRET, { jwtid: 'VECP', issuer: 'QuranTracker', expiresIn: '2 days' })
    try {
      const dbJWT = await prisma?.vECPJWT.create({
        data: {
          userName,
          jwt
        }
      })
      return dbJWT
    } catch (error) {
      console.error(error)
    }
  },
  CheckUserHash: async (token: string) => {
    try {
      const dbJWT = await prisma?.vECPJWT.findFirst({
        where: {
          jwt: token
        }
      })
      if (dbJWT) {
        const isValidToken = JWT.verify(token, EMAIL_JWT_SECRET)
        if (isValidToken) {
          const removedJWT = await prisma?.vECPJWT.delete({ where: { id: dbJWT.id } })
          if (removedJWT) return true
        }
      }
    } catch (error) {
      return false
      console.error(error)
    }
  }
}
