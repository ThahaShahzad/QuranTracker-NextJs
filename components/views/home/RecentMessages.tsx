import { Box, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useMyColors } from 'styles/colors'

const RecentMessages = () => {
  const { bgLight } = useMyColors()
  return (
    <Box
      as='section'
      bg={bgLight}
      shadow='2xl'
      rounded='xl'
      className='hidden sm:block text-center mr-5 ml-2 mb-5 p-1 sm:p-2'
    >
      {/* <section className='hidden sm:block text-center bg-normal-light shadow-xl rounded-2xl mr-5 ml-2 mb-5 p-1 sm:p-2'> */}
      <Heading className='md:text-4xl'>Recent Messages</Heading>
      <Text>sutff</Text>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

export default RecentMessages
