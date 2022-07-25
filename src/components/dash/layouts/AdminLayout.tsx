import { BsChatFill, BsFillHouseFill, BsFillPeopleFill, BsFillPersonFill } from 'react-icons/bs'
import { AiFillCreditCard } from 'react-icons/ai'

import SideNav from 'components/dash/layoutComponents/SideNav'
import TopNav from 'components/dash/layoutComponents/TopNav'
import QTLogo from 'public/images/QuranTrackerLogo.png'

const AdminLayout: React.FC = ({ children }) => {
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
      name: 'Accounts',
      path: '/accounts',
      icon: BsFillPersonFill
    },
    {
      name: 'Finance',
      path: '/finance',
      icon: AiFillCreditCard
    }
    // ,
    // {
    //   name: 'Chat',
    //   path: '/chat',
    //   icon: BsChatFill
    // }
  ]
  return (
    <div className='font-display h-screen bg-font-light grid grid-rows-[10%,90%] md:grid-rows-[10%,90%] md:grid-cols-[120px,auto] xl:grid-cols-[15%,auto]'>
      <TopNav />
      <SideNav
        baseUrl='/dash'
        header={{ text: 'QuranTracker', route: '/dash', image: QTLogo }}
        styles={{
          bg: 'bg-bg'
        }}
        listItems={sideNavItems}
      />
      {children}
    </div>
  )
}

export default AdminLayout
