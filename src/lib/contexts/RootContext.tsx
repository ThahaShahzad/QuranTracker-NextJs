import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppWrapper from 'components/layouts/AppWrapper'
// import { OnboardingProvider } from './onBoarding'

interface props {
  layout:
    | {
        name: 'OnboardingLayout'
      }
    | undefined
  pageProps: any
}
const EmptyProvider: React.FC = ({ children }) => {
  return <>{children}</>
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 1000
    }
  }
})
const RootContext: React.FC<props> = ({ children, layout, pageProps }) => {
  // const PageProvider = layout?.name === 'OnboardingLayout' ? OnboardingProvider : EmptyProvider
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />

          {/* <PageProvider> */}
          <ThemeProvider attribute='class'>
            <AppWrapper>{children}</AppWrapper>
          </ThemeProvider>
          {/* </PageProvider> */}
        </Hydrate>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default RootContext
