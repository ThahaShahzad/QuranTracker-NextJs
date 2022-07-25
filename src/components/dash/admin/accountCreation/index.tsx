import { Button, ThemeToggleFloatingButton } from 'components/custom'
import { AccountCreationPost } from 'lib/api/auth/apiCalls/accountCreation'
import { useAccountCreationContext } from 'lib/contexts/accountCreation'
import { useAuth } from 'lib/contexts/auth'
import { completedForm, StudentAccountType } from 'lib/models/auth/accountCreation'
import Head from 'next/head'
import { useState } from 'react'
import { useMutation } from 'react-query'
import ClassTable from './classTable'
import InputTable from './inputTable'

const AccountCreation = () => {
  const [nextStep, setNextStep] = useState(false)
  const { user } = useAuth()
  const { form } = useAccountCreationContext()
  const { mutateAsync, isError } = useMutation(AccountCreationPost)
  const classHeaders = ['Name', 'Teacher Email', 'Students']

  const onSubmit = async () => {
    try {
      const res = await mutateAsync({ ...(form as completedForm), schoolId: user.school.value.id as string })

      if (res) {
        console.log(res)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Head>
        <title>AccountCreation - QuranTracker</title>
        <meta name='description' content='Account Creation form of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-full text-center p-4'>
        <h2>AccountCreation</h2>
        <ThemeToggleFloatingButton />
        {!nextStep ? (
          <>
            {Object.values(form).length === 4 && !Object.values(form).includes(null) && <Button onClick={() => setNextStep(true)}>Next</Button>}
            <div className='space-y-12'>
              <InputTable name='Students' headers={['Student Id', 'Parent Email', 'First Name', 'Last Name', 'age', 'grade']} />
              <InputTable name='Parents' headers={['First Name', 'Last Name', 'Email', 'Child(ren)']} />
              <InputTable name='Teachers' headers={['First Name', 'Last Name', 'Email']} />
              <InputTable name='Classes' headers={classHeaders} />
            </div>
          </>
        ) : (
          <>
            <Button onClick={onSubmit}>Create Accounts</Button>
            {form.Classes?.map((classObject) => (
              <ClassTable
                key={classObject.Name}
                tableName={classObject.Name}
                classHeaders={classHeaders}
                tableData={classObject}
                studentArray={form.Students as StudentAccountType[]}
              />
            ))}
          </>
        )}
      </main>
    </>
  )
}

export default AccountCreation
