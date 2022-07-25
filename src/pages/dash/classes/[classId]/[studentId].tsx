import { Link } from 'components/custom/index'
import StudentPage from 'components/dash/teacher/classes/studentPage/StudentPage'
import DashLayout from 'components/layouts/DashLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

const StudentDetails = () => {
  const { asPath, query } = useRouter()

  const studentId = query.studentId as string
  const classId = decodeURI(asPath.split('/')[3])
  return (
    <>
      <Head>
        <title>Classes - QuranTracker</title>
        <meta name='description' content='Classes page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-bgLight overflow-auto'>
        {/* <div className='flex justify-between'> */}
        <Link className='fixed' type='primary-nl' to={`/dash/classes/${classId}`}>
          <BiArrowBack className='m-2 w-10 h-10 p-2 bg-primary rounded-3xl' />
        </Link>
        {/* <h3 className='text-center p-2'>{studentId}</h3>
          <div></div> */}
        {/* </div> */}
        <StudentPage {...{ classId, studentId }} />
      </main>
    </>
  )
}

StudentDetails.getLayout = DashLayout

export default StudentDetails
