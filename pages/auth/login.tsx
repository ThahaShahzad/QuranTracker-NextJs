import LoginComponent from '@/components/auth/Login'
import Head from 'next/head'

const Login = () => {
  return (
    <div className='bg-inverse h-full'>
      <Head>
        <title>Login - QuranTracker</title>
        <meta name='description' content='Login to QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginComponent />
    </div>
  )
}

export default Login
