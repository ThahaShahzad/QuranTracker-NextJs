import axios from 'axios'
import { BASE_URL } from '../config/envVariables'

export const Axios = axios.create({
  baseURL: BASE_URL
})

// export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
// export const fetcherPost = (url: string, data: any) => axios.post(url, data).then((res) => res.data)

// interface CustomAxiosRequestConfig extends AxiosRequestConfig {
//   ssrData?: any
// }
// interface apiCalls {
//   resendVerifyEmail: CustomAxiosRequestConfig
//   adminApplicationSubmit: adminApplicationSubmit
// }
// export interface adminApplicationSubmit {
//   sendEmail: CustomAxiosRequestConfig
//   updateUserDb: CustomAxiosRequestConfig
// }
// // TODO fix email
// export const apiCalls: apiCalls = {
//   resendVerifyEmail: {
//     method: 'post',
//     url: `/api/v2/jobs/verification-email`
//   },
//   adminApplicationSubmit: {
//     sendEmail: {
//       method: 'post',
//       url: 'api/email/adminApplicationSubmit'
//     },
//     updateUserDb: {
//       method: 'post',
//       url: 'api/update/adminSchoolInfo'
//     }
//   }
// }
// export interface resendVerifyEmail {
//   status: string
//   type: string
//   created_at: string
//   id: string
// }
