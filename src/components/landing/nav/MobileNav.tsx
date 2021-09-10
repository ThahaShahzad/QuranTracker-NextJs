import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseSquare } from 'react-icons/ai'

import { Button, Link } from 'components/custom/index'

export type Props = {
  logo: {
    logoText: string
    logoImg: any
  }
  links: {
    linkText: string
    linkRoute: string
    primary?: boolean
    secondary?: boolean
  }[]
}

const MobileNav: React.FC<Props> = ({ logo, links }) => {
  const [showSideNav, setshowSideNav] = useState(false)
  const Styles = {
    nav: 'flex lg:hidden flex-1 justify-between items-center px-4 overflow-hidden',
    sideNav: 'navShadow h-full w-2/3 fixed top-0 right-0 z-20 bg-primary py-8 px-4 rounded-l-2xl sm:w-1/3',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-font',
    navLinks: 'flex flex-col items-start gap-4 h-full px-8 pb-8',
    actionLink: 'mt-auto w-full text-center',
    'close-nav': 'fixed top-0 left-0 bottom-0 z-20 w-1/3 bg-transparent px-4 sm:w-2/3'
  }
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.logo} type='primary-nl' to='/'>
        <Image src={logo.logoImg} alt='logo' />
        <h4 className={Styles.logoText}>{logo.logoText}</h4>
      </Link>
      {!showSideNav && (
        <div className='nav-toggle-open' onClick={() => setshowSideNav(!showSideNav)}>
          <FiMenu />
        </div>
      )}
      <AnimatePresence>
        {showSideNav && (
          <>
            <motion.aside
              initial={{ x: '100%' }}
              animate={{
                x: 0
              }}
              exit={{
                x: '100%'
              }}
              transition={{ type: 'spring', bounce: 0 }}
              className={Styles.sideNav}
            >
              <div className={Styles.sideNavIconContainer}>
                <button className='nav-toggle-close' onClick={() => setshowSideNav(!showSideNav)}>
                  <AiFillCloseSquare className={Styles.sideNavIcon} />
                </button>
              </div>

              <div className={Styles.navLinks}>
                {links.map((link, index) => (
                  <div
                    key={index}
                    className={`${link.primary ? 'w-full' : link.secondary ? Styles.actionLink : null}`}
                    onClick={() => setshowSideNav(!showSideNav)}
                  >
                    {link.primary ? (
                      <Link type='primary-nl' button={true} to={link.linkRoute}>
                        <Button full={true} type='primary-d'>
                          {link.linkText}
                        </Button>
                      </Link>
                    ) : link.secondary ? (
                      <Link button={true} to={link.linkRoute}>
                        <Button full={true} className='bg-primary' type='primary-i-d'>
                          {link.linkText}
                        </Button>
                      </Link>
                    ) : (
                      <Link to={link.linkRoute}>{link.linkText}</Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.aside>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{ type: 'spring', bounce: 0 }}
              onClick={() => {
                setshowSideNav(!showSideNav)
              }}
              className={Styles['close-nav']}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MobileNav

//
