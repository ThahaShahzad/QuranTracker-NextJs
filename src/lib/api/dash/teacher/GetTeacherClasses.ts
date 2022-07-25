import { Axios } from 'lib/config/clients/axios'

export const GetTeacherClasses = async (id: string) => {
  const { data } = await Axios.get(`api/read/getteacherclasses?teacherId=${id}`)
  return data
}
