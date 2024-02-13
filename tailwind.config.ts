import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rubik: ["Rubik Mono One", "monospace"],
      space: ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        grey: "#2D3142",
        yellow: "#F7CB15",
        white: "#FFFFFFF",
        orange: "#EF8354",
        blue: "#809BCE",
        black: "#121212",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
