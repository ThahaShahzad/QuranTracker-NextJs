import { BsCheck, BsChatFill, BsFillHouseFill, BsFillPeopleFill, BsFillPersonFill } from 'react-icons/bs'

import BottomNav from 'components/dash/layout/BottomNav'
import { SideNav } from 'components/custom'
import TopNav from 'components/dash/layout/TopNav'

const GridLayout: React.FC = ({ children }) => {
  const sideNavItems = [
    {
      name: 'Home',
      path: '/',
      icon: BsFillHouseFill
    },
    {
      name: 'Classes',
      path: '/classes',
      icon: BsFillPeopleFill
    },
    {
      name: 'Students',
      path: '/students',
      icon: BsFillPersonFill
    },
    {
      name: 'Grading',
      path: '/grading',
      icon: BsCheck
    },
    {
      name: 'Chat',
      path: '/chat',
      icon: BsChatFill
    }
  ]
  return (
    <div className='font-display bg-font-light grid grid-flow-col grid-cols-1 grid-rows-[75px,auto,75px] lg:grid-cols-[100px,auto] lg:grid-flow-row lg:grid-rows-[10%,90%] xl:grid-cols-[300px,auto]'>
      <TopNav />
      <SideNav
        baseUrl='/dash'
        header={{ text: 'QuranTracker', route: '/dash' }}
        styles={{
          bg: 'bg-bg'
        }}
        listItems={sideNavItems}
      />
      {children}
      {/* <RightSideNav />
      <MobileRightSideNav {...sideNav} /> */}
      <BottomNav />
    </div>
  )
}

export default GridLayout
