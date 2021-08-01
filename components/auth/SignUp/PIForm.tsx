import React, { useState } from 'react'

import { Link } from '@/components/custom/index'

const PIForm: React.FC = () => {
  const [showPassword, setshowPassword] = useState(false)

  return (
    <form className='flex flex-col gap-5 m-20' autoComplete='on'>
      <h1 className='text-center text-4xl'>Personal Information</h1>
      <div>
        <label className='text-xl'>First Name</label>
        <input
          className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white first:mt-0'
          type='text'
          name='firstname'
          placeholder='First Name'
        />
      </div>
      <div>
        <label className='text-xl'>Last Name</label>
        <input
          className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white first:mt-0'
          type='text'
          name='lastname'
          placeholder='Last Name'
        />
      </div>
      <div>
        <label className='text-xl'>Email</label>
        <input
          className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white first:mt-0'
          type='email'
          name='email'
          autoComplete='email'
          placeholder='Email'
        />
      </div>
      <div>
        <label
          className={`text-xl select-none cursor-pointer ${
            showPassword && 'line-through'
          } text-primary-500 hover:text-primary-700`}
          onClick={() => setshowPassword(!showPassword)}
        >
          Password
        </label>
        <input
          className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white first:mt-0'
          type={`${showPassword ? 'text' : 'password'}`}
          name='password'
          placeholder='password'
        />
      </div>
    </form>
  )
}

export default PIForm
