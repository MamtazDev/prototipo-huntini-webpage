/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      cabinetVariable: ['CabinetGrotesk-Variable', 'sans-serif'],
      cabinetThin: ['CabinetGrotesk-Thin', 'sans-serif'],
      cabinetExtralight: ['CabinetGrotesk-Extralight', 'sans-serif'],
      cabinetLight: ['CabinetGrotesk-Light', 'sans-serif'],
      cabinetRegular: ['CabinetGrotesk-Regular', 'sans-serif'],
      cabinetMedium: ['CabinetGrotesk-Medium', 'sans-serif'],
      cabinetBold: ['CabinetGrotesk-Bold', 'sans-serif'],
      cabinetExtrabold: ['CabinetGrotesk-Extrabold', 'sans-serif'],
      cabinetBlack: ['CabinetGrotesk-Black', 'sans-serif'],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}

