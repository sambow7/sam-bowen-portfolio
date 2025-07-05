export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-20">
      {/* Animated background layers */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500 to-transparent rounded-full opacity-50 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="absolute top-[60%] left-[30%] w-[800px] h-[800px] bg-gradient-to-tr from-blue-500 to-transparent rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>

      {/* Shooting Stars */}
      <div className="absolute top-[5%] left-[5%] w-1 h-1 bg-white rounded-full opacity-80 animate-shooting-star-1"></div>
      <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full opacity-60 animate-shooting-star-2"></div> {/* Less bright */}
      <div className="absolute bottom-[30%] left-[5%] w-1 h-1 bg-white rounded-full opacity-90 animate-shooting-star-3"></div> {/* Brighter */}

      {/* Main hero content */}
      {/* Space Dust Elements */}
      <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-70 animate-float-slow blur-sm"></div>
      <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-float-medium blur-sm"></div>
      <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-white rounded-full opacity-50 animate-float-fast blur-sm"></div>
      {/* Additional floating dust elements */}
      <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-float-medium blur-sm"></div>
      <div className="absolute top-[70%] left-[50%] w-1 h-1 bg-white rounded-full opacity-60 animate-float-slow blur-sm"></div>
      <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-white rounded-full opacity-55 animate-float-fast blur-sm"></div>
      <div className="absolute top-[15%] left-[60%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-float-medium blur-sm"></div>
      <div className="absolute top-[65%] left-[20%] w-2 h-2 bg-white rounded-full opacity-50 animate-float-fast blur-sm"></div>
      <div className="relative z-10 text-white px-6 py-12 flex flex-col justify-center items-center text-center font-sans min-h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I’m Sam — I build human-centered web apps.
        </h1>
        <p className="text-lg sm:text-xl text-star dark:text-nebula">
          A Seattle-based junior developer creating seamless digital experiences with clean code, creative problem-solving, and soul.
        </p>
        <div className="mt-8">
          <div className="sci-fi-button-container">
            <a
              href="#projects"
              className="sci-fi-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}