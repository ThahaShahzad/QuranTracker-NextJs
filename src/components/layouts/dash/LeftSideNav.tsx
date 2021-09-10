import { BsFillPeopleFill, BsFillPersonFill, BsCheck, BsChatFill, BsFillHouseFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from 'components/custom/Link'
import logo from 'public/images/QuranTrackerLogo.png'

interface props {
  listItems?: {
    name: string
    path: string
    icon: IconType
  }[]
}
const LeftSideNav = ({
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
  ]
}: props) => {
  const { pathname } = useRouter()
  const Styles = {
    aside: 'hidden lg:flex row-span-full dark:bg-font-light bg-primary flex-col p-2 rounded-r-2xl',
    logo: 'flex justify-center items-center p-2',
    logoText: 'ml-2 hidden 2xl:block',
    list: 'mt-32 flex flex-col gap-4',
    listItem: 'rounded-3xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 xl:px-2 xl:py-4 2xl:p-4',
    listItemIcon: 'text-font',
    listItemText: 'text-font hidden xl:block',
    listItemSelected: 'border-2 border-font'
  }
  //bg-gradient-to-bl from-[#D1EECC] to-[#57A99A]
  return (
    <aside className={Styles.aside}>
      <Link button className={Styles.logo} type='primary-nl' to='/'>
        <Image src={logo} alt='logo' />
        {/* <p className={Styles.logoText}>QuranTracker</p> */}
      </Link>
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
    </aside>
  )
}

export default LeftSideNav
