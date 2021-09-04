import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useDbAuth } from '../../context/useDbUser'
import GridLayout from './GridLayout'
import AdminApplication from './AdminApplication/AdminApplication'
import VerifyEmail from './VerifyEmail'
import NextSteps from './AdminApplication/NextSteps'

const DashLayout: React.FC = ({ children }) => {
  const { user } = useDbAuth()
  if (!user) return <div>...Loading</div>
  if (!user.email_verified) return <VerifyEmail />
  if (!user.submittedApplication) return <AdminApplication />
  if (!user.isActivated) return <NextSteps />
  return <GridLayout>{children}</GridLayout>
}

export default withPageAuthRequired(DashLayout)
