/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundColor: "hsl(226, 43%, 10%)",
        cardsBackgroundColor: "hsl(235, 46%, 20%)",
        profileBackgroundColor: "hsl(246, 80%, 60%)",
        cardSubTitleColor: "hsl(236, 100%, 87%)",
        cardBgOrange: "hsl(15, 100%, 70%)",
        cardBgCyan: "hsl(195, 74%, 62%)",
        cardBgPink: "hsl(348, 100%, 68%)",
        cardBgGreen: "hsl(145, 58%, 55%)",
        cardBgPurple: "hsl(264, 64%, 52%)",
        cardBgYellow: "hsl(43, 84%, 65%)",
        hoverColor: "hsl(236, 41%, 34%)",
      },
    },
  },
  plugins: [],
};
