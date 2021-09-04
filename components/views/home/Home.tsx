import { GetStaticProps } from 'next'
import WeekCalender from '@/components/views/home/WeekCalender'
import NewAssignment from './NewAssignment'
import RecentMessages from './RecentMessages'

const Home = () => {
  return (
    <main className='h-full bg-inverse grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2'>
      <WeekCalender />
      <NewAssignment />
      <RecentMessages />
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

export default Home
