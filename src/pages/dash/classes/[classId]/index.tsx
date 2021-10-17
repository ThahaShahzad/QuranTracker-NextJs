import { Link } from 'components/custom/index'
import StudentBox from 'components/dash/classes/StudentBox'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import DashLayout from 'components/layouts/DashLayout'

import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { DbUser } from 'lib/models/dbuser'

const ClassDetails = () => {
  const { pathname, query } = useRouter()
  const classId = query.classId
  return (
    <main>
      <div className='flex justify-between'>
        <Link type='primary-nl' to='/dash/classes'>
          <BiArrowBack className='m-2 w-10 h-10 p-2 bg-primary rounded-3xl' />
        </Link>
        <h3 className='text-center p-2'>{classId}</h3>
        <div></div>
      </div>

      <div className='grid grid-cols-3 gap-4 p-5'>
        <StudentBox />
      </div>
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
ClassDetails.getLayout = DashLayout

export default ClassDetails
