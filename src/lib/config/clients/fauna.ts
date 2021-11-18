import faunadb from 'faunadb'
import { GraphQLClient } from 'graphql-request'

export const faunaClient = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_SECRET as string,
  domain: 'db.us.fauna.com'
})

const requestHeaders = {
  authorization: `Basic ${process.env.NEXT_PUBLIC_FAUNA_GRAPHQL_AUTH}`
}

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_FAUNA_GRAPHQL_ENDPOINT as string, {
  headers: requestHeaders
})

export default graphqlRequestClient
