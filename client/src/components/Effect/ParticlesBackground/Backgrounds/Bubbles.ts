import { IOptions, RecursivePartial } from "@tsparticles/engine";

export const ParticlesBackground_Bubbles: RecursivePartial<IOptions> = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        height: 1000,
        width: 1000,
      },
    },
    color: {
      value: [
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
        "#FF0000",
      ],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.2,
      animation: {
        enable: true,
        speed: 1,
        startValue: "min",
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
      animation: {
        enable: true,
        speed: 5,
        startValue: "random",
        mode: "random",
        sync: false,
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
      speed: 2,
      direction: "top",
      random: true,
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
