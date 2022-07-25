import { faunaClient } from 'lib/config/clients/fauna'
import { DbUser } from 'lib/models/dbuser'
import { faunaDoc } from 'lib/models/faunaRes'
import { Get, Index, Match } from 'faunadb'

export const getDbUser = async (uid: string) => {
  const dbUser: faunaDoc<DbUser> = await faunaClient.query(Get(Match(Index('findUserByUID'), uid)))
  dbUser.data.id = dbUser.ref.value.id
  const idUser = dbUser.data
  return idUser as DbUser
}
