import { motion } from 'framer-motion'

const tech = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Node.js', icon: '🌿' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Django', icon: '🧩' },
  { name: 'HTML', icon: '📄' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Git', icon: '🔧' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function TechStack() {
  return (
    <section className="bg-forest dark:bg-fog text-fog dark:text-forest py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Tech Stack
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center"
        >
          {tech.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center space-y-2 cursor-pointer"
            >
              <motion.span 
                className="text-4xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.span>
              <p className="text-sm font-medium">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}