import { useRouter } from 'next/router'
import { Link } from 'components/custom'
import { faunaRes } from 'lib/models/faunaRes'
import { useQuery } from 'react-query'
import { useAuth } from 'lib/contexts/auth'
import { GetTeacherClasses } from 'lib/api/dash/teacher/GetTeacherClasses'
import { AssignmentStatus, ClassesDoc } from 'lib/graphql/fixedGenerated'
import { BiArrowBack } from 'react-icons/bi'
import StudentTable from './StudentTable'
import { GetClass } from 'lib/api/dash/teacher/GetClass'

const StudentList = () => {
  const { query, asPath } = useRouter()
  const classId = query.classId as string
  // const { user } = useAuth()
  const { data: currClass, isLoading, isError } = useQuery<ClassesDoc>(['GetClass', classId], () => GetClass(classId))
  if (isLoading) return <div>...Loading</div>
  if (isError || !currClass) return <div>Error</div>
  const columns = ['Name', 'Grade', 'Next']
  const NewAssignments = currClass?.data.students?.map((student) =>
    student.data.assignments.find(
      (assignment) => assignment.data.status === AssignmentStatus.New || assignment.data.status === AssignmentStatus.Edited
    )
  )
  // {
  //   console.log(assignment.data.status)
  //    assignment.data.status === AssignmentStatus.New
  //    return assignment
  // }
  console.log(NewAssignments)
  const rows = currClass?.data.students?.map(({ ref, data }, i) => {
    return {
      ref: ref['@ref'].id,
      studentId: data.studentId,
      name: `${data.firstName} ${data.lastName}`,
      grade: NewAssignments?.[i] ? true : false,
      next: NewAssignments?.[i] ? false : true
    }
  })
  console.log(rows)
  return (
    <main>
      <div className='flex justify-between'>
        <Link type='primary-nl' to='/dash/classes'>
          <BiArrowBack className='m-2 w-10 h-10 p-2 bg-primary rounded-3xl' />
        </Link>
        <h3 className='text-center p-2'>{currClass?.data.name}</h3>
        <div></div>
      </div>
      <div className='flex flex-col gap-4 p-5'>
        {currClass?.data.subject.length === 1 ? (
          <StudentTable {...{ currClass, columns, rows, asPath, NewAssignments }} />
        ) : (
          <div>Tabs asdsadasdasdasdasdas</div>
        )}
        {/* <Modal title='Grade' isOpen={gradeModal} setIsOpen={setGradeModal}></Modal> */}
        {/* <Modal title='Next Assignment' isOpen={nextModal} setIsOpen={setNextModal} /> */}
      </div>
    </main>
  )
}

export default StudentList
