module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family)"],
        mono: ["var(--font-family-mono)"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            // Overrides for markdown prose here
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
};
