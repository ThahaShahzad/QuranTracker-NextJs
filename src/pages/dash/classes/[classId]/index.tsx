import { Link } from 'components/custom/index'
import StudentBox from 'components/custom/classes/StudentBox'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import DashLayout from 'components/layouts/dash/DashLayout'

const ClassDetails = () => {
  const { pathname, query } = useRouter()
  const classId = query.classId
  return (
    <main>
      <div className='flex justify-between'>
        <Link type='primary-nl' to='/classes'>
          <BiArrowBack className='m-2 w-10 h-10 p-2 bg-primary rounded-3xl' />
        </Link>
        <h3 className='text-center p-2'>{classId}</h3>
        <div></div>
      </div>

      <div className='grid grid-cols-3 gap-4 p-5'>
        <StudentBox />
      </div>
    </main>
  )
}

ClassDetails.getLayout = DashLayout

export default ClassDetails
