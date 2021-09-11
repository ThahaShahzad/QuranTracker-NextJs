const AUTH_SECRET = process.env.AUTH_SECRET as string
const JWT_SECRET = process.env.JWT_SECRET as string

const DATABASE_URL = process.env.DATABASE_URL as string

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID as string
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET as string

const EMAIL_JWT_SECRET = process.env.EMAIL_JWT_SECRET as string

const REDIS_URI = process.env.REDIS_URI as string
const REDIS_PASSWORD = process.env.REDIS_PASSWORD as string

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string
const SENDER_EMAIL = process.env.SENDER_EMAIL as string

const BASE_URL = process.env.BASE_URL as string

export {
  AUTH_SECRET,
  JWT_SECRET,
  EMAIL_JWT_SECRET,
  DATABASE_URL,
  REDIS_URI,
  REDIS_PASSWORD,
  SENDGRID_API_KEY,
  SENDER_EMAIL,
  BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET
}
