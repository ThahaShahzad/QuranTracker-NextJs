import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import theme from 'styles/chakraTheme'

interface props {
  cookies: string
}
const Chakra: React.FC<props> = ({ cookies, children }) => {
  // b) Pass `colorModeManager` prop
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager
  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
  )
}
// also export a reusable function getServerSideProps
export function getServerSideProps({ req }: any) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Chakra
