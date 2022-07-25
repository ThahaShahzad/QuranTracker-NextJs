import Head from 'next/head'
import TeacherHome from 'components/dash/home/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from 'components/layouts/DashLayout'
import { withPageAuthFromDash } from 'lib/middleware/pageMiddleware'
import { GetServerSidePropsContext } from 'next'
import { QueryClient } from 'react-query'
import { Axios } from 'lib/config/clients/axios'
import { dehydrate } from 'react-query/hydration'

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard - QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        {/* <link rel='icon' href='static/favicon.ico' /> */}
      </Head>

      <TeacherHome />
    </>
  )
}

export const getServerSideProps = withPageAuthFromDash(async ({ req }: GetServerSidePropsContext) => {
  // const id = req.cookies.QuranTrackerUserId as any
  // const queryClient = new QueryClient()
  // try {
  //   await queryClient.prefetchQuery('GetAllTeacherData', async () => {
  //     const { data } = await Axios.get(`api/read/getallteacherdata?teacherId=${id}`, {
  //       withCredentials: true,
  //       headers: {
  //         Cookie: req.headers.cookie
  //       }
  //     })
  //     return data
  //   })
  // } catch (error) {
  //   console.log('error')
  // }

  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient)
  //   }
  // }
  return { props: {} }
})

Home.getLayout = DashLayout

export default Home
