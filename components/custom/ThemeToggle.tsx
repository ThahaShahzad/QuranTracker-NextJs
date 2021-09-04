import { useColorMode } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return <div onClick={() => toggleColorMode()}>{colorMode === 'light' ? <BsMoon /> : <BsSun />}</div>
}

export default ThemeToggler
