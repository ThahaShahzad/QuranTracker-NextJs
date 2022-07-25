import { Axios } from 'lib/config/clients/axios'
import { completedForm } from 'lib/models/auth/accountCreation'

export const AccountCreationPost = async (data: completedForm) => {
  const res = await Axios.post('/api/auth/accountcreation', data)
  return res.data
}
