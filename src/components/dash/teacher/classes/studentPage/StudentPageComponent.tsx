import { AssignmentDoc, AssignmentStatus, ClassesDoc, StudentDoc } from 'lib/graphql/fixedGenerated'
import { faunaRes } from 'lib/models/faunaRes'
import Grade from './Grade'
import NewAssignment from './NewAssignment'

interface props {
  currClass: ClassesDoc
  currStudent: StudentDoc
  assignments: faunaRes<AssignmentDoc[]> | undefined
}
const StudentPageComponent = ({ currClass, currStudent, assignments }: props) => {
  const mostRecentDate = new Date(
    Math.max.apply(
      null,
      currStudent.data.assignments.map((e): any => {
        return new Date(e.data.completedAt)
      })
    )
  )
  const mostRecentAssignment = currStudent.data.assignments.filter((e): any => {
    const d = new Date(e.data.completedAt)
    return d.getTime() == mostRecentDate.getTime()
  })[0]
  const hasNewAssignment = assignments?.data.find(
    (assignment) => assignment.data.status === AssignmentStatus.New || assignment.data.status === AssignmentStatus.Edited
  )
  // const previousAssignment = assignments?.data.find((assignment) => assignment.data.status === AssignmentStatus.Completed)
  const previousAssignment =
    mostRecentAssignment.data.status === AssignmentStatus.Completed
      ? mostRecentAssignment
      : currStudent.data.assignments?.find((assignment) => assignment.data.status === AssignmentStatus.Completed)
  console.log(assignments)
  return (
    <>
      <div>
        Previous assignment
        <p>{previousAssignment?.data.surah}</p>
        <p> {previousAssignment?.data.start}</p>
        <p>{previousAssignment?.data.end}</p>
        {previousAssignment?.data.grade}
      </div>
      {hasNewAssignment ? (
        <Grade {...{ newAssignment: hasNewAssignment, currClass, currStudent }} />
      ) : (
        <NewAssignment {...{ currClass, currStudent }} />
      )}
      <div className='col-span-full border-2 overflow-auto'>
        Full History <pre>{JSON.stringify(assignments, null, 2)}</pre>
      </div>
    </>
  )
}

export default StudentPageComponent
