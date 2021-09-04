import DashLayout from '@/components/layouts/Dash/DashLayout'
import { GetStaticProps } from 'next'

const Students = () => {
  return (
    <main className='flex justify-center'>
      <h2>Students</h2>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

Students.getLayout = DashLayout

export default Students
