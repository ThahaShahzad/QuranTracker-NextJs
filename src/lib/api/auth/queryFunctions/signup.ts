import { Axios } from 'lib/api/axios'
import { AdminSignUpType } from 'lib/models/auth'

export const SignUpNewUser = async (data: AdminSignUpType) => {
  const res = await Axios.post('/api/auth/signup', data)
  return res.data
}
