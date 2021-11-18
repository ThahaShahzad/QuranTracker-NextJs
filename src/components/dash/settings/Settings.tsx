import { Button, Link } from 'components/custom'
import { useAuth } from 'lib/contexts/auth'
import { useRouter } from 'next/router'

const Settings = () => {
  const { user, signout } = useAuth()
  console.log(user)
  const router = useRouter()
  const handleSignOut = async () => {
    router.push('/')
    signout()
  }
  return (
    <div className='bg-bgLight flex flex-col p-8 overflow-auto'>
      <h2 className='self-start'>Settings</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* <section>
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
      </section> */}
      <Link to='/dash/settings/changepassword' type='primary-nl' className='text-bg'>
        <Button submitType='button' className='my-8'>
          Change Password
        </Button>
      </Link>
      <Button submitType='button' onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  )
}

export default Settings
