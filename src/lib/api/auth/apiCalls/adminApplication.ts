import { Axios } from 'lib/config/clients/axios'
import { AdminApplicationType } from 'lib/models/auth/adminApplication'
import { DbUser } from 'lib/models/dbuser'

interface props {
  user: DbUser
  school: AdminApplicationType
}

export const AdminApplicationPost = async ({ user, school }: props) => {
  const res = await Axios.post('/api/auth/adminapplication', { user, school })
  return res.data
}
