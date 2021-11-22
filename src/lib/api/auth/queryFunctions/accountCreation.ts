import { Axios } from 'lib/api/axios'
import { form } from 'lib/contexts/accountCreation'

export const AccountCreationPost = async (data: form) => {
  const res = await Axios.post('/api/auth/accountcreation', data)
  return res.data
}
