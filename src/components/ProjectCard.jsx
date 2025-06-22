

export default function ProjectCard({ title, description, tech, liveLink, githubLink }) {
  return (
    <div className="bg-fog dark:bg-moss rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div>
        <h3 className="text-xl font-semibold text-forest dark:text-sand">{title}</h3>
        <p className="text-sm text-ash dark:text-fog mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="text-xs bg-sand text-forest dark:bg-ash dark:text-fog px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <a href={liveLink} target="_blank" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">Live</a>
        <a href={githubLink} target="_blank" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">GitHub</a>
      </div>
    </div>
  )
}