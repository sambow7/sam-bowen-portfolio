import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import PropTypes from 'prop-types'

export default function ProjectCard({ title, description, tech, liveLink, githubLink }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="bg-fog dark:bg-moss rounded-lg shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-sand/20 dark:hover:border-sand/20"
    >
      <div>
        <motion.h3 
          whileHover={{ color: '#D0CD8A' }}
          className="text-xl font-semibold text-forest dark:text-sand transition-colors"
        >
          {title}
        </motion.h3>
        <p className="text-sm text-ash dark:text-fog mt-2 leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs bg-sand text-forest dark:bg-ash dark:text-fog px-2 py-1 rounded font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <motion.a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 text-sm text-sand dark:text-sand hover:text-forest dark:hover:text-fog transition-colors font-medium"
        >
          <ExternalLink className="w-3 h-3" />
          <span>Live Demo</span>
        </motion.a>
        <motion.a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 text-sm text-sand dark:text-sand hover:text-forest dark:hover:text-fog transition-colors font-medium"
        >
          <Github className="w-3 h-3" />
          <span>Code</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
}