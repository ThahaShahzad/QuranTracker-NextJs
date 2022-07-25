import { useRouter } from 'next/router'
import { Link } from 'components/custom'
import { useQuery } from 'react-query'
import { faunaRes } from 'lib/models/faunaRes'
import { GetTeacherClasses } from 'lib/api/dash/teacher/GetTeacherClasses'
import { useAuth } from 'lib/contexts/auth'
import { ClassesDoc } from 'lib/graphql/fixedGenerated'

const ClassCards = () => {
  const { pathname } = useRouter()
  const { user } = useAuth()
  const { data: classes, isLoading } = useQuery<faunaRes<ClassesDoc[]>>('GetTeacherClasses', () => GetTeacherClasses(user.id))
  if (isLoading) return <div>...Loading</div>
  return (
    <main className='grid grid-cols-3 p-8'>
      {classes?.data.map((clas) => (
        <Link key={clas.data.name} type='primary-nl' to={`${pathname}/${clas.ref['@ref'].id}`}>
          <div className='bg-bg shadow-xl rounded-2xl flex flex-col items-center p-8'>
            <h3>{clas.data.name}</h3>
            {/* <small>{clas.description}</small> */}
          </div>
        </Link>
      ))}
    </main>
  )
}

export default ClassCards
