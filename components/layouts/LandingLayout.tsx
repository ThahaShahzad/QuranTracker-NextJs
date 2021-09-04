import { Navbar, Footer } from '@/components/landing'
import { LandingPageDetails } from '@/public/LandingDeatils'
import Head from 'next/head'
import { ReactNode } from 'react'

const LandingLayout: React.FC = ({ children }) => {
  return (
    <div className='font-display bg-inverse p-10'>
      <Head>
        <title>QuranTracker</title>
        <meta name='description' content='Landing page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar {...LandingPageDetails.Header} />
      {children}
      <Footer {...LandingPageDetails.Footer} />
    </div>
  )
}
// const LandingLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default LandingLayout
