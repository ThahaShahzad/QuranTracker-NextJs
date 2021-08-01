import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export type Props = {
  logo: {
    logoText: string
    logoImg: string
  }
  links: {
    linkText: string
    linkRoute: string
    primary?: boolean
    secondary?: boolean
  }[]
}
const Navbar: React.FC<Props> = (props) => {
  return (
    <header className='flex items-center justify-center max-w-screen-xl mx-auto pt-8 pb-10 md:pb-14'>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </header>
  )
}

export default Navbar
