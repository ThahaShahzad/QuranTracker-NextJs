import DashLayout from 'components/layouts/DashLayout'

import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

const Students = () => {
  return (
    <main className='flex justify-center'>
      <h2>Students</h2>
    </main>
  )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = (await getSession({ req })) as DbUser
  if (!session) {
    res.writeHead(307, { Location: '/auth/signin' })
    res.end()
    return { props: {} }
  }
  return {
    props: { session } // will be passed to the page component as props
  }
}

Students.getLayout = DashLayout

export default Students
