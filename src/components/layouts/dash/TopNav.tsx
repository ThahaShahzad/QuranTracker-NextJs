import { Link } from 'components/custom'
import { useDate } from 'lib/hooks/useDate'
import { DbUser } from 'lib/models/dbuser'
import { useSession } from 'next-auth/client'
import Image from 'next/image'

const TopNav = () => {
  const { time, date, wish } = useDate()
  const [session, loading] = useSession() as [DbUser, boolean]
  return (
    <nav className='flex justify-between bg-bg p-2 lg:p-4'>
      <div className='flex flex-col lg:flex-row items-center'>
        <h4 className='lg:mr-2 '>Asalamualakum </h4>
        {/* <h4 className=''>daha</h4> */}
        {!loading && session.dbuser?.userName}
      </div>

      <div className='flex items-center gap-4'>
        <small className='hidden sm:block bg-font-light rounded-xl p-2'>{time}</small>
        <small className='hidden sm:block bg-font-light rounded-xl p-2'>{date}</small>
        {/* <ThemeToggle /> */}
        <Link type='primary-nl' to='/api/auth/signout'>
          <Image src={'/images/male-avatar.png'} className='rounded-full' alt='male avatar' width='50' height='50' />
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
