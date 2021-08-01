import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import TeacherHome from '@/components/views/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from '@/components/layouts/DashLayout'

const Home = () => {
  const router = useRouter()
  const [isAuth, setisAuth] = useState(true)
  useEffect(() => {
    if (!isAuth) router.push('/landing')
  }, [])
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
