/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7777",
        secondary: "#ffaa00",
        tertiary: "#ffcc00",
      },
    },
  },
  plugins: [],
};
