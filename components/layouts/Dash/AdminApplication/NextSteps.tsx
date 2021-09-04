import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

const NextSteps = () => {
  const { bgLight } = useMyColors()
  return (
    <Container textAlign='center' bg={bgLight} p='8' rounded='2xl'>
      <Box mb='12'>
        <Heading mb='4'>Next Steps</Heading>
        <Text>
          Thank you for filling out your application for Quran Tracker. We will contact you as soon as possible with
          more information about selecting a plan, pricing, and how to add accounts.
        </Text>
        <Text mt='10'>To contact us direclty ...</Text>
      </Box>
    </Container>
  )
}

export default NextSteps
