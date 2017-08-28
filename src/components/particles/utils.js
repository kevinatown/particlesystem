export const defaultParams = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      },
    },
    color: {
      value: '#ffffff'
    },
    opacity: {
      value: 0.75,
      anim: {
        enable: false,
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      direction: 'bottom',
      out_mode: 'out',
      straight: true,
      speed: 4,
      random: false, // use this for snow and leaves maybe not for rain
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
      },
    },
    shape: {
      type: 'image',
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    }
  },
  retina_detect: true,
};
