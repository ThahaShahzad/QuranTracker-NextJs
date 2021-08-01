import SignUpLayout from '@/components/layouts/SignUpLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SignUp = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/auth/signup/personal-info')
  }, [])
  return (
    <div className='bg-inverse h-full'>
      <Head>
        <title>Sign Up - QuranTracker</title>
        <meta name='description' content='Sign Up to QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}

SignUp.getLayout = SignUpLayout

export default SignUp
