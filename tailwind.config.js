/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*html"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./public/images/banner.png')",
      },
      colors: {
        "main-back": "#272727",
        "color-font": "rgb(129, 133, 136)",
        "bg-luck": "rgb(240, 239, 239)",
      },
    },
    screens: {
      mobile: "0px",
      desktop: "1024px",
    },
  },
  plugins: [],
};

