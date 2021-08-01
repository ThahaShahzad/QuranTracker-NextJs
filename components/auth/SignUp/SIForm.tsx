import React from 'react'

import { Link } from '@/components/custom/index'

const SIForm: React.FC = () => {
  // let { path, url } = useRouteMatch()
  return (
    <form className='flex flex-col gap-10 m-20' autoComplete='on'>
      <h1 className='text-center text-4xl'>School Information</h1>
      <div>
        <label className='text-xl'>School Name</label>
        <input
          className='w-full h-full border-2 rounded-lg p-1'
          type='text'
          name='schoolname'
          placeholder='School Name'
        />
      </div>
      <div>
        <label className='text-xl'>School Type</label>
        {/* <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='schooltype' placeholder='School Type' /> */}
        <select className='w-full h-full border-2 rounded-lg p-1' name='schooltype'>
          <option value='' selected disabled>
            --- Select Type ---
          </option>
          <option value='volvo'>Islamic</option>
          <option value='saab'>Masjid</option>
          <option value='opel'>Privite</option>
        </select>
      </div>
      <div>
        <label className='text-xl'>City</label>
        <input className='w-full h-full border-2 rounded-lg p-1' type='text' name='city' placeholder='City' />
      </div>
      <div>
        <label className='text-xl'>State</label>
        <input className='w-full h-full border-2 rounded-lg p-1' type='text' name='state' placeholder='State' />
      </div>
    </form>
  )
}

export default SIForm
