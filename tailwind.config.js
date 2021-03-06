const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      serif: ["Nunito", ...defaultTheme.fontFamily.serif],
      orbitron: ["Orbitron", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        // Background images are relative to main.css
        'outerspace': "url('assets/images/outerspace.png')"
      }
    }
  },
};
