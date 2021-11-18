import { Button } from 'components/custom'
import { AccountCreationProvider } from 'lib/contexts/accountCreation'
import { useAuth } from 'lib/contexts/auth'

const OnBoardingLayout: React.FC = ({ children }) => {
  const { signout } = useAuth()
  return (
    <div id='OnBoardingLayout' className='h-full'>
      <h2 className='fixed'>Quran Tracker</h2>
      <AccountCreationProvider>{children}</AccountCreationProvider>
      <Button className='fixed top-5 right-5' onClick={() => signout()}>
        Sign Out
      </Button>
    </div>
  )
}

export default OnBoardingLayout
