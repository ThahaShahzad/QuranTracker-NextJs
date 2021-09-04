import { Grid } from '@chakra-ui/react'

import BottomNav from '../../views/layout/BottomNav'
import LeftSideNav from '../../views/layout/LeftSideNav'
import TopNav from '../../views/layout/TopNav'

const GridLayout: React.FC = ({ children }) => {
  return (
    <Grid
      h='100vh'
      autoFlow={{ base: 'column', lg: 'row' }}
      templateRows={{ base: '75px auto 75px', lg: '10% 90%' }}
      templateColumns={{ base: 'repeat(1, minmax(0, 1fr))', lg: '100px auto', xl: '200px auto' }}
    >
      <TopNav />
      <LeftSideNav />
      {children}
      <BottomNav />
    </Grid>
  )
}

export default GridLayout
