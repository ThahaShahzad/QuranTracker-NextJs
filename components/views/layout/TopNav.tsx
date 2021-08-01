import { useDate } from '@/components/hooks/useDate'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ThemeToggle = dynamic(() => import('@/components/custom/ThemeToggle'), {
  ssr: false
})

const TopNav = () => {
  const { time, date, wish } = useDate()
  return (
    <nav className='flex justify-between border-b-2 p-2 lg:p-4'>
      <div className='flex flex-col lg:flex-row items-center'>
        <h4 className='lg:mr-2 '>Asalamualakum </h4>
        <h4 className=''>Khalid</h4>
      </div>

      <div className='flex items-center gap-4'>
        <small className='hidden sm:block bg-normal-light rounded-xl p-2'>{time}</small>
        <small className='hidden sm:block bg-normal-light rounded-xl p-2'>{date}</small>
        <ThemeToggle />
        <div className='rounded-full'>
          <Image src='/images/male-avatar.png' width='45' height='45' />
        </div>
      </div>
    </nav>
  )
}

export default TopNav
