import { GetStaticProps } from 'next'
import WeekCalender from 'components/dash/home/WeekCalender'
import NewAssignment from './home/NewAssignment'
import RecentMessages from './home/RecentMessages'

const Home = () => {
  return (
    <main className='bg-bgLight p-4 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2'>
      <WeekCalender />
      <NewAssignment />
      <RecentMessages />
    </main>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   return {
//     props: {
//       data: null
//     }
//   }
// }

export default Home
