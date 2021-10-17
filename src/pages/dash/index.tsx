import Head from 'next/head'
import TeacherHome from 'components/dash/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from 'components/layouts/DashLayout'

import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

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
export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = (await getSession({ req })) as DbUser
  if (!session) {
    res.writeHead(307, { Location: '/auth/signin' })
    res.end()
    return { props: {} }
  }
  return {
    props: { session } // will be passed to the page component as props
  }
}
Home.getLayout = DashLayout

export default Home
