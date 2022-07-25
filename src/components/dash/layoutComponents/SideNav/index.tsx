import { IconType } from 'react-icons'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

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
  return (
    <>
      <MobileNav baseUrl='/dash' header={header} listItems={listItems} />
      <DesktopNav baseUrl='/dash' header={header} listItems={listItems} styles={styles} />
    </>
  )
}

export default SideNav
