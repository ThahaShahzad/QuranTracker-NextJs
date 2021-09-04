import Head from 'next/head'
import TeacherHome from '@/components/views/home/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from '@/components/layouts/Dash/DashLayout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard - QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TeacherHome />
    </>
  )
}

Home.getLayout = DashLayout

export default Home
