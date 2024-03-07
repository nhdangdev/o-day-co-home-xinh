/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "full-plus": "calc(100% + 1.3px)",
      },
      backgroundImage: {
        "bg-img": "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
