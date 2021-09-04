import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { NextPage } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0'
import { DbUserProvider } from '@/components/context/useDbUser'
import Chakra from './Chakra'
import Fonts from 'styles/fonts'

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
    <UserProvider>
      <DbUserProvider>
        <Chakra cookies={pageProps.cookies}>
          <Fonts />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Chakra>
      </DbUserProvider>
    </UserProvider>
  )
}

export default MyApp
