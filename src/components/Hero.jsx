import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-20">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 flex flex-col justify-center items-center text-center font-sans min-h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I’m Sam — I build human-centered web apps.
        </h1>
        <p className="text-lg sm:text-xl text-star dark:text-nebula">
          A Seattle-based junior developer creating seamless digital experiences with clean code, creative problem-solving, and soul.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-black/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 shadow hover:shadow-lg"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  )
}