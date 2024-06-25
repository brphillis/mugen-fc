import { IOptions, RecursivePartial } from "@tsparticles/engine";

export const ParticlesBackground_ColorSquares: RecursivePartial<IOptions> = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        height: 1000,
        width: 1000,
      },
    },
    color: {
      value: [
        "#ff7fbf",
        "#ff7fff",
        "#bf7fff",
        "#ff7f7f",
        "#7f7fff",
        "#7fbfff",
        "#7fffff",
        "#7fffbf",
        "#7fff7f",
        "#bfff7f",
        "#ffff7f",
        "#ffbf7f",
      ],
    },
    shape: {
      type: "edge",
      options: {
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 1,
        startValue: "min",
        sync: false,
      },
    },
    size: {
      value: 40,
      animation: {
        enable: true,
        speed: 100,
        startValue: "random",
        mode: "random",
        sync: true,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "top",
      random: false,
      straight: false,
      outModes: "out",
      attract: {
        enable: true,
        rotate: {
          x: 1000,
          y: 1000,
        },
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "bubble",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 100,
        size: 7.5,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 1,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
