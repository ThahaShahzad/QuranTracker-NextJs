import Head from 'next/head'
import SettingsComponent from 'components/dash/settings/Settings'
import DashLayout from 'components/layouts/DashLayout'

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

Settings.getLayout = DashLayout

export default Settings
