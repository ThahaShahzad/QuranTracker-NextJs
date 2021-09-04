import { Link } from '@/components/custom'
import ThemeToggler from '@/components/custom/ThemeToggle'
import { useDate } from '@/components/hooks/useDate'
import { useUser } from '@auth0/nextjs-auth0'
import { Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { useMyColors } from 'styles/colors'

const TopNav = () => {
  const { time, date, wish } = useDate()
  const { user, error, isLoading } = useUser()
  const { bgLight } = useMyColors()
  const [isGreaterThenSm] = useMediaQuery('(min-width: 40em)')

  return (
    <Flex as='nav' justify='space-between' borderBottom='2px' p={{ base: '2', lg: '4' }}>
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center'>
        <Heading as='h4' size='lg' marginRight={{ lg: '2' }}>
          Asalamualakum
        </Heading>
        <Heading as='h4' size='lg'>
          {user?.name?.includes('@') ? user.nickname : user?.name}
        </Heading>
      </Flex>

      <HStack alignItems='center' spacing='4'>
        <Text
          size={isGreaterThenSm ? 'md' : 'sm'}
          hidden={isGreaterThenSm ? false : true}
          bg={bgLight}
          rounded='xl'
          p='2'
        >
          {time}
        </Text>
        <Text
          size={isGreaterThenSm ? 'md' : 'sm'}
          hidden={isGreaterThenSm ? false : true}
          bg={bgLight}
          rounded='xl'
          p='2'
        >
          {date}
        </Text>
        <ThemeToggler />
        <Link type='primary-nl' to='/api/auth/logout'>
          <Image
            src={user?.picture ? user?.picture : '/images/male-avatar.png'}
            className='rounded-full'
            alt='male avatar'
            width='50'
            height='50'
          />
        </Link>
      </HStack>
    </Flex>
  )
}

export default TopNav
