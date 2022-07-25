import Table from 'components/custom/Table'
import { GetAdminAllAccounts } from 'lib/api/dash/admin/GetAdminAllAccounts'
import { useAuth } from 'lib/contexts/auth'
import { UserDoc } from 'lib/graphql/fixedGenerated'
import { faunaRes } from 'lib/models/faunaRes'
import { useQuery } from 'react-query'
import { Column } from 'react-table'

const Accounts = () => {
  const { user } = useAuth()
  const { data: users, isLoading } = useQuery<faunaRes<UserDoc[]>>('GetAdminAllAccounts', () => GetAdminAllAccounts(user.school.ref.id))
  if (isLoading) return <div>...Loading</div>
  console.log(users)
  const columns: Column[] = [
    {
      Header: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Account Type',
      accessor: 'accType'
    },
    {
      Header: 'Email Verified',
      accessor: 'emailVerified'
    },
    {
      Header: 'Active',
      accessor: 'isActive'
    },
    {
      accessor: '[editButton]'
    }
  ]
  const formatedUsersArray = users?.data.map((user) => user.data)
  console.log(formatedUsersArray)
  return (
    <main className='bg-bgLight p-4 text-center'>
      <h3>Accounts</h3>
      <Table {...{ columns, data: formatedUsersArray, tableName: { right: 'Accounts' } }} />
    </main>
  )
}

export default Accounts
