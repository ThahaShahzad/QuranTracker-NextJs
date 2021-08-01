import React from 'react'

import { useRouter } from 'next/router'
import { Link } from '@/components/custom/index'

import logo from '@/public/images/logo.svg'
import Image from 'next/image'

const FormNav: React.FC = () => {
  let { pathname } = useRouter()
  let path = pathname.substr(12)
  let basePath = pathname.substr(0, 12)
  console.log(pathname, path, basePath)
  const Styles = {
    MainContainer:
      'flex flex-col items-center xl:w-3/12 p-2 md:p-4 bg-green-100 shadow-lg rounded-t-lg lg:rounded-r-none lg:rounded-l-lg',
    Nav: 'mt-2 lg:mt-8 flex lg:flex-col justify-center lg:self-start'
  }
  const navItems = [
    {
      text: 'Personal Information',
      url: '/personal-info'
    },
    {
      text: 'School Information',
      url: '/school-info'
    },
    {
      text: 'Account Confirmation',
      url: '/account-confirm'
    },
    {
      text: 'Choose Plan',
      url: '/choose-plan'
    },
    {
      text: 'Billing Method',
      url: '/billing-method'
    },
    {
      text: 'Billing Confirmation',
      url: '/billing-confirmation'
    },
    {
      text: 'Final Confirmation',
      url: '/final-confirmation'
    }
  ]
  return (
    <div className={Styles.MainContainer}>
      <Link type='primary-nl' className='flex items-center' to='/landing'>
        <Image src={logo} />
        <h4 className='ml-4'>QuranTracker</h4>
      </Link>
      <h4 className='mt-5 hidden lg:block'>Sign Up</h4>
      <ul className={Styles.Nav}>
        {navItems.map((item, index) => (
          <li key={index} className={`px-1 py-4 md:py-2`}>
            <Link
              type='primary-nl'
              to={`${basePath}${item.url}`}
              className='flex gap-4 items-center lg:items-baseline  group'
            >
              <div
                className={`group-hover:bg-primary rounded-full bg-inverse border-2 border-normal w-10 h-10 text-center leading-9 ${
                  path === `${item.url}` && 'bg-primary'
                }`}
              >
                {index + 1}
              </div>
              <p className='group-hover:scale-105 hidden lg:block'>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className='lg:flex gap-4 mt-auto hidden'>
        <Link to='/landing/about' size='sm'>
          FAQ
        </Link>
        <Link to='/landing/privacy-policy' size='sm'>
          Privite Policy
        </Link>
        <Link to='/landing/terms-of-service' size='sm'>
          Terms of Service
        </Link>
      </div>
    </div>
  )
}

export default FormNav
