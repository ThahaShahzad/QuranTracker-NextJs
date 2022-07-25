import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsX } from 'react-icons/bs'

interface props {
  isOpen: any
  setIsOpen: Dispatch<SetStateAction<any>>
}
const Modal: React.FC<props> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Transition appear show={isOpen.show} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={() => setIsOpen({ ...isOpen, show: !isOpen.show })}>
        <div className='h-full px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-11/12 max-w-screen-lg h-5/6 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              {children}
              <div className='fixed top-3 right-3'>
                <button type='button' className='hover:scale-110' onClick={() => setIsOpen({ ...isOpen, show: !isOpen.show })}>
                  <BsX className='w-6 h-6' />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
