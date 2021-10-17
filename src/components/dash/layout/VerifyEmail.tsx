import { useSession } from 'next-auth/client'
import { BiRefresh } from 'react-icons/bi'
import Head from 'next/head'
import { DbUser } from 'lib/models/dbuser'
import { Button, Link } from 'components/custom'
import { useMutation } from 'react-query'
import { ResendVerifyEmailPost } from 'lib/api/auth/queryFunctions/resendVerifyEmail'
// import Logo from '@/public/images/QuranTrackerLogo.png'
// import Image from 'next/image'

const VerifyEmail = () => {
  const [session, loading] = useSession() as [DbUser, boolean]
  const { mutateAsync, isError } = useMutation(ResendVerifyEmailPost)

  return (
    <main className='h-full flex justify-center items-center'>
      <Head>
        <title>Verify Email - QuranTracker</title>
        <meta name='description' content='Verify email of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex flex-col bg-bgLight justify-center items-center p-8 rounded-2xl'>
        <h2>Please verify your emial</h2>
        {/* <Image src={Logo} alt='Logo' className='rounded-lg' /> */}
        <p>We sent an emial to </p>
        <p className='font-bold underline'>{session.dbuser?.email}</p>
        <p className='pt-4'>Dont see the email?</p>
        <Button
          onClick={() => {
            mutateAsync({ dbuser: session.dbuser })
          }}
        >
          Resend Email
        </Button>
        <small className='pt-8'>Once you have verifeid refresh the page</small>
        <Link to='.'>
          <BiRefresh className='w-6 h-6' />
        </Link>
      </section>
    </main>
  )
}

export default VerifyEmail
