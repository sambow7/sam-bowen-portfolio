import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-fog text-forest dark:bg-forest dark:text-fog shadow-sm fixed top-0 z-50">
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