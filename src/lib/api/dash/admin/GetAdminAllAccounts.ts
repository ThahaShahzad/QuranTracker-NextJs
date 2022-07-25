import { Axios } from 'lib/config/clients/axios'

export const GetAdminAllAccounts = async (id: string) => {
  const { data } = await Axios.get(`api/read/getadminallaccounts?schoolId=${id}`)
  return data
}
