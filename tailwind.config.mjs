/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #F5F5F5)", // Fallback to #F5F5F5
        foreground: "var(--foreground)",
        "custom-gradient": "var(--custom-gradient)", // Uses a CSS variable
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #F5F5F5, #E0E0E0)", // Define a fallback gradient
      },
      fontFamily: {
        redhat: ["'Red Hat Text'", "sans-serif"], // Add Red Hat Text font
      },
    },
  },
  plugins: [],
};
