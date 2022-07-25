import Head from 'next/head'
import ClassesPage from 'components/dash/Classes'
import DashLayout from 'components/layouts/DashLayout'

const Classes = () => {
  return (
    <>
      <Head>
        <title>Classes - QuranTracker</title>
        <meta name='description' content='Classes page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ClassesPage />
    </>
  )
}

Classes.getLayout = DashLayout

export default Classes
