import { joiResolver } from '@hookform/resolvers/joi/dist/joi'
import { Button, Link, PasswordInput } from 'components/custom'
import { Axios } from 'lib/api/axios'
import { ChangePasswordSchema, ChangePasswordType } from 'lib/models/dash/settings/changepassword'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsArrowLeft } from 'react-icons/bs'
import { useMutation } from 'react-query'

const Changepassword = () => {
  const [passError, setPassError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangePasswordType>({
    resolver: joiResolver(ChangePasswordSchema)
  })
  const { mutateAsync, isError } = useMutation(async (data: ChangePasswordType) => {
    const res = await Axios.patch('/api/auth/changepassword', data)
    return res.data
  })
  const onSubmit = async (data: ChangePasswordType) => {
    setPassError(false)
    console.log(data)
    if (data.newPassword === data.oldPassword) {
      setPassError(true)
      return
    }
    const res = await mutateAsync(data)
  }
  return (
    <main className='bg-bgLight p-4'>
      <Link to='/dash/settings'>
        <BsArrowLeft className='h-8 w-8' />
      </Link>
      <section className='flex flex-col p-8'>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PasswordInput name='oldPassword' label='Old password' placeholder='Old password' register={register} />
          {errors?.oldPassword && (
            <p className='text-red-500'>Password must contain minimum eight characters, at least one letter, one number and one special character</p>
          )}
          <PasswordInput name='newPassword' label='New password' placeholder='New password' register={register} />
          {errors?.newPassword && (
            <p className='text-red-500'>Password must contain minimum eight characters, at least one letter, one number and one special character</p>
          )}
          <Button submitType='submit' className='mt-4' disabled={passError}>
            Change
          </Button>
          {passError && <p className='text-red-500'>Passwords can not be the same</p>}
        </form>
      </section>
    </main>
  )
}

export default Changepassword
