import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 py-4 flex justify-between items-center bg-fog/95 backdrop-blur-sm text-forest dark:bg-forest/95 dark:text-fog shadow-sm fixed top-0 z-50"
    >
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-xl font-bold tracking-wide"
      >
        Sam Bowen
      </motion.h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 font-medium">
        {navItems.map((item) => (
          <motion.li key={item.href} className="list-none">
            <motion.a 
              href={item.href}
              whileHover={{ y: -2 }}
              className="hover:text-sand dark:hover:text-sand transition-colors"
            >
              {item.label}
            </motion.a>
          </motion.li>
        ))}
        <motion.button 
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-4 p-2 rounded-full bg-sand/20 dark:bg-moss/20 hover:bg-sand/30 dark:hover:bg-moss/30 transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full bg-sand/20 dark:bg-moss/20"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-fog/95 backdrop-blur-sm dark:bg-forest/95 border-t border-ash/20 dark:border-sand/20 md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  className="block text-lg font-medium hover:text-sand dark:hover:text-sand transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button 
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-2 rounded-full bg-sand/20 dark:bg-moss/20 hover:bg-sand/30 dark:hover:bg-moss/30 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}