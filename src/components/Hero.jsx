import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="pt-20 min-h-screen bg-fog text-forest dark:bg-forest dark:text-fog px-6 py-12 flex flex-col justify-center items-center text-center font-sans">
      <div className="max-w-3xl space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Hi, I&apos;m Sam — I build human-centered web apps.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-ash dark:text-sand"
        >
          A Seattle-based junior developer creating seamless digital experiences with clean code, creative problem-solving, and soul.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sand text-forest dark:bg-moss dark:text-sand font-semibold px-6 py-3 rounded hover:bg-ash dark:hover:bg-sand transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-ash dark:text-sand" />
        </motion.div>
      </motion.div>
    </div>
  )
}