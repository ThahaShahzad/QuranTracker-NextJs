// import { NextApiRequest, NextApiResponse } from 'next'
// import Redis from 'lib/config/redis'
// import Crypto from 'crypto'
// import JWT from 'jsonwebtoken'
// import createHttpError from 'http-errors'
// import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from 'lib/config/envVariables'

// const SignAccessToken = (userId: string) => {
//   const payload = { userId }
//   const secret = ACCESS_TOKEN_SECRET
//   const options: JWT.SignOptions = {
//     expiresIn: '1h',
//     issuer: 'pickurpage.com',
//     audience: 'test'
//   }
//   const token = JWT.sign(payload, secret, options)
//   if (!token) {
//     throw new createHttpError.InternalServerError()
//   }
//   return token
// }
// const SignRefreshToken = async (userId: string) => {
//   const payload = { userId }
//   const secret = REFRESH_TOKEN_SECRET
//   const options: JWT.SignOptions = {
//     expiresIn: '1y',
//     issuer: 'pickurpage.com',
//     audience: 'test'
//   }
//   const token = JWT.sign(payload, secret, options)

//   await Redis.hset('RefreshTokens', userId, token!, 'EX', 365 * 24 * 60 * 60)
//   return token
// }
// const verifyAccessToken = (req: NextApiRequest, res: NextApiResponse) => {
//   if (!req.headers['authorization']) return new createHttpError.Unauthorized()
//   const authHeader = req.headers['authorization']
//   const bearerToken = authHeader.split(' ')
//   const token = bearerToken[1]
//   JWT.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
//     if (err) {
//       const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
//       return new createHttpError.Unauthorized(message)
//     }
//     req.payload = payload
//   })
// }

// export { SignAccessToken, SignRefreshToken }
export {}
