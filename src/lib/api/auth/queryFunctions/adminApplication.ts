import { Axios } from 'lib/api/axios'
import { AdminApplicationType } from 'lib/models/auth/adminApplication'
import { DbUser } from 'lib/models/dbuser'

export const AdminApplicationPost = async (data: DbUser) => {
  const res = await Axios.post('/api/auth/adminapplication', data)
  return res.data
}
