import { Link } from '@/components/custom/index'
import DashLayout from '@/components/layouts/DashLayout'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

const StudentDetails = () => {
  const { asPath, query } = useRouter()

  const studentId = query.studentId
  const classId = asPath.split('/')[2]
  return (
    <div>
      <div className='flex justify-between'>
        <Link type='primary-nl' to={`/classes/${classId}`}>
          <BiArrowBack className='m-2 w-10 h-10 p-2 bg-primary rounded-3xl' />
        </Link>
        <h3 className='text-center p-2'>{studentId}</h3>
        <div></div>
      </div>
      Student Details
    </div>
  )
}

StudentDetails.getLayout = DashLayout

export default StudentDetails
