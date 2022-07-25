import { Axios } from 'lib/config/clients/axios'
import { AssignmentCreateObj, AssignmentDoc } from 'lib/graphql/fixedGenerated'

export const CreateStudentAssignments = async (bodyData: AssignmentCreateObj) => {
  const { data } = await Axios.post(`api/create/createstudentassignment`, bodyData)
  return data as AssignmentDoc
}
