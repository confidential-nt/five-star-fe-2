/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        naver: "#20c801",
        kakao: "#f5e904",
      },
      height: {
        "screen-4/5": "80vh",
      },
      width: {
        "screen-4/5": "80vw",
        "screen-2/5": "47vw",
      },
    },
  },
  plugins: [],
};
