import Head from 'next/head'
import { BiRefresh } from 'react-icons/bi'
import { Button, Link } from 'components/custom'
import Logo from 'public/images/QuranTrackerLogo.png'
import Image from 'next/image'
import { useAuth } from 'lib/contexts/auth'
import firebase from 'lib/config/clients/firebase'

const VerifyEmail = () => {
  const { user } = useAuth()

  return (
    <main className='h-full flex justify-center items-center'>
      <Head>
        <title>Verify Email - QuranTracker</title>
        <meta name='description' content='Verify email of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex flex-col bg-bgLight justify-center items-center p-8 rounded-2xl'>
        <h2>Please verify your email</h2>
        <Image src={Logo} alt='Logo' className='rounded-lg' />
        <p>We sent an email to </p>
        <p className='font-bold underline'>{user?.email}</p>
        <p className='pt-4'>Dont see the email?</p>
        <Button onClick={() => firebase.auth().currentUser?.sendEmailVerification()}>Resend Email</Button>
        <small className='pt-8'>Once you have verified refresh the page</small>
        <Link to='.'>
          <BiRefresh className='w-6 h-6' />
        </Link>
      </section>
    </main>
  )
}

export default VerifyEmail
