import { Axios } from 'lib/config/clients/axios'

export const GetAdminClasses = async (id: string) => {
  const { data } = await Axios.get(`api/read/getadminclasses?schoolId=${id}`)
  return data
}
