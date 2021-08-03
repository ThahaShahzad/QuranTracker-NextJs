import { Link } from '@/components/custom'
import { useDate } from '@/components/hooks/useDate'
import { useUser } from '@auth0/nextjs-auth0'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ThemeToggle = dynamic(() => import('@/components/custom/ThemeToggle'), {
  ssr: false
})

const TopNav = () => {
  const { time, date, wish } = useDate()
  const { user, error, isLoading } = useUser()
  console.log(user)

  return (
    <nav className='flex justify-between border-b-2 p-2 lg:p-4'>
      <div className='flex flex-col lg:flex-row items-center'>
        <h4 className='lg:mr-2 '>Asalamualakum </h4>
        <h4 className=''>{user?.name?.includes('@') ? user.nickname : user?.name}</h4>
      </div>

      <div className='flex items-center gap-4'>
        <small className='hidden sm:block bg-normal-light rounded-xl p-2'>{time}</small>
        <small className='hidden sm:block bg-normal-light rounded-xl p-2'>{date}</small>
        <ThemeToggle />
        <Link type='primary-nl' to='/api/auth/logout'>
          <Image
            src={user?.picture ? user?.picture : '/images/male-avatar.png'}
            className='rounded-full'
            alt='male avatar'
            width='50'
            height='50'
          />
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
