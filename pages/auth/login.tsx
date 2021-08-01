import Login from '@/components/auth/Login'
import Head from 'next/head'

const login = () => {
  return (
    <div className='bg-inverse h-full'>
      <Head>
        <title>Login - QuranTracker</title>
        <meta name='description' content='Login to QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Login />
    </div>
  )
}

export default login
