import Head from 'next/head'
import { Hero, Features, MainFeatures, Pricing, Testimonials, FAQ, GetStarted } from 'components/landing'
import LandingLayout from 'components/layouts/LandingLayout'
import { LandingPageDetails } from 'public/LandingDeatils'
import { GetServerSidePropsContext } from 'next'
import { withPageAuthToDash } from 'lib/middleware/pageMiddleware'
import { ThemeToggleFloatingButton } from 'components/custom'

const Landing = () => {
  return (
    <>
      <Head>
        <title>QuranTracker</title>
        <meta name='description' content='Dashboard of QuranTracker' />
        <link rel='icon' type='ico' href='/favicon.ico' />
      </Head>
      <ThemeToggleFloatingButton />
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

export const getServerSideProps = withPageAuthToDash((ctx: GetServerSidePropsContext) => {
  return { props: {} }
})

Landing.getLayout = LandingLayout

export default Landing

// export const getServerSideProps = async (ctx: any) => {
//   try {
//     const cookies = parseCookies(ctx)
//     const firebaseAuthToken = cookies.firebaseAuthToken as any
//     const header64 = firebaseAuthToken.split('.')[0]
//     const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))
//     const res = await axios.get('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
//     const publicKeys = res.data
//     const ecPublicKey = await jose.importX509(publicKeys[header.kid], 'ES256')
//     const token = await jose.jwtVerify(firebaseAuthToken, ecPublicKey, {
//       algorithms: ['RS256'],
//       audience: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       issuer: `https://securetoken.google.com/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
//     })
//     console.log(token)
//     if (token)
//       return {
//         redirect: {
//           destination: '/dash',
//           permanent: false
//         }
//       }
//     return
//   } catch (error) {
//     console.log(error)
//     return {
//       props: {
//         data: null
//       }
//     }
//   }
// }
