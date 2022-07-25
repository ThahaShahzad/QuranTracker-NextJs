import AdminLayout from 'components/dash/layouts/AdminLayout'
import AdminApplication from 'components/dash/admin/adminApplication'
import VerifyEmail from 'components/dash/VerifyEmail'
import NextSteps from 'components/dash/admin/adminApplication/NextSteps'
import { useAuth } from 'lib/contexts/auth'
import AccountCreation from 'components/dash/admin/accountCreation'
import OnBoardingLayout from './onBoardingLayout'
import { UserAccType } from 'lib/graphql/generated'
import TeacherLayout from 'components/dash/layouts/TeacherLayout'
import ParentLayout from 'components/dash/layouts/ParentLayout'

const DashLayout: React.FC = ({ children }) => {
  const { user } = useAuth()
  if (!user) return <div>...Loading</div>
  return (
    <>
      {!user.emailVerified ? (
        <OnBoardingLayout>
          <VerifyEmail />
        </OnBoardingLayout>
      ) : user.accType === UserAccType.Teacher ? (
        <TeacherLayout>{children}</TeacherLayout>
      ) : user.accType === UserAccType.Parent ? (
        <ParentLayout>{children}</ParentLayout>
      ) : !user.submittedApplication ? (
        <OnBoardingLayout>
          <AdminApplication />
        </OnBoardingLayout>
      ) : !user.isActivated ? (
        <OnBoardingLayout>
          <NextSteps />
        </OnBoardingLayout>
      ) : !user.initialAccountCreation ? (
        <OnBoardingLayout>
          <AccountCreation />
        </OnBoardingLayout>
      ) : (
        <AdminLayout>{children}</AdminLayout>
      )}
    </>
  )
}

export default DashLayout
