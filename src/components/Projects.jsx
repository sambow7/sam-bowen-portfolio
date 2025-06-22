

import ProjectCard from './ProjectCard'

const projectData = [
  {
    title: 'BabelBot',
    description: 'A translator app built with React and API integration. Includes real-time language translation with a clean UI.',
    tech: ['React', 'API', 'CSS'],
    liveLink: 'https://babelbot.example.com',
    githubLink: 'https://github.com/yourname/babelbot',
  },
  {
    title: 'CORPO',
    description: 'A browser-based cyberpunk game with interactive story paths and audio. Built with JavaScript and EJS.',
    tech: ['JavaScript', 'EJS', 'HTML'],
    liveLink: 'https://corpo.example.com',
    githubLink: 'https://github.com/yourname/corpo',
  },
  {
    title: 'Propagation Station',
    description: 'A MERN app for plant lovers to share, sell, and blog about their plants. Includes user auth and image support.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    liveLink: 'https://propagation.example.com',
    githubLink: 'https://github.com/yourname/propagation-station',
  },
  {
    title: 'Atlash',
    description: 'Track and document ashes-spreading journeys around the world. React front-end with weather API integration.',
    tech: ['React', 'Tailwind', 'API'],
    liveLink: 'https://atlash.example.com',
    githubLink: 'https://github.com/yourname/atlash',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-forest dark:bg-fog text-fog dark:text-forest py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}