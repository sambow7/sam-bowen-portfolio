import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest dark:bg-fog text-fog dark:text-forest py-8 px-6 text-center text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-1"
        >
          <span>© {new Date().getFullYear()} Sam Bowen. Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            <Heart className="w-4 h-4 text-red-500" />
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex space-x-6"
        >
          <motion.a
            href="https://github.com/sambowencode"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-1 hover:text-sand dark:hover:text-sand transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/samuelbowencode/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-1 hover:text-sand dark:hover:text-sand transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}