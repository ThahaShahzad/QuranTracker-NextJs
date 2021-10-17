import { Axios } from 'lib/api/axios'
import { DbUser } from 'lib/models/dbuser'

export const ResendVerifyEmailPost = async (data: DbUser) => {
  const res = await Axios.post('/api/auth/verifyemail/resend', data)
  return res.data
}
