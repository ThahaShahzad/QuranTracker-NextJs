// import Redis from 'lib/config/redis'
// import Crypto from 'crypto'
// import JWT from 'jsonwebtoken'
// import createHttpError from 'http-errors'
// import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from 'lib/config/envVariables'

// export default {
//   VeryifyEmial: {
//     CreateUserHash: (userName: string) => {
//       return new Promise<string>((resolve, reject) => {
//         const RandomString = Crypto.randomBytes(16).toString('hex')
//         Redis.hset(userName, RandomString!, 'EX', 24 * 60 * 60, (err, reply) => {
//           if (err) {
//             console.log(err.message)
//             reject(new createHttpError.InternalServerError())
//             return
//           }
//           resolve(RandomString)
//         })
//       })
//     },
//     CheckUserHash: (userName: string, randomString: string) => {
//       return new Promise<boolean>((resolve, reject) => {
//         Redis.hget(userName, (err, result) => {
//           if (err) {
//             console.log(err.message)
//             reject(new createHttpError.InternalServerError())
//             return
//           }
//           if (randomString === result) {
//             Redis.DEL(userName, (err, val) => {
//               if (err) {
//                 console.log(err.message)
//                 throw new createHttpError.InternalServerError()
//               }
//               console.log(val)
//             })
//             return resolve(true)
//           }
//           reject(new createHttpError.BadRequest('verifyemail'))
//         })
//       })
//     }
//   },
//   ChangePassword: {
//     CreateUserHash: (userName: string) => {
//       return new Promise<string>((resolve, reject) => {
//         const RandomString = Crypto.randomBytes(16).toString('hex')
//         Redis.hset(userName, RandomString!, 'EX', 10 * 60, (err, reply) => {
//           if (err) {
//             console.log(err.message)
//             reject(new createHttpError.InternalServerError())
//             return
//           }
//           resolve(RandomString)
//         })
//       })
//     },
//     CheckUserHash: (userName: string, randomString: string) => {
//       return new Promise<boolean>((resolve, reject) => {
//         Redis.hget(userName, async (err, result) => {
//           if (err) {
//             console.log(err.message)
//             reject(new createHttpError.InternalServerError())
//             return
//           }
//           if (randomString === result) {
//             Redis.DEL(userName, (err, val) => {
//               if (err) {
//                 console.log(err.message)
//                 throw new createHttpError.InternalServerError()
//               }
//               console.log(val)
//             })
//             return resolve(true)
//           }
//           reject(new createHttpError.Unauthorized())
//         })
//       })
//     }
//   },
//   JWT: {
//     // signAccessToken: (userId: number) => {
//     //   return new Promise<string | undefined>((resolve, reject) => {
//     //     const payload = { userId }
//     //     const secret = ACCESS_TOKEN_SECRET
//     //     const options = {
//     //       expiresIn: '1h',
//     //       issuer: 'pickurpage.com',
//     //       audience: 'test'
//     //     }
//     //     JWT.sign(payload, secret, options, (err, token) => {
//     //       if (err) {
//     //         console.log(err.message)
//     //         reject(new createHttpError.InternalServerError())
//     //         return
//     //       }
//     //       resolve(token)
//     //     })
//     //   })
//     // },
//     verifyAccessToken: (req: express.Request, res: express.Response, next: express.NextFunction) => {
//       if (!req.headers['authorization']) return next(new createHttpError.Unauthorized())
//       const authHeader = req.headers['authorization']
//       const bearerToken = authHeader.split(' ')
//       const token = bearerToken[1]
//       JWT.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
//         if (err) {
//           const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
//           return next(new createHttpError.Unauthorized(message))
//         }
//         req.payload = payload
//         next()
//       })
//     },
//     // signRefreshToken: (userId: number) => {
//     //   return new Promise<string | undefined>((resolve, reject) => {
//     //     const payload = { userId }
//     //     const secret = REFRESH_TOKEN_SECRET
//     //     const options = {
//     //       expiresIn: '1y',
//     //       issuer: 'pickurpage.com',
//     //       audience: 'test'
//     //     }
//     //     JWT.sign(payload, secret, options, (err, token) => {
//     //       if (err) {
//     //         console.log(err.message)
//     //         reject(new createHttpError.InternalServerError())
//     //       }
//     //       Redis.hset(userId.toString(), token!, 'EX', 365 * 24 * 60 * 60, (err, reply) => {
//     //         if (err) {
//     //           console.log(err.message)
//     //           reject(new createHttpError.InternalServerError())
//     //           return
//     //         }
//     //         resolve(token)
//     //       })
//     //     })
//     //   })
//     // },
//     verifyRefreshToken: async (refreshToken: string) => {
//       return new Promise<number>((resolve, reject) => {
//         JWT.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, payload: any) => {
//           if (err) return reject(new createHttpError.Unauthorized())
//           const userId = payload.userId
//           Redis.hget(userId.toString(), (err, result) => {
//             if (err) {
//               console.log(err.message)
//               reject(new createHttpError.InternalServerError())
//               return
//             }
//             if (refreshToken === result) return resolve(userId)
//             reject(new createHttpError.Unauthorized())
//           })
//         })
//       })
//     }
//   }
// }

export {}
