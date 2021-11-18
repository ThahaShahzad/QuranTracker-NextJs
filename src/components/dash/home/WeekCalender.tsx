import { GetStaticProps } from 'next'

const WeekCalender = () => {
  const curr = new Date()
  const week = []
  const weekRange = []
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const weekDaysLetter = ['M', 'T', 'W', 'T', 'F']

  for (let i = 1; i <= 5; i++) {
    const first = curr.getDate() - curr.getDay() + i
    const day = new Date(curr.setDate(first)).getDate()
    const date = new Date(curr.setDate(first)).toLocaleString('en', { day: '2-digit' }) //.toISOString().slice(0, 10)
    weekRange.push(date)
    week.push(day)
  }
  return (
    <div className='bg-bg sm:shadow-xl sm:rounded-3xl col-span-full sm:mx-5 sm:mb-5 sm:mt-2 p-2 overflow-auto'>
      <div className='flex justify-center items-center gap-4'>
        <h2>{curr.toLocaleString('en', { month: 'long' })}</h2>
        <h4>
          ({weekRange[0]} - {weekRange[4]})
        </h4>
      </div>
      <div className='hidden sm:flex  w-full h-48 p-2'>
        {week.map((day, i) => (
          <div key={i} className='text-center py-2 w-full'>
            <div className='hidden lg:block border-b border-font'>
              {weekDays[i]} - {day}
            </div>
            <div className='lg:hidden border-b border-font'>{weekDaysLetter[i]}</div>
            <div className='m-2 border-4 border-bg rounded-2xl'>memo</div>
            <div className='m-2 border-4 border-bg rounded-2xl'>Resvison</div>
            <div className='m-2 border-4 border-bg rounded-2xl'>Sabqi</div>
          </div>
        ))}
      </div>
      <div className='sm:hidden flex p-2'>
        {week.slice(1, -1).map((day, i) => (
          <div key={i} className='text-center py-2 w-full'>
            <div className='lg:hidden border-b border-font'>{weekDaysLetter[i]}</div>
            <div className='m-2 bg-green-400 rounded-lg h-full flex justify-center items-center'>memo</div>
            <div className='m-2 bg-blue-400 rounded-lg h-full flex justify-center items-center'>Resvison</div>
            <div className='m-2 bg-purple-400 rounded-lg h-full flex justify-center items-center'>Sabqi</div>
            {/* <div className='m-2 bg-purple-400 rounded-lg h-full flex justify-center items-center'>Sabqi</div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeekCalender
