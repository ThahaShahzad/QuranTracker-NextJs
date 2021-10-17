import GridLayout from 'components/dash/layout/GridLayout'
import AdminApplication from 'components/dash/layout/adminApplication'
import VerifyEmail from 'components/dash/layout/VerifyEmail'
import NextSteps from 'components/dash/layout/adminApplication/NextSteps'
import { DbUser } from 'lib/models/dbuser'
import { useSession } from 'next-auth/client'
import AccountCreation from 'components/dash/layout/AccountCreation'

const DashLayout: React.FC = ({ children }) => {
  const [session, loading] = useSession() as [DbUser, boolean]
  const { dbuser } = session
  if (!dbuser) return <div>...Loading</div>
  if (!dbuser.isEmailVerified) return <VerifyEmail />
  if (!dbuser.submittedApplication) return <AdminApplication />
  if (!dbuser.isActivated) return <NextSteps />
  if (!dbuser.initalAccountCreation) return <AccountCreation />
  return <GridLayout>{children}</GridLayout>
}

export default DashLayout
