import Image from 'next/image'

import { Link, Button, TextInput, PasswordInput } from 'components/custom'
import illustration from 'public/images/login-illustration.svg'
import logo from 'public/images/logo.svg'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { SignInSchema, SignInType } from 'lib/models/auth'
import { joiResolver } from '@hookform/resolvers/joi/dist/joi'
import { useAuth } from 'lib/contexts/auth'
import { useState } from 'react'

const SignIn = () => {
  const { signin } = useAuth()
  const [authError, setAuthError] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInType>({
    resolver: joiResolver(SignInSchema)
  })
  const router = useRouter()
  const onSubmit = async (formData: SignInType) => {
    try {
      const res = await signin(formData)
      if (res) {
        router.push('/dash')
      }
    } catch (error: any) {
      setAuthError(error)
      console.error(error)
    }
  }
  const Styles = {
    Container: 'h-screen bg-primary font-medium flex justify-center overflow-hidden',
    Content: 'max-w-screen-2xl m-0 sm:mx-20 sm:my-16 bg-font shadow sm:rounded-lg flex justify-center flex-1',
    MainContainer: 'lg:w-1/2 xl:w-5/12 p-6 sm:p-12',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-bg',
    MainContent: 'mt-12 flex flex-col items-center',
    Heading: 'text-2xl xl:text-3xl font-extrabold',
    FormContainer: 'w-full flex-1 mt-8 flex flex-col gap-4',
    SocialButtonsContainer: 'flex flex-col items-center',
    SocialButton:
      'w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0',
    SocialButtonIconContainer: 'bg-white p-2 rounded-full',
    SocialButtonText: 'ml-4',
    DividerTextContainer: 'my-12 border-b text-center relative',
    DividerText:
      'leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent',
    Form: 'flex flex-col gap-4 mx-auto max-w-xs',
    Input:
      'w-full  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white focus:ring-primary',
    SubmitButton:
      'mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none',
    SubmitButtonIcon: 'w-6 h-6 -ml-2',
    SubmitButtonText: 'ml-3',
    IllustrationContainer: 'sm:rounded-r-lg flex-1 bg-green-100 text-center hidden lg:flex justify-center ',
    IllustrationImage: 'm-auto w-full max-w-lg '
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.Content}>
        <div className={Styles.MainContainer}>
          <Link className={Styles.logo} type='primary-nl' to='/'>
            <Image src={logo} alt='logo' />
            <h4 className={Styles.logoText}>QuranTracker</h4>
          </Link>
          <div className={Styles.MainContent}>
            <h3>Sign In To QuranTracker</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.FormContainer}>
              <TextInput type='email' label='Email' name='email' placeholder='Email' register={register} />
              {errors?.email && <p className='text-red-500'>Invalid Email</p>}
              <PasswordInput name='password' label='Password' placeholder='Password' register={register} />
              <Button submitType='submit'>Login </Button>
              {authError && <p className='text-red-500'>Invalid Email or password, please try again</p>}
            </form>
            <p className='mt-6 text-xs  text-center'>
              <Link type='primary-i' to='/auth/forgotpassword'>
                Forgot Password ?
              </Link>
            </p>
            <p className='mt-8 text-sm text-bg text-center'>Dont have an account?</p>
            <Link type='primary-i' to='/auth/signup'>
              Sign up
            </Link>
          </div>
        </div>
        <div className={Styles.IllustrationContainer}>
          <div className={Styles.IllustrationImage}>
            <Image src={illustration} alt='illustration' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

/* <div className={Styles.SocialButtonsContainer}>
{socialButtons.map((socialButton, index) => (
<a key={index} className={Styles.SocialButton} href={socialButton.url}>

<Image src={socialButton.iconImageSrc} alt={socialButton.text} />

<span className={Styles.SocialButtonText}>{socialButton.text}</span>
</a>
))}
</div>
<div className={Styles.DividerTextContainer}>
<div className={Styles.DividerText}>Or Sign in with your e-mail</div>
</div>
<form className={Styles.Form}>
<input type='email' placeholder='Email' className={Styles.Input} />
<input type='password' placeholder='Password' className={Styles.Input} />
<button className={Styles.SubmitButton} type='submit'>
<FiLogIn className={Styles.SubmitButtonIcon} />
<span className={Styles.SubmitButtonText}>Sign In</span>
</button>
</form>  */
