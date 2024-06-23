const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3c3c3c', 
        secondary: '#3C3C3C', 
        accent: '#f6f6f6',
        border: {
          primary: '#3c3c3c', 
          secondary: '#3C3C3C', 
        },
        button: {
          primary: '#26c6da', 
          secondary: '#3C3C3C', 
          accent: '#f6f6f6', 
        }    
      },
    },
  },
  plugins: [],
});
