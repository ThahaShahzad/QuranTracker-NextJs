import { BsCheck, BsFillHouseFill, BsFillPeopleFill, BsFillPersonFill } from 'react-icons/bs'

import SideNav from 'components/dash/layoutComponents/SideNav'
import TopNav from 'components/dash/layoutComponents/TopNav'

const TeacherLayout: React.FC = ({ children }) => {
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
    }
  ]
  return (
    <div className='font-display h-screen bg-font-light grid grid-rows-[10%,90%] md:grid-cols-[120px,auto] xl:grid-cols-[15%,auto]'>
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
    </div>
  )
}

export default TeacherLayout
