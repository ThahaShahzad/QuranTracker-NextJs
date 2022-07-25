import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { Button, Link } from 'components/custom'
import Image from 'next/image'
import { useAuth } from 'lib/contexts/auth'
import { BsFillGearFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

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

const DesktopNav = ({ baseUrl, styles, listItems, header }: props) => {
  const { pathname, push } = useRouter()
  const { signout } = useAuth()
  const currPath = pathname === baseUrl ? '/' : pathname.substring(baseUrl?.length as number)
  const selectedBg = styles?.selectedBg ? `${styles.selectedBg}` : 'bg-primary-op-50'
  const selectedText = styles?.selectedText ? `${styles.selectedText}` : 'bg-primary-op-50'
  const Styles = {
    aside: `hidden md:flex flex-col row-span-full p-2 border-r-2 ${styles?.bg}`,
    logo: 'text-center p-2',
    logoText: 'text-font hidden xl:block',
    list: 'mt-20 flex flex-col gap-4 overflow-y-auto',
    listItem: `rounded-xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 ${styles?.textColor} group hover:bg-primary-op-50`
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
                (pathname === baseUrl ? currPath === listItem.path : i === 0 ? false : currPath.includes(listItem.path)) && selectedBg
              } ${(pathname === baseUrl ? currPath === listItem.path : i === 0 ? false : currPath.includes(listItem.path)) && selectedText}`}
              type='primary-nl'
              icon={<listItem.icon />}
              button
              to={`${baseUrl ? baseUrl : ''}${listItem.path}`}
            >
              <p className='hidden xl:block'>{listItem.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex flex-col gap-4 mt-auto'>
        <Button className='flex items-center justify-center' onClick={() => push('/dash/settings')}>
          <BsFillGearFill className='block xl:hidden' />
          <p className='hidden xl:block'>Settings</p>
        </Button>
        <Button className='flex items-center justify-center' onClick={() => signout()}>
          <BiLogOut className='block xl:hidden' /> <p className='hidden xl:block'>Logout</p>
        </Button>
      </div>
    </aside>
  )
}

export default DesktopNav
