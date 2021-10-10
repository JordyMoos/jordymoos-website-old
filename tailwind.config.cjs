const colors = require('tailwindcss/colors');

const config = {
    mode: "jit",
    purge: ["./src/**/*.{html,js,svelte,ts}"],
  
    darkMode: 'media',
    theme: {
      extend: {
        colors: {
          lime: colors.lime,
        }
      }
    },
  
    plugins: [],
  };
  
  module.exports = config;
