import { useForm } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'
import { Button, NumberInput, Select, TextInput } from 'components/custom'
import { cities, formatedStates } from 'public/UsStatesCities'
import { AdminApplicationSchema, AdminApplicationType } from 'lib/models/auth'
import { joiResolver } from '@hookform/resolvers/joi/dist/joi'
import { useMutation } from 'react-query'
import { AdminApplicationPost } from 'lib/api/auth/apiCalls/adminApplication'
import { useAuth } from 'lib/contexts/auth'

interface props {
  setNextStep: Dispatch<SetStateAction<boolean>>
}

const SchoolForm = ({ setNextStep }: props) => {
  const { user } = useAuth()
  const { mutateAsync, isError } = useMutation(AdminApplicationPost)
  const {
    register,
    handleSubmit,
    watch,
    formState: { touchedFields, errors }
  } = useForm<AdminApplicationType>({
    resolver: joiResolver(AdminApplicationSchema)
  })
  const watchState = watch('state')
  const citiesArray = touchedFields.state && watchState ? cities(watchState) : []
  const onSubmit = async (formData: AdminApplicationType) => {
    try {
      const res1 = await mutateAsync({ user, school: formData })
      if (res1) {
        setNextStep(true)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className='text-center bg-bgLight p-8 rounded-2xl'>
      <div className='mb-8'>
        <h2 className='mb-4'>Admin Application</h2>
        <p>
          Thank you for signing up with Quran Tracker. Please fill out this application to get started. After we receive your application, we will
          contact you with further information.
        </p>
      </div>
      <div className='p-4 rounded-xl pb-6'>
        <h2 className='mb-4'>School Information</h2>
        <form className='flex flex-col text-left gap-4' onSubmit={handleSubmit(onSubmit)}>
          <TextInput name='schoolName' label='School Name' register={register} />
          <div className='flex justify-around'>
            <Select name='state' label='State' options={formatedStates} register={register} />
            <Select name='city' label='City' options={citiesArray} register={register} />
          </div>
          <Select
            name='type'
            label='School Type'
            options={[
              { label: 'Islamic', value: 'Islamic' },
              { label: 'Masjid', value: 'Masjid' },
              { label: 'Other', value: 'Other' }
            ]}
            register={register}
          />
          <div className='flex'>
            <TextInput type='email' name='email' label='Email' register={register} />
            <NumberInput name='phone' label='School Phone Number' register={register} />
          </div>

          {/* {error ||
              (error1 && (
                <Alert status='error'>
                  <AlertDescription>Please try again.</AlertDescription>
                  <CloseButton position='absolute' right='8px' top='8px' />
                </Alert>
              ))} */}
          <Button size='lg' submitType='submit'>
            Next
          </Button>
          {isError && <p className='text-red-500'>Error please try again</p>}
        </form>
      </div>
    </main>
  )
}

export default SchoolForm
