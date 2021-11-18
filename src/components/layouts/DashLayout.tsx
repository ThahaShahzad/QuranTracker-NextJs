import GridLayout from 'components/dash/layout/GridLayout'
import AdminApplication from 'components/dash/onboarding/adminApplication'
import VerifyEmail from 'components/dash/layout/VerifyEmail'
import NextSteps from 'components/dash/onboarding/adminApplication/NextSteps'
import { useAuth } from 'lib/contexts/auth'
import AccountCreation from 'components/dash/onboarding/accountCreation'
import OnBoardingLayout from './onBoardingLayout'
import { UserAccType } from 'lib/graphql/generated'

const DashLayout: React.FC = ({ children }) => {
  const { user } = useAuth()
  if (!user) return <div>...Loading</div>
  if (user.accType === UserAccType.Admin) {
    if (user.initalAccountCreation) return <GridLayout>{children}</GridLayout>
    return (
      <OnBoardingLayout>
        {!user.emailVerified ? (
          <VerifyEmail />
        ) : !user.submittedApplication ? (
          <AdminApplication />
        ) : !user.isActivated ? (
          <NextSteps />
        ) : !user.initalAccountCreation ? (
          <AccountCreation />
        ) : null}
      </OnBoardingLayout>
    )
  }
  return <div></div>
}

export default DashLayout
