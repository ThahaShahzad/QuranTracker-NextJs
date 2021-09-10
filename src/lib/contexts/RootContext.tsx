// import { AuthProvider } from './auth/auth.context';
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const RootContext: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}

export default RootContext
