import React from 'react';
import Particles from 'react-particles';
import { loadSnowPreset } from 'tsparticles-preset-snow';

const Effects = () => {
  const particlesInit = async (engine) => {
    await loadSnowPreset(engine);
  };

  return (
    <Particles
      id="effects"
      init={particlesInit}
      options={{
        preset: "snow",
        particles: {
          color: { value: ['#ffd700', '#b76e79', '#ffffff'] },
          number: { value: 60 },
          opacity: { value: 0.6 },
          size: { value: { min: 2, max: 6 } },
        },
      }}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default Effects;