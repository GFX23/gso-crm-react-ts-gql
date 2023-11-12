const movePaddleOne = {
  '0%, 100%': { transform: 'translate(0px, 100px)' },
  '25%': { transform: 'translate(0px, 0px)' },
  '50%': { transform: 'translate(0px, 0px)' },
  '75%': { transform: 'translate(0px, 100px)' },
};

const movePaddleTwo = {
  '0%, 100%': { transform: 'translate(0px, -50px)' },
  '25%': { transform: 'translate(0px, 10px)' },
  '50%': { transform: 'translate(0px, 0px)' },
  '75%': { transform: 'translate(0px, 50px)' },
};

const moveBall = {
  '0%, 100%': { transform: 'translate(-180px, 30px)' },
  '25%': { transform: 'translate(18px, -25px)' },
  '50%': { transform: 'translate(-180px, -55px)' },
  '75%': { transform: 'translate(18px, 15px)' },
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        // Add more custom fonts as needed
      },
      animation: {
        movePaddleOne: 'movePaddleOne 4s infinite',
        movePaddleTwo: 'movePaddleTwo 4s infinite',
        moveBall: 'moveBall 4s infinite linear',
      },
      keyframes: {
        movePaddleOne,
        movePaddleTwo,
        moveBall,
      }
    },
  },
  plugins: [],
}



