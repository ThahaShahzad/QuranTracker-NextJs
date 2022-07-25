import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import RootContext from 'lib/contexts/RootContext'

type Page<P = {}> = NextPage<P> & {
  getLayout?: any
}

type Props = AppProps & {
  Component: Page
}
const EmptyLayout: React.FC = ({ children }) => {
  return <>{children}</>
}

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.getLayout || EmptyLayout
  return (
    <RootContext layout={Component.getLayout} pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootContext>
  )
}
export default MyApp
