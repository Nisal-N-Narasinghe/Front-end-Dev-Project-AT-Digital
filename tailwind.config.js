/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    "primary-color": "#6B3CC9",
    "secondary-color": "#F28D35",
    "analogous-color-1": "#6A44F2",
    "analogous-color-2": "#1CBDDD",
    "triadic-color-1": "#52378C",
    "dark-color-1": "#78BF91",
    "dark-color-2": "#4DCA79",
    "dark-color-gradient": "linear-gradient(45deg, #F28D35, #6B3CC9)",
    "text-color": "#2F2F2F",
    "text-color-light": "#545A75",
    "text-color-subtle": "#9C9991",
    "accent-color": "#E2F2FE",
    "accent-color-2": "#FFF8E0",
    "error-color": "#FFF8E0",
    "success-color": "#FFF8E0",
  },
  extend: {
    width: {
      logo: "238.89px",
      footerdivider: "630px",
      bodyParagraphBox: "542px",
      bodySubImage: "414px",
    },
    height: {
      logo: "36.11px",
      bodyParagraphBox: "206px",
      bodySubImage: "414px",
    },
    fontSize: {
      "2xl": "1.5rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
      bodySubHeading: "27px",
      bodyParagraph: "16px",
    },
  },
};
export const plugins = [];
