import JWT from 'jsonwebtoken'
import prisma from 'lib/prisma'
import { EMAIL_JWT_SECRET } from 'lib/config/envVariables'

interface CreateUserHashProps {
  userId: string | undefined
  type: 'verifyEmail' | 'ChangePassword'
}

export const CreateUserHash = async ({ userId, type }: CreateUserHashProps) => {
  if (!userId) {
    return false
  }
  const jwt = JWT.sign({ userId }, EMAIL_JWT_SECRET, { jwtid: 'VECP', issuer: 'QuranTracker', expiresIn: '2 days' })
  console.log('signed jwt')
  try {
    const dbJWT = await prisma.vECPJWT.create({
      data: {
        userId,
        type,
        jwt
      }
    })
    return dbJWT
  } catch (error) {
    return false
    console.error(error)
  }
}

interface CheckUserHashProps {
  token: string | string[]
  type: 'verifyEmail' | 'ChangePassword'
}
export const CheckUserHash = async ({ token, type }: CheckUserHashProps) => {
  if (typeof token === 'object') {
    return false
  }
  try {
    if (type === 'verifyEmail') {
      const isValidToken = JWT.verify(token, EMAIL_JWT_SECRET)
      if (isValidToken) {
        const dbJWT = await prisma.vECPJWT.findFirst({
          where: {
            jwt: token
          }
        })
        const user = await prisma.user.update({
          data: {
            isEmailVerified: true
          },
          where: {
            id: dbJWT?.id
          }
        })
        await prisma.vECPJWT.delete({
          where: { id: dbJWT?.id }
        })
        return true
      }
      return false
    }
    if (type === 'ChangePassword') {
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
