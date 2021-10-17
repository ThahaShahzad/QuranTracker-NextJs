import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { Link } from 'components/custom'
import Image from 'next/image'

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
const SideNav = ({ baseUrl, styles, listItems, header }: props) => {
  const { pathname } = useRouter()
  const currPath = pathname === baseUrl ? '/' : pathname.substring(baseUrl?.length as number)
  const selectedBg = styles?.selectedBg ? `${styles.selectedBg}` : 'bg-primary-op-50'
  const Styles = {
    aside: `hidden lg:flex flex-col row-span-full p-2 ${styles?.bg}`,
    logo: 'text-center p-2',
    logoText: 'text-font hidden xl:block',
    list: 'mt-20 flex flex-col gap-4 overflow-y-auto',
    listItem: `rounded-xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 xl:px-2 xl:py-4 2xl:p-4 ${styles?.textColor}`
  }
  return (
    <aside className={Styles.aside}>
      <Link button className={Styles.logo} type='primary-nl' to={header.route ?? pathname}>
        {header.image && <Image src={header.image} alt={header.imageAlt} />}
        <h4 className={Styles.logoText}>{header.text}</h4>
      </Link>
      <ul className={Styles.list}>
        {listItems.map((listItem, i) => (
          <li key={listItem.name}>
            <Link
              className={`${Styles.listItem} ${
                (pathname === baseUrl
                  ? currPath === listItem.path
                  : i === 0
                  ? false
                  : currPath.includes(listItem.path)) && selectedBg
              } ${
                (pathname === baseUrl
                  ? currPath === listItem.path
                  : i === 0
                  ? false
                  : currPath.includes(listItem.path)) && styles?.selectedText
              }`}
              type='primary-nl'
              icon={<listItem.icon />}
              button
              to={`${baseUrl ? baseUrl : ''}${listItem.path}`}
            >
              {listItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideNav

// listItems = [
//   {
//     name: 'Overview',
//     path: '/',
//     icon: BsFillHouseFill
//   },
//   {
//     name: 'Position',
//     path: '/position',
//     icon: BsFillPeopleFill
//   },
//   {
//     name: 'Transaction',
//     path: '/transaction',
//     icon: BsFillPersonFill
//   },
//   {
//     name: 'Documents',
//     path: '/documents',
//     icon: BsCheck
//   },
//   {
//     name: 'Account Settings',
//     path: '/accountsettings',
//     icon: BsChatFill
//   },
//   {
//     name: 'Invoice',
//     path: '/invoice',
//     icon: BsChatFill
//   }
// ]
