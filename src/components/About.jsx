import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="bg-fog dark:bg-forest text-forest dark:text-fog px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>
        <motion.p 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed"
        >
          I&apos;m Sam — a junior software developer based in Seattle with a background in healthcare and a passion for human-centered digital experiences. 
          After four years as a dental assistant, I made the leap into tech through General Assembly&apos;s Software Engineering Bootcamp where I built full-stack apps using React, Node, Python, and MongoDB.
        </motion.p>
        <motion.p 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg leading-relaxed"
        >
          My past in healthcare taught me empathy, attention to detail, and how to stay calm under pressure — all of which I bring into my development work.
          I love projects that mix logic, creativity, and impact — whether it&apos;s a plant-sharing platform, a translation tool, or a journaling app for travel memories.
        </motion.p>
        <motion.p 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-lg leading-relaxed"
        >
          I&apos;m currently open to junior developer roles (remote or Seattle-based) and I&apos;m especially excited about opportunities in health tech, green tech, and mission-driven organizations.
        </motion.p>
      </div>
    </section>
  )
}