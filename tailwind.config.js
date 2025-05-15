module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
    ],
    theme: {
      extend: {
        screens: {
          '2xl': '1728px', // Existing custom breakpoint
          '3xl': '1920px', // New custom breakpoint
        },
      },
    },
    plugins: [],
  };
  