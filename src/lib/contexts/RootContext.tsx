import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppWrapper from 'components/layouts/AppWrapper'
// import { OnboardingProvider } from './onBoarding'

interface props {
  layout:
    | {
        name: 'OnboardingLayout'
      }
    | undefined
}
const EmptyProvider: React.FC = ({ children }) => {
  return <>{children}</>
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000
    }
  }
})
const RootContext: React.FC<props> = ({ children, layout }) => {
  // const PageProvider = layout?.name === 'OnboardingLayout' ? OnboardingProvider : EmptyProvider
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        {/* <PageProvider> */}
        <ThemeProvider attribute='class'>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
        {/* </PageProvider> */}
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default RootContext
