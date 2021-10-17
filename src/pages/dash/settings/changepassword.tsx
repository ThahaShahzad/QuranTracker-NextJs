import DashLayout from 'components/layouts/DashLayout'
import Head from 'next/head'
import ChangePasswordComponent from 'components/dash/settings/changepassword'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'
import { GetServerSidePropsContext } from 'next'

const Changepassword = () => {
  return (
    <>
      <Head>
        <title>Change Password - QuranTracker</title>
        <meta name='description' content='Change Password page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ChangePasswordComponent />
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

Changepassword.getLayout = DashLayout

export default Changepassword
