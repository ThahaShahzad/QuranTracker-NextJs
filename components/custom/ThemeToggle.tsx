import { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
function getUserPreference() {
  if (window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const ThemeToggler = () => {
  const systemTheme = getUserPreference() as string

  const [activeTheme, setActiveTheme] = useState(systemTheme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.className = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])
  return <div onClick={() => setActiveTheme(inactiveTheme)}>{activeTheme === 'light' ? <BsMoon /> : <BsSun />}</div>
}

export default ThemeToggler
