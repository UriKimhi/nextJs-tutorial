/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
      navbarbg: "#e2e8f0",
      taskDiv: "#00b6ff",
    },
    extend: {
      spacing: {
        navTabs: "2.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
