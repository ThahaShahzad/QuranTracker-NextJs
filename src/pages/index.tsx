import { Hero, Features, MainFeatures, Pricing, Testimonials, FAQ, GetStarted } from 'components/landing'
import LandingLayout from 'components/layouts/LandingLayout'
import { DbUser } from 'lib/models/dbuser'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { LandingPageDetails } from 'public/LandingDeatils'

const Landing = () => {
  return (
    <>
      <Hero {...LandingPageDetails.Hero} />
      <Features {...LandingPageDetails.Features} />
      <MainFeatures {...LandingPageDetails.MainFeatures} />
      <Pricing {...LandingPageDetails.Pricing} />
      <Testimonials {...LandingPageDetails.Testimonials} />
      <FAQ {...LandingPageDetails.FAQ} />
      <GetStarted {...LandingPageDetails.GetStarted} />
    </>
  )
}
Landing.getLayout = LandingLayout

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = (await getSession({ req })) as DbUser
  if (session) {
    return {
      redirect: {
        destination: '/dash',
        permanent: false
      }
    }
  }
  return { props: {} }
}

export default Landing
