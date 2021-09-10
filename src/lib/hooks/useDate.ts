import React from 'react'

export const useDate = () => {
  const locale = 'en'
  const [today, setDate] = React.useState(new Date()) // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date())
    }, 60 * 1000)
    return () => {
      clearInterval(timer) // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: 'long' })
  const date = `${day} - ${today.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })}\n\n`

  const hour = today.getHours()
  const wish = `good ${(hour < 12 && 'morning') || (hour < 17 && 'afternoon') || 'evening'} `

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })

  return {
    date,
    time,
    wish
  }
}
