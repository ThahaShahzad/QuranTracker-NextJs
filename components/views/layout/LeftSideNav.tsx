import { BsFillPeopleFill, BsFillPersonFill, BsCheck, BsChatFill, BsFillHouseFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from '@/components/custom/Link'
import logo from '@/public/images/QuranTrackerLogo.png'
import { Flex, Icon, List, ListItem, Text, useMediaQuery } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

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
  const [isLg] = useMediaQuery('(min-width: 1024px)')
  const { dashLeftNavColor } = useMyColors()
  const Styles = {
    aside: 'hidden lg:flex row-span-full dark:bg-normal-light bg-primary flex-col p-2 rounded-r-2xl',
    logo: 'flex justify-center items-center p-2',
    logoText: 'ml-2 hidden 2xl:block',
    list: 'mt-32 flex flex-col gap-4',
    listItem: 'rounded-3xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 xl:px-2 xl:py-4 2xl:p-4',
    listItemIcon: 'text-normal',
    listItemText: 'text-normal',
    listItemSelected: 'border-2 border-normal'
  }
  //bg-gradient-to-bl from-[#D1EECC] to-[#57A99A]
  return (
    <Flex
      as='aside'
      direction='column'
      gridRow='1 / -1'
      p='2'
      roundedRight='2xl'
      bg={dashLeftNavColor}
      display={`${!isLg && 'none'}`}
    >
      <Link to='/' display='flex' justifyContent='center' p='2'>
        <Image src={logo} alt='logo' />
        {/* <p className={Styles.logoText}>QuranTracker</p> */}
      </Link>
      <List pl='0' mt='32' spacing={4}>
        {listItems.map((listItem) => (
          <ListItem key={listItem.name}>
            <Link
              to={listItem.path}
              display='flex'
              alignItems='center'
              justifyContent={{ base: 'center', xl: 'start' }}
              gridGap={{ xl: 2 }}
              p={{ base: 4, '2xl': 3 }}
              px={{ xl: 2 }}
              py={{ xl: 2 }}
              rounded={`${pathname === listItem.path && '3xl'}`}
              border={`${pathname === listItem.path && '2px'}`}
            >
              <Icon as={listItem.icon} w='20px' h='20px' />

              <Text display={{ base: 'none', xl: 'block' }}>{listItem.name}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default LeftSideNav
