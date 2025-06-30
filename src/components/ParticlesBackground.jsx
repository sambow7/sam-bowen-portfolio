import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: '#A5B4FC' },
            links: {
              color: '#A5B4FC',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
