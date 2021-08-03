import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { ComponentType, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0'

type Page<P = {}> = NextPage<P> & {
  getLayout?: any
}

type Props = AppProps & {
  Component: Page
}
function EmptyLayout() {
  return <></>
}
function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.getLayout || EmptyLayout

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
