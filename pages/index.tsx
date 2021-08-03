import Head from 'next/head'
import TeacherHome from '@/components/views/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from '@/components/layouts/DashLayout'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

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
