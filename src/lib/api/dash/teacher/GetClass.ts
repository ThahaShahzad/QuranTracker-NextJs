import { Axios } from 'lib/config/clients/axios'

export const GetClass = async (id: string) => {
  const { data } = await Axios.get(`api/read/getclass?classId=${id}`)
  return data
}
