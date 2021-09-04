import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { auth0ApiUrl } from './envVariables'

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
export const fetcherPost = (url: string, data: any) => axios.post(url, data).then((res) => res.data)

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  ssrData?: any
}
interface apiCalls {
  resendVerifyEmail: CustomAxiosRequestConfig
  adminApplicationSubmit: adminApplicationSubmit
}
export interface adminApplicationSubmit {
  sendEmail: CustomAxiosRequestConfig
  updateUserDb: CustomAxiosRequestConfig
}
// TODO fix email
export const apiCalls: apiCalls = {
  resendVerifyEmail: {
    method: 'post',
    url: `${auth0ApiUrl}/api/v2/jobs/verification-email`
  },
  adminApplicationSubmit: {
    sendEmail: {
      method: 'post',
      url: 'api/email/adminApplicationSubmit'
    },
    updateUserDb: {
      method: 'post',
      url: 'api/update/adminSchoolInfo'
    }
  }
}
export interface resendVerifyEmail {
  status: string
  type: string
  created_at: string
  id: string
}

// export const useAxios = (axiosParams: AxiosRequestConfig) => {
//   const [response, setResponse] = useState<AxiosResponse<any>>(undefined!)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(true)
//   const fetchData = async (params: AxiosRequestConfig) => {
//     try {
//       const result = await instance.request(params)
//       setResponse(result.data)
//     } catch (error) {
//       setError(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchData(axiosParams)
//   }, []) // execute once only

//   return { response, error, loading }
// }
