

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-forest text-fog dark:bg-fog dark:text-forest shadow-sm fixed top-0 z-50">
      <h1 className="text-xl font-bold tracking-wide">Sam Bowen</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li>
          <button 
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded border border-current hover:bg-ash dark:hover:bg-sand transition"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  )
}