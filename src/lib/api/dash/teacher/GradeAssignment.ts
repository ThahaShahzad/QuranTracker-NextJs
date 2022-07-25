import { Axios } from 'lib/config/clients/axios'
import { AssignmentUpdateObj } from 'lib/graphql/fixedGenerated'

export const GradeAssignment = async (assignment: AssignmentUpdateObj) => {
  const { data } = await Axios.post(`api/update/gradeassignment`, assignment)
  return data
}
