import DashLayout from 'components/layouts/DashLayout'
import Head from 'next/head'

import ChildrenComponent from 'components/dash/parent/Children'

const Children = () => {
  return (
    <>
      <Head>
        <title>Dashboard - QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        {/* <link rel='icon' href='static/favicon.ico' /> */}
      </Head>
      <ChildrenComponent />
    </>
  )
}

Children.getLayout = DashLayout

export default Children
