import { Navbar, Footer } from '@/components/landing'
import { LandingPageDetails } from '@/public/LandingDeatils'
import { ReactNode } from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='font-display bg-inverse p-10'>
      <Navbar {...LandingPageDetails.Header} />
      {children}
      <Footer {...LandingPageDetails.Footer} />
    </div>
  )
}
const LandingLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default LandingLayout
