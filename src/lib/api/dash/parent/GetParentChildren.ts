import { Axios } from 'lib/config/clients/axios'

export const GetParentChildren = async (id: string) => {
  const { data } = await Axios.get(`api/read/getparentchildren?userId=${id}`)
  return data
}
