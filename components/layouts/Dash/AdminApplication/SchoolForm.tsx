import {
  Box,
  Select,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Button,
  Tooltip,
  Alert,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMyColors } from 'styles/colors'
import { Dispatch, SetStateAction } from 'react'
import { useLazyAxios } from 'use-axios-client'
import { apiCalls } from 'util/axios'
import { BsInfoCircleFill } from 'react-icons/bs'
import { useEffect } from 'react'

interface props {
  setNextStep: Dispatch<SetStateAction<boolean>>
}
interface FormInputs {
  name: string
  state: string
  city: string
  type: 'Islamic' | 'Masjid' | 'Other'
  email: string
  phone: string
}

const SchoolForm = ({ setNextStep }: props) => {
  const { bgLight } = useMyColors()
  const [sendEmail, { data, error, loading }] = useLazyAxios<boolean>(apiCalls.adminApplicationSubmit.sendEmail)
  const [updateUser, { data: data1, error: error1, loading: loading1 }] = useLazyAxios<boolean>(
    apiCalls.adminApplicationSubmit.updateUserDb
  )
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      state: '',
      city: '',
      type: 'Islamic',
      email: '',
      phone: ''
    }
  })
  const onSubmit = async (formData: FormInputs) => {
    //mongodb call
    updateUser(formData)
    sendEmail({ adminEmail: formData.email })
  }
  useEffect(() => {
    if (data && data1) {
      setNextStep(true)
    }
  }, [data, data1])
  return (
    <Container textAlign='center' bg={bgLight} p='8' rounded='2xl'>
      <Box mb='12'>
        <Heading mb='4'>Admin Application</Heading>
        <Text>
          Thank you for signing up with Quran Tracker. Please fill out this application to get started. After we recieve
          your appliaction, we will contact you with further information.
        </Text>
      </Box>
      <Box p='4' rounded='xl' pb='10'>
        <Heading size='xl' mb='4'>
          School Information
        </Heading>
        <VStack as='form' onSubmit={handleSubmit(onSubmit)} spacing='4'>
          <FormControl id='school-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='School name' {...register('name')} />
          </FormControl>
          <FormControl id='school-name' isRequired>
            <HStack>
              <FormControl id='school-name' isRequired>
                <FormLabel>State</FormLabel>
                <Select placeholder='Select school state' {...register('state')}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <FormControl id='school-name' isRequired>
                <FormLabel>City</FormLabel>
                <Select placeholder='Select school city' {...register('city')}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
            </HStack>
          </FormControl>
          <FormControl id='school-name' isRequired>
            <FormLabel>School type</FormLabel>
            <Select placeholder='Select type' {...register('type')}>
              <option value='Islamic'>Islamic</option>
              <option value='Masjid'>Masjid</option>
              <option value='Other'>Other</option>
            </Select>
          </FormControl>
          <FormControl id='school-name' isRequired>
            <HStack>
              <FormControl id='school-name' isRequired>
                <Tooltip label='The email we can contact the school admin with.' placement='top' aria-label='A tooltip'>
                  <FormLabel display='flex'>
                    Email <BsInfoCircleFill className='ml-2' />
                  </FormLabel>
                </Tooltip>
                <Input placeholder='Email' type='email' {...register('email')} />
              </FormControl>
              <FormControl id='school-name' isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input placeholder='Phone number' type='tel' {...register('phone')} />
              </FormControl>
            </HStack>
          </FormControl>
          {error ||
            (error1 && (
              <Alert status='error'>
                <AlertDescription>Please try again.</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
            ))}
          <Button isLoading={loading || loading1} size='lg' type='submit'>
            Next
          </Button>
        </VStack>
      </Box>
    </Container>
  )
}

export default SchoolForm
