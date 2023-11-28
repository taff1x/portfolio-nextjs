import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "gray": {
          50: "#F4F4F5",
          100: "#E9E9EC",
          200: "#D4D4D9",
          300: "#C1C1C8",
          400: "#ABABB5",
          500: "#9595A2",
          600: "#757585",
          700: "#585864",
          800: "#393941",
          900: "#1D1D21",
          950: "#0E0E10"
        },
        "fuchsia": {
          50: "#F9F2FD",
          100: "#F3E5FA",
          200: "#E7CBF6",
          300: "#DBB1F1",
          400: "#CF97EC",
          500: "#C37FE8",
          600: "#A641DD",
          700: "#8121B6",
          800: "#561679",
          900: "#2B0B3D",
          950: "#16051E"
        },
        "indigo": {
          50: "#F1F0F5",
          100: "#E2E1EA",
          200: "#C3BFD4",
          300: "#A6A1BF",
          400: "#877FA8",
          500: "#6C6392",
          600: "#554E74",
          700: "#413C58",
          800: "#2B273A",
          900: "#16151E",
          950: "#0B0A0F"
        },
        "blue": {
          50: "#F3F6F7",
          100: "#E6EDEF",
          200: "#CEDBDE",
          300: "#B5C9CE",
          400: "#9DB7BE",
          500: "#85A6AE",
          600: "#628993",
          700: "#49676E",
          800: "#31454A",
          900: "#182225",
          950: "#0C1112"
        },
        "green": {
          50: "#EDFCFC",
          100: "#E0F9FA",
          200: "#BDF3F5",
          300: "#9EEDF0",
          400: "#7AE7EB",
          500: "#5CE1E6",
          600: "#22D7DD",
          700: "#1AA3A8",
          800: "#116B6F",
          900: "#093839",
          950: "#041A1B"
        }
      }
    },
  },
  plugins: [],
  
}
export default config
