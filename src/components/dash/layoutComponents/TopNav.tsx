import { Link } from 'components/custom'
import { useAuth } from 'lib/contexts/auth'
// import AvatarDropDown from 'components/custom/AvatarDropDown'
import { useDate } from 'lib/hooks/useDate'
// import { DbUser } from 'lib/models/dbuser'
// import { useSession } from 'next-auth/client'
import Image from 'next/image'

const TopNav = () => {
  const { time, date, wish } = useDate()
  const { user } = useAuth()
  return (
    <nav className='flex justify-between bg-bg p-2 lg:p-4 border-b-2'>
      <div className='flex items-center gap-2 ml-14 md:ml-0 lg:mr-2'>
        <h4 className=''>Asalamualakum </h4>
        {user?.firstName}
      </div>

      <div className='flex items-center gap-4'>
        {/* <small className='hidden sm:block bg-font-light rounded-xl p-2'>{time}</small> */}
        <small className='hidden sm:block bg-font-light rounded-xl p-2'>{date}</small>
        {/* <ThemeToggle /> */}
        <Link type='primary-nl' to='/dash/settings'>
          {/* <Image src={'/images/male-avatar.png'} className='rounded-full' alt='male avatar' width='50' height='50' /> */}
          <Image
            src='https://i7.uihere.com/icons/304/187/640/person-cfad3fe4aead102f4161896324dd8c29.png'
            alt='Profile pic'
            height='50%'
            width='50%'
            className='rounded-full'
          />
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
