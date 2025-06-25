import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#D0CD8A' }
  }

  return (
    <section id="contact" className="bg-fog dark:bg-forest text-forest dark:text-fog py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              whileFocus="focus"
              variants={inputVariants}
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog focus:outline-none focus:border-sand transition-all"
            />
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              whileFocus="focus"
              variants={inputVariants}
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog focus:outline-none focus:border-sand transition-all"
            />
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              required
              whileFocus="focus"
              variants={inputVariants}
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog focus:outline-none focus:border-sand transition-all resize-none"
            />
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sand text-forest dark:bg-ash dark:text-fog font-semibold px-8 py-3 rounded hover:bg-ash dark:hover:bg-sand transition-all duration-300 shadow hover:shadow-lg flex items-center justify-center space-x-2 mx-auto"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </motion.button>
          </motion.div>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="mailto:sam@example.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 text-sand dark:text-sand hover:text-forest dark:hover:text-fog transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>sam@example.com</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}