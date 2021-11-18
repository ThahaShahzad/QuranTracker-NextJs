import DashLayout from 'components/layouts/DashLayout'
import Head from 'next/head'
import ChangePasswordComponent from 'components/dash/settings/changepassword'

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

Changepassword.getLayout = DashLayout

export default Changepassword
