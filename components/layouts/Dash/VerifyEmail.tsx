import { Button, Center, Heading, Icon, Link, Text, VStack, useToast } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'
import { useUser } from '@auth0/nextjs-auth0'
import { BiRefresh } from 'react-icons/bi'
import { useLazyAxios } from 'use-axios-client'
import { apiCalls, resendVerifyEmail } from 'util/axios'
import Head from 'next/head'
// import Logo from '@/public/images/QuranTrackerLogo.png'
// import Image from 'next/image'

const VerifyEmail = () => {
  const { whiteBlackColor } = useMyColors()
  const { user } = useUser()
  const toast = useToast()
  const [getData, { data, error, loading }] = useLazyAxios<resendVerifyEmail>(apiCalls.resendVerifyEmail)
  if (data) {
    toast({
      title: 'Email sent.',
      description: `to ${user?.email}`,
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }
  if (error) {
    toast({
      title: 'Error',
      description: `please try again`,
      status: 'error',
      duration: 9000,
      isClosable: true
    })
  }
  return (
    <Center as='main' h='full'>
      <Head>
        <title>Verify Email - QuranTracker</title>
        <meta name='description' content='Verify eamail of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <VStack as='section' bg={whiteBlackColor} p='8' rounded='2xl'>
        {/* <Image src={Logo} alt='Logo' className='rounded-lg' /> */}
        <Heading size='xl'>Please verify your emial</Heading>
        <Text>We sent an emial to </Text>
        <Text fontWeight='bold' decoration='underline'>
          {user?.email}
        </Text>
        <Text pt='4'>Dont see the email?</Text>
        <Button onClick={() => getData()}>Resend Email</Button>
        <Text size='sm' pt='8'>
          Once you have verifeid refresh the page
        </Text>
        <Link href='.'>
          <Icon w='6' h='6' as={BiRefresh} />
        </Link>
      </VStack>
    </Center>
  )
}

export default VerifyEmail
