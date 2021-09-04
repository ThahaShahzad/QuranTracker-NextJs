import { HStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import NextSteps from './NextSteps'
import SchoolForm from './SchoolForm'

const AdminApplication = () => {
  const [nextStep, setNextStep] = useState(false)
  return (
    <HStack h='full' justify='center' alignItems='center' px='4'>
      <Head>
        <title>Admin Application - QuranTracker</title>
        <meta name='description' content='Admin application form of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!nextStep ? <SchoolForm setNextStep={setNextStep} /> : <NextSteps />}
    </HStack>
  )
}

export default AdminApplication
