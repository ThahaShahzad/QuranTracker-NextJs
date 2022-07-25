import Card from 'components/custom/Card'
import { GetParentChildren } from 'lib/api/dash/parent/GetParentChildren'
import { useAuth } from 'lib/contexts/auth'
import { StudentDoc } from 'lib/graphql/fixedGenerated'
import { faunaRes } from 'lib/models/faunaRes'
import { useQuery } from 'react-query'

const Children = () => {
  const { user } = useAuth()
  const { data: students, isLoading } = useQuery<faunaRes<StudentDoc[]>>('GetParentsChildren', () => GetParentChildren(user.id))
  if (isLoading) return <div>...Loading</div>
  return (
    <main className='p-4 bg-bgLight'>
      <h3 className='text-center'>Children</h3>
      <section className='grid grid-cols-3 gap-4 p-8'>
        {students?.data.map((student) => (
          <Card id={student.ref['@ref'].id}>{student.data.firstName} </Card>
        ))}
      </section>
    </main>
  )
}

export default Children
