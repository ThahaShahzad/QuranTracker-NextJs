const AppWrapper: React.FC = ({ children }) => {
  return (
    <div id='appWrapper' className='min-h-screen grid grid-rows-1 font-all bg-bg text-font'>
      {children}
    </div>
  )
}

export default AppWrapper
