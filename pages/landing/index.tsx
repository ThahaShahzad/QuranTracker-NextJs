import { Hero, Features, MainFeatures, Pricing, Testimonials, FAQ, GetStarted } from '@/components/landing'
import LandingLayout from '@/components/layouts/LandingLayout'
import { LandingPageDetails } from '@/public/LandingDeatils'

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

export default Landing
