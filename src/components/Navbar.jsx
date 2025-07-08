import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Star, Menu, X } from 'lucide-react'

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
    const body = document.body;

    if (theme === 'dark') {
      body.classList.add('dark');
      body.classList.remove('cyber', 'light');
    } else if (theme === 'cyber') {
      body.classList.add('cyber');
      body.classList.remove('dark', 'light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark', 'cyber');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Theme before toggle:', theme);
    console.log('HTML classes before toggle:', document.documentElement.classList);

    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('cyber');
    } else {
      setTheme('dark');
    }

    setTimeout(() => {
      console.log('HTML classes after toggle:', document.documentElement.classList);
    }, 100);
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
      className="navbar w-full px-6 py-4 flex justify-between items-center backdrop-blur-md text-star dark:text-nebula shadow-sm fixed top-0 z-50"
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
              whileHover={{ 
                y: theme === 'cyber' ? -1 : -2, 
                scale: theme === 'cyber' ? 1.05 : 1 
              }}
              className="hover:text-nebula dark:hover:text-nebula transition-colors"
            >
              {item.label}
            </motion.a>
          </motion.li>
        ))}
        <motion.button 
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-4 p-2 rounded-full bg-nebula/20 dark:bg-space/20 hover:bg-nebula/30 dark:hover:bg-space/30 transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : theme === 'light' ? <Moon className="w-4 h-4" /> : <Star className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full bg-nebula/20 dark:bg-space/20"
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
            className="absolute top-full left-0 right-0 bg-star/95 backdrop-blur-sm dark:bg-night/95 border-t border-star/20 dark:border-nebula/20 md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ 
                    x: theme === 'cyber' ? 6 : 10, 
                    scale: theme === 'cyber' ? 1.05 : 1 
                  }}
                  className="block text-lg font-medium hover:text-nebula dark:hover:text-nebula transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button 
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-2 rounded-full bg-nebula/20 dark:bg-space/20 hover:bg-nebula/30 dark:hover:bg-space/30 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : theme === 'light' ? <Moon className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Light Mode' : theme === 'light' ? 'Cyber Mode' : 'Dark Mode'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}