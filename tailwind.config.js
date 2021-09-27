module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(238, 249, 249,1) 20%)',
      },
      width: {
        180: '180px',
      },
      maxWidth: {
        1000: '1000px',
      },
      colors: {
        primary: '#bdd8d8',
        wallpaper: 'rgb(238, 249, 249)',
        footer: '#414D4D',
        timeline: '#A4C1C0',
      },
      fontFamily: {
        timestamp:
          'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
      },
      fontSize: {
        0.8: '0.8rem',
        1.2: '1.2rem',
        1.3: '1.3rem',
        1.4: '1.4rem',
      },
      lineHeight: {
        1.2: '1.2',
        1.4: '1.4',
        1.6: '1.6',
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        'menu-bar': '0 4px 4px -2px #ddd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
