import { Button } from 'components/custom'
import { useAccountCreationContext } from 'lib/contexts/accountCreation'
import { StudentAccountType } from 'lib/models/auth/accountCreation'
import Head from 'next/head'
import { useState } from 'react'
import ClassTable from './classTable'
import InputTable from './inputTable'

const AccountCreation = () => {
  const [nextStep, setNextStep] = useState(false)
  const { form } = useAccountCreationContext()
  const classHeaders = ['Name', 'Teacher Email', 'Students']
  return (
    <>
      <Head>
        <title>AccountCreation - QuranTracker</title>
        <meta name='description' content='Account Creation form of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-full text-center p-4'>
        <h2>AccountCreation</h2>
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
            <Button>Create Accounts</Button>
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