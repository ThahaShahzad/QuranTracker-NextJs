import { useState } from 'react'
import { Button, Link } from 'components/custom'
import { BiMenu } from 'react-icons/bi'
import { AnimatePresence, motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { useAuth } from 'lib/contexts/auth'

interface props {
  baseUrl?: string
  styles?: {
    bg?: string
    textColor?: string
    selectedText?: string
    selectedBg?: string
  }
  header: {
    text: string
    image?: any
    imageAlt?: string
    route?: string
  }
  listItems: {
    name: string
    path: string
    icon: IconType
  }[]
}
const MobileNav = ({ baseUrl, styles, listItems, header }: props) => {
  const [showSideNav, setshowSideNav] = useState(false)
  const { signout } = useAuth()
  const { pathname, push } = useRouter()
  const currPath = pathname === baseUrl ? '/' : pathname.substring(baseUrl?.length as number)
  const selectedBg = styles?.selectedBg ? `${styles.selectedBg}` : 'bg-base-300'
  const Styles = {
    list: 'mt-20 flex flex-col gap-4 overflow-y-auto',
    listItem: `rounded-xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 ${styles?.textColor}`
  }
  const MobileStyles = {
    nav: 'flex lg:hidden flex-1 justify-between items-center px-4 overflow-hidden',
    sideNav: 'navShadow h-full w-[300px] fixed top-0 left-0 z-20 bg-primary p-4 rounded-r-2xl',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-font',
    navLinks: 'flex flex-col  gap-4 h-full',
    actionLink: 'mt-auto w-full text-center',
    'close-nav': 'fixed top-0 right-0 bottom-0 z-20 w-[calc(100%-300px)] bg-transparent px-4'
  }
  return (
    <>
      <Button className='md:hidden fixed top-5 left-1' onClick={() => setshowSideNav(!showSideNav)}>
        <BiMenu />
      </Button>
      <AnimatePresence>
        {showSideNav && (
          <>
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{
                x: 0
              }}
              exit={{
                x: '-100%'
              }}
              transition={{ type: 'spring', bounce: 0 }}
              className={MobileStyles.sideNav}
            >
              <div className={MobileStyles.navLinks}>
                <ul className={Styles.list}>
                  {listItems.map((listItem, i) => (
                    <li
                      key={listItem.name}
                      onClick={() => {
                        setshowSideNav(!showSideNav)
                      }}
                    >
                      <Link
                        className={`${Styles.listItem} ${
                          (pathname === baseUrl ? currPath === listItem.path : i === 0 ? false : currPath.includes(listItem.path)) && selectedBg
                        } ${
                          (pathname === baseUrl ? currPath === listItem.path : i === 0 ? false : currPath.includes(listItem.path)) &&
                          styles?.selectedText
                        }`}
                        type='primary-nl'
                        icon={<listItem.icon />}
                        button
                        to={`${baseUrl ? baseUrl : ''}${listItem.path}`}
                      >
                        <p>{listItem.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className='flex flex-col gap-4 mt-auto'>
                  <Button onClick={() => push('/dash/settings')}>Profile</Button>
                  <Button onClick={() => signout()}>Logout</Button>
                </div>
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
              className={MobileStyles['close-nav']}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
