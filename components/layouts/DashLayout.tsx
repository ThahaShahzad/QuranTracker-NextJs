import BottomNav from '../views/layout/BottomNav'
import LeftSideNav from '../views/layout/LeftSideNav'
import TopNav from '../views/layout/TopNav'
import { UserProvider, withPageAuthRequired } from '@auth0/nextjs-auth0'

const DashLayout: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <div className='font-display bg-inverse h-full grid grid-flow-col grid-rows-DashLayout lg:grid-cols-DashLayout grid-cols-1 lg:grid-flow-row lg:grid-rows-lgDashLayout xl:grid-cols-lgDashLayout'>
        <TopNav />
        <LeftSideNav />
        {children}
        {/* <RightSideNav />
      <MobileRightSideNav {...sideNav} /> */}
        <BottomNav />
      </div>
    </UserProvider>
  )
}

export default withPageAuthRequired(DashLayout)
