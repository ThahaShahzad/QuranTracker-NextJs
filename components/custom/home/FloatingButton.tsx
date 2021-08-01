import { BsPlus } from 'react-icons/bs'

const FloatingButton = () => {
  return (
    <button className='fixed sm:hidden bg-primary flex justify-center items-center rounded-full w-10 h-10 bottom-20 right-1'>
      <BsPlus />
    </button>
  )
}

export default FloatingButton
