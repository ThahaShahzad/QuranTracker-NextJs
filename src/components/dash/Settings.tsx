import { Button, Link } from 'components/custom'
import { DbUser } from 'lib/models/dbuser'
import { signOut, useSession } from 'next-auth/client'

const Settings = () => {
  const [{ dbuser }, loading] = useSession() as [DbUser, boolean]
  return (
    <div className='bg-bgLight flex flex-col  p-8'>
      <h2 className='self-start'>Settings</h2>
      <section>
        <h4>Account Info</h4>
        <div className='flex gap-4 items-center'>
          <label>UserName</label>
          <input type='text' value={dbuser?.userName} disabled />
        </div>
        <div className='flex gap-4 items-center'>
          <label>Email</label>
          <input type='text' value={dbuser?.email} disabled />
        </div>
        <div className='flex gap-4 items-center'>
          <label>School</label>
          <input type='text' value={dbuser?.school.schoolName} disabled />
        </div>
      </section>
      <Link to='/dash/settings/changepassword' type='primary-nl' className='text-bg'>
        <Button submitType='button' className='my-8'>
          Change Password
        </Button>
      </Link>
      <Button submitType='button' onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  )
}

export default Settings
