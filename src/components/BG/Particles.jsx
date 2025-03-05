import React, { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBG = () => {
  const [particleCount, setParticleCount] = useState(
    window.innerWidth > 768 ? 100 : 30
  );

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth > 768 ? 100 : 30);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: "#000000",
      },
      particles: {
        number: {
          value: particleCount,
        },
        links: {
          distance: 150,
          enable: true,
        },
        move: {
          enable: true,
        },
        size: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: false,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBG;
