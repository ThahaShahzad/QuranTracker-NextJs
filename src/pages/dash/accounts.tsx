import Head from 'next/head'
import AccountsPage from 'components/dash/admin/Accounts'
import DashLayout from 'components/layouts/DashLayout'

const Accounts = () => {
  return (
    <>
      <Head>
        <title>Dashboard - QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        {/* <link rel='icon' href='static/favicon.ico' /> */}
      </Head>
      <AccountsPage />
    </>
  )
}

Accounts.getLayout = DashLayout

export default Accounts
