import Head from 'next/head'

import StudentListComponent from 'components/dash/teacher/classes/studentList/StudentList'
import DashLayout from 'components/layouts/DashLayout'

const StudentList = () => {
  return (
    <>
      <Head>
        <title>Classes - QuranTracker</title>
        <meta name='description' content='Classes page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StudentListComponent />
    </>
  )
}

StudentList.getLayout = DashLayout

export default StudentList
