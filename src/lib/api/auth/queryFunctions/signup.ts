import { Axios } from 'lib/api/axios'
import firebase from 'lib/config/clients/firebase'

export const SignUpNewUser = async (data: firebase.User) => {
  const res = await Axios.post('/api/auth/signup', data)
  return res.data
}
