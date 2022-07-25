import { faunaDoc, faunaRes } from 'lib/models/faunaRes'
import { useQuery } from 'react-query'
import { useAuth } from 'lib/contexts/auth'
import { GetTeacherClasses } from 'lib/api/dash/teacher/GetTeacherClasses'
import { AssignmentDoc, AssignmentStatus, ClassesDoc, StudentDoc } from 'lib/graphql/fixedGenerated'
import NewAssignment from './NewAssignment'
import { GetStudentAssignments } from 'lib/api/dash/teacher/GetStudentAssignments'
import StudentPageComponent from './StudentPageComponent'
import { GetClass } from 'lib/api/dash/teacher/GetClass'

interface props {
  studentId: string
  classId: string
}
const StudentPage = ({ studentId, classId }: props) => {
  // const { user } = useAuth()
  const { data: currClass, isLoading: classesLoading, isError: classesError } = useQuery<ClassesDoc>(['GetClass', classId], () => GetClass(classId))

  // if (classesLoading) return <div>...Loading</div>
  // if (classesError) return <div>Error</div>
  // const currClass = classes?.data.find((clas) => clas.data.name === classId) as ClassesDoc
  const currStudent = currClass?.data.students.find((student) => student.data.studentId === studentId) as StudentDoc
  const {
    data: assignments,
    isLoading: assignmentsLoading,
    isError: assignmentsError
  } = useQuery<faunaRes<AssignmentDoc[]>>(['studentAssignments', currStudent?.ref['@ref'].id], () =>
    GetStudentAssignments(currStudent.ref['@ref'].id)
  )
  if (classesLoading || assignmentsLoading) return <div>...Loading</div>
  if (classesError || assignmentsError) return <div>Error</div>
  return (
    <div className='text-center p-4'>
      <h3>{`${currStudent?.data.firstName} ${currStudent?.data.lastName}`}</h3>
      <section className='grid grid-cols-2 grid-rows-[70%,30%] h-5/6 gap-4 p-4'>
        {currClass?.data.subject.length === 1 ? <StudentPageComponent {...{ currClass, currStudent, assignments }} /> : <div>Tabs</div>}
      </section>
    </div>
  )
}

export default StudentPage
