/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "Special-Red2": "#b83016",

        "primary": "#299D91",
        "defaultBlack": "#191919",
        "special-mainBg": "#F4F5F7",
        "special-bg2": "#FFFFFF",
        "special-bg3": "#292929",
        "gray-01": "#525256",
        "gray-02": "#9F9F9F",
        "gray-03": "#707070",
        "gray-05": "#E0E0E0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};