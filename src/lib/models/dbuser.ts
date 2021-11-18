import { User } from 'lib/graphql/generated'

export interface DbUser extends User {
  id: string
}
