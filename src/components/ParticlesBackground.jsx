import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            size: { value: 5 },
            color: { value: '#ff0000' }, // Bright red for high visibility
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}