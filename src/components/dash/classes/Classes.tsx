import ClassBox from './ClassBox'

const Classes = () => {
  return (
    <main>
      <h2 className='text-center p-2'>My Classes</h2>
      <div className='grid grid-cols-3 gap-4 p-5'>
        <ClassBox />
      </div>
    </main>
  )
}

export default Classes
