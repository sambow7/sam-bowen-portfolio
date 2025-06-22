function App() {
  return (
    <div className="min-h-screen bg-forest text-fog px-6 py-12 flex flex-col justify-center items-center text-center font-sans">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm Sam — I build human-centered web apps.
        </h1>
        <p className="text-lg sm:text-xl text-ash">
          A Seattle-based junior developer creating seamless digital experiences with clean code, creative problem-solving, and soul.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-sand text-forest font-semibold px-6 py-3 rounded hover:bg-ash transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
