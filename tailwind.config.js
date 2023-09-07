/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#151515",
        "light-green": "#4EE1A0",
        "dark-grey": "#242424",
        "light-grey": "#d9d9d9",
        white: "#ffffff",
      },
      fontSize: {
        "heading-xl": "88px",
        "heading-l": "48px",
        "heading-m": "24px",
        body: "18px",
      },
      lineHeight: {
        xl: "88px",
        l: "56px",
        m: "32px",
        body: "28px",
      },
      letterSpacing: {
        xl: "-2.5px",
        l: "-1.5px",
      },
      backgroundImage: {
        "hero-img-mobile": "url('/images/image-profile-mobile.webp')",
        "hero-img-tablet": "url('/images/image-profile-tablet.webp)",
        "hero-img-desktop": "url('/images/image-profile-desktop.webp)",
        'pattern-rings': "url('/images/pattern-rings.svg')",
        'pattern-circle': "url('/images/pattern-circle.svg')",
      },
    },
  },
  plugins: [],
};
