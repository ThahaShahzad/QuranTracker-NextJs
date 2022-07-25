import { Axios } from 'lib/config/clients/axios'

export const GetStudentAssignments = async (studentId: string) => {
  const { data } = await Axios.get(`api/read/getstudentassignments?studentId=${studentId}`)
  return data
}
