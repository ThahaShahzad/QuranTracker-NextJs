import DashLayout from 'components/layouts/DashLayout'
import Head from 'next/head'

const Finance = () => {
  return (
    <>
      <Head>
        <title>Dashboard - QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        {/* <link rel='icon' href='static/favicon.ico' /> */}
      </Head>
      Finance
      {/* <AccountsPage /> */}
    </>
  )
}

Finance.getLayout = DashLayout

export default Finance
