import Head from 'next/head'
import { useState } from 'react'
import NextSteps from './NextSteps'
import SchoolForm from './SchoolForm'

const AdminApplication = () => {
  const [nextStep, setNextStep] = useState(false)
  return (
    <>
      <Head>
        <title>Admin Application - QuranTracker</title>
        <meta name='description' content='Admin application form of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id='AdminApplicationWrapper' className='h-full flex justify-center items-center px-4'>
        {!nextStep ? <SchoolForm setNextStep={setNextStep} /> : <NextSteps />}
      </div>
    </>
  )
}

export default AdminApplication
