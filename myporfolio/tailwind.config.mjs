import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#e0e0e0",
          300: "#9b9b9b",
        },
        accent: {
          100: "#FFD700",
          200: "#917800",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        bg: {
          100: "#000000",
          200: "#161616",
          300: "#2c2c2c",
        },
      },
    },
  },
  plugins: [animations],
};
