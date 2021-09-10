import '../styles/globals.css'
import AppWrapper from 'components/layouts/AppWrapper'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import RootContext from 'lib/contexts/RootContext'

import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'next-auth/client'

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
    <RootContext>
      <Provider session={pageProps.session}>
        <AppWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppWrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </RootContext>
  )
}
export default MyApp
