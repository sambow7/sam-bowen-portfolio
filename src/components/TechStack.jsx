

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

export default function TechStack() {
  return (
    <section className="bg-forest dark:bg-fog text-fog dark:text-forest py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
              <span className="text-4xl">{item.icon}</span>
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}