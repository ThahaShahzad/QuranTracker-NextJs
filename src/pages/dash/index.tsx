import Head from 'next/head'
import TeacherHome from 'components/dash/home/Home'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashLayout from 'components/layouts/DashLayout'
// import { withPageAuthFromDash } from 'lib/middleware/pageMiddleware'
// import { GetServerSidePropsContext } from 'next'

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
// export const getServerSideProps = withPageAuthFromDash((ctx: GetServerSidePropsContext) => {
//   return { props: {} }
// })

Home.getLayout = DashLayout

export default Home
