module.exports = {
  // theme: {
  //   gradients: theme => ({
  //     "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
  //     "purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
  //     // ...
  //   }),
  // },

  theme: {
    // Add Apercu Pro font family
    fontFamily: {
      sans: [
        "Apercu Pro",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "Apercu Pro Mono",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      colors: {
        "chris-blue": "#234ef3",
      },
    },
  },
  variants: {
    // gradients: ["responsive", "hover"],
    textColor: ["group-hover", "hover"],
    borderColor: ["group-hover", "hover"],
    borderWidth: ["hover"],
  },
  // plugins: [require("./plugins/gradients")],
};
