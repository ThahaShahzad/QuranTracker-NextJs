import Head from 'next/head'
import ClassesGrid from 'components/dash/Classes'
import DashLayout from 'components/layouts/DashLayout'

import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

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
Classes.getLayout = DashLayout

export default Classes
