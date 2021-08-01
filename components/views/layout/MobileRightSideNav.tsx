import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCloseSquare } from 'react-icons/ai'

interface props {
  showSideNav: boolean
  setshowSideNav: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileRightSideNav = ({ showSideNav, setshowSideNav }: props) => {
  const Styles = {
    sideNav: 'bg-primary h-[calc(100vh-160px)] w-2/3 sm:w-1/2 fixed top-[80px] right-0 z-20 py-8 px-4 rounded-l-2xl',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    widgetContainer: 'flex flex-col items-start gap-4 h-full px-8 pb-8',
    'close-nav': 'fixed top-0 left-0 bottom-0 z-20 w-1/3 bg-transparent px-4 sm:w-1/2'
  }
  return (
    <AnimatePresence>
      {showSideNav && (
        <>
          <motion.aside
            initial={{ x: '100%' }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{ type: 'spring', bounce: 0 }}
            className={Styles.sideNav}
          >
            <div className={Styles.sideNavIconContainer}>
              <button className='nav-toggle-close' onClick={() => setshowSideNav(!showSideNav)}>
                <AiFillCloseSquare className={Styles.sideNavIcon} />
              </button>
            </div>

            <div className={Styles.widgetContainer}>Calendare</div>
          </motion.aside>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: 'spring', bounce: 0 }}
            onClick={() => {
              setshowSideNav(!showSideNav)
            }}
            className={Styles['close-nav']}
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileRightSideNav
