import { BsFillPeopleFill, BsFillPersonFill, BsCheck, BsChatFill, BsFillHouseFill, BsList } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { Link } from 'components/custom/Link'

interface props {
  listItems?: {
    name: string
    path: string
    icon: IconType
  }[]
  showSideNav?: boolean
  setshowSideNav?: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomNav = ({
  listItems = [
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
  ],
  showSideNav,
  setshowSideNav
}: props) => {
  const { pathname } = useRouter()
  const Styles = {
    footer: 'lg:hidden flex justify-center items-center bg-gradient-to-bl from-[#D1EECC] to-[#57A99A] p-2 sm:p-5',
    logo: 'flex items-center',
    logoText: 'ml-2',
    list: 'flex gap-4',
    listItem: 'flex flex-col items-center justify-center rounded-3xl xl:justify-start p-2 xs:p-4 sm:py-2 sm:px-4 xl:gap-2 xl:px-2 xl:py-4 2xl:p-4',
    listItemIcon: 'text-bg',
    listItemText: 'text-bg hidden sm:block',
    listItemSelected: 'border-2 border-bg',
    toggleSideNav: 'px-4 sm:px-0'
  }
  return (
    <footer className={Styles.footer}>
      {/* <div></div> */}
      <ul className={Styles.list}>
        {listItems.map((listItem) => (
          <li key={listItem.name}>
            <Link
              className={`${Styles.listItem} ${pathname === listItem.path && Styles.listItemSelected}`}
              type='primary-nl'
              button
              to={listItem.path}
            >
              <listItem.icon className={Styles.listItemIcon} />
              <p className={Styles.listItemText}>{listItem.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className={Styles.toggleSideNav} onClick={() => setshowSideNav(!showSideNav)}>
        <BsList />
      </div> */}
    </footer>
  )
}

export default BottomNav
