import { GetStaticProps } from 'next'
import Head from 'next/head'
import ClassesGrid from 'components/dash/Classes'
import DashLayout from 'components/layouts/dash/DashLayout'

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

Classes.getLayout = DashLayout

export default Classes
