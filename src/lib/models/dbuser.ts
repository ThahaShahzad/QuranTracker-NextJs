import { User } from '.prisma/client'

export type DbUser = {
  dbuser: User | null
}
