import React, { ReactNode, useEffect, useState } from 'react'
import BottomNav from '../views/layout/BottomNav'
import LeftSideNav from '../views/layout/LeftSideNav'
import TopNav from '../views/layout/TopNav'
// import RightSideNav from './RightSideNav'
// import MobileRightSideNav from './MobileRightSideNav'
// import { useWindowSize } from '@/components/hooks/use-window-size'

const Layout: React.FC = ({ children }) => {
  // const { width } = useWindowSize()
  // const [showSideNav, setshowSideNav] = useState(false)
  // useEffect(() => {
  //   if (width > 1020) setshowSideNav(false)
  // }, [width])
  // const sideNav = {
  //   showSideNav,
  //   setshowSideNav
  // }
  return (
    <div className='font-display bg-inverse h-full grid grid-flow-col grid-rows-DashLayout lg:grid-cols-DashLayout grid-cols-1 lg:grid-flow-row lg:grid-rows-lgDashLayout xl:grid-cols-lgDashLayout'>
      <TopNav />
      <LeftSideNav />
      {children}
      {/* <RightSideNav />
      <MobileRightSideNav {...sideNav} /> */}
      <BottomNav />
    </div>
  )
}

const DashLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default DashLayout
