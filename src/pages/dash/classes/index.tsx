import Head from 'next/head'
import ClassesGrid from 'components/dash/classes/Classes'
import DashLayout from 'components/layouts/DashLayout'

const Classes = () => {
  return (
    <>
      <Head>
        <title>My Classes - QuranTracker</title>
        <meta name='description' content='Classes page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ClassesGrid />
    </>
  )
}

Classes.getLayout = DashLayout

export default Classes
