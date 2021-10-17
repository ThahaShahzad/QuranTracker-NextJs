import { Button } from 'components/custom'
import Head from 'next/head'
import { createRef } from 'react'
import { CSVReader } from 'react-papaparse'

const AccountCreation = () => {
  const buttonRef = createRef<any>()
  const handleOpenDialog = (e: any) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  const handleOnFileLoad = (data: any) => {
    console.log(data)
  }

  const handleRemoveFile = (e: any) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
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
        {/* <form onSubmit={handleSubmit(onSubmit)} className='mt-32'>
          <input type='file' {...(register('accCSV'), { required: true })} />
          <Button submitType='submit'>Create Accounts</Button>
        </form> */}
        <CSVReader
          ref={buttonRef}
          onFileLoad={handleOnFileLoad}
          noClick
          noDrag
          config={{
            header: true
          }}
          style={{}}
        >
          {({ file }: any) => (
            <aside>
              <Button onClick={handleOpenDialog}>Browe file</Button>
              <div>{file && file.name}</div>
              <Button onClick={handleRemoveFile}>Remove</Button>
            </aside>
          )}
        </CSVReader>
      </main>
    </>
  )
}

export default AccountCreation
