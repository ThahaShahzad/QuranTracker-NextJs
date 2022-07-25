import Table from 'components/custom/Table'
import { GetAdminClasses } from 'lib/api/dash/admin/GetAdminClasses'
import { useAuth } from 'lib/contexts/auth'
import { ClassesObj } from 'lib/graphql/fixedGenerated'
import { faunaRes } from 'lib/models/faunaRes'
import { useQuery } from 'react-query'
import { Column } from 'react-table'

const Classes = () => {
  const { user } = useAuth()
  const { data: classes, isLoading } = useQuery<faunaRes<ClassesObj[]>>('GetAdminClasses', () => GetAdminClasses(user.school.ref.id))
  if (isLoading) return <div>...Loading</div>
  const columns: Column[] = [
    {
      Header: 'Student Id',
      accessor: 'studentId'
    },
    {
      Header: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Enrolled',
      accessor: 'isActive'
    },
    {
      accessor: '[editButton]'
    }
  ]
  return (
    <main className='p-2 md:p-4 xl:p-8 bg-bgLight space-y-4 overflow-auto'>
      {classes?.data.map((clas) => {
        const students = clas.students
        const formatedStudentArray = students?.map((student) => student.data)
        const subjects = clas.subject
        return (
          <Table
            key={clas.name}
            {...{
              columns,
              data: formatedStudentArray,
              tableName: { right: clas.name, left: `${clas.teacher.data.firstName} ${clas.teacher.data.lastName}`, subjects: clas.subject }
            }}
          />
        )
      })}
    </main>
  )
}

export default Classes
