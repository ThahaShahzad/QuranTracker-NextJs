import DashLayout from 'components/layouts/dash/DashLayout'
import { GetStaticProps } from 'next'

const Grading = () => {
  return (
    <main className='flex justify-center'>
      <h2>Grading</h2>
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

Grading.getLayout = DashLayout

export default Grading
