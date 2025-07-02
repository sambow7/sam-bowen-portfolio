import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#FF0000" },
          shape: { type: "circle" },
          opacity: { value: 1 },
          size: { value: 6 },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: "#FF0000", distance: 150, opacity: 0.4, width: 1 },
        },
        detectRetina: true,
      }}
    />
  );
}