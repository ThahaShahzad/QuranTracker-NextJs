import { Axios } from 'lib/api/axios'
import { AdminApplicationType } from 'lib/models/auth/adminApplication'

export const AdminApplicationPost = async (data: AdminApplicationType) => {
  const res = await Axios.post('/api/auth/adminapplication', data)
  return res.data
}
