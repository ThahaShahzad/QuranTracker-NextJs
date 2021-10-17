import DashLayout from 'components/layouts/DashLayout'
import { DbUser } from 'lib/models/dbuser'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { getSession } from 'next-auth/client'
import SettingsComponent from 'components/dash/Settings'

const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings - QuranTracker</title>
        <meta name='description' content='Settings page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SettingsComponent />
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

Settings.getLayout = DashLayout

export default Settings
