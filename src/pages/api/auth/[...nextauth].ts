import NextAuth, { Account, Profile, Session, User } from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import { AUTH_SECRET, JWT_SECRET } from 'lib/config/envVariables'
import { JWT } from 'next-auth/jwt'
import { compare } from 'bcryptjs'

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      // id: 'credentials',
      // name: 'QuranTracker',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username', type: 'text', name: 'username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        try {
          const user = await prisma.user.findFirst({ where: { userName: credentials.username } })

          // If no error and we have user data, return it
          if (user) {
            const isPassMatch = await compare(credentials.password, user?.password)
            if (isPassMatch) {
              return user
            }
          }
          // Return null if user data could not be retrieved
          return null
        } catch (error) {
          console.error(error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      return `${baseUrl}/dash`
    },
    async session(session: Session, userOrToken: User | JWT) {
      session.dbuser = userOrToken.user
      delete session.user
      delete session.expires
      return session
    },
    async jwt(
      token: JWT,
      user?: User | undefined,
      account?: Account | undefined,
      profile?: Profile | undefined,
      isNewUser?: boolean | undefined
    ) {
      const userEmail = token?.email as string
      const dbUser = await prisma.user.findFirst({ where: { email: userEmail } })
      token.user = dbUser
      return token
    }
  },
  pages: {
    signIn: '/auth/signin'
  },
  secret: AUTH_SECRET,
  session: {
    jwt: true
  },
  jwt: {
    secret: JWT_SECRET,
    encryption: true
  }
})
