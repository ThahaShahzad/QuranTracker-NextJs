const sengridApiKey = process.env.SENDGRID_API_KEY as string
const sengridSenderEmail = process.env.SENDER_EMAIL as string
const auth0ApiUrl = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL as string
const auth0Secret = process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET as string
const auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string
// const auth0GrantId = process.env.NEXT_PUBLIC_AUTH0_GRANT_ID as string
const mongoDbUri = process.env.DATABASE_URL as string

export { sengridApiKey, sengridSenderEmail, auth0ApiUrl, mongoDbUri }
