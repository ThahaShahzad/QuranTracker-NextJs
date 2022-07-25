import { useAuth } from 'lib/contexts/auth'
import { UserAccType } from 'lib/graphql/generated'
import TeacherClasses from './teacher/classes/Classes'
import AdminClasses from './admin/Classes'

const Classes = () => {
  const { user } = useAuth()
  return <>{user.accType === UserAccType.Admin ? <AdminClasses /> : user.accType === UserAccType.Teacher ? <TeacherClasses /> : null}</>
}

export default Classes

{
  /* <main>
      <h2 className='text-center p-2'>Classes</h2>
      <div className='grid grid-cols-3 gap-4 p-5'>
        {user.accType === UserAccType.Admin ? <AdminClasses /> : user.accType === UserAccType.Teacher ? <TeacherClasses /> : null}
      </div>
    </main> */
}
