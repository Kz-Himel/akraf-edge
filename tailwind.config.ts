import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        richblack: "#00120B",
        darkgreen: "#032221",
        bangladesh: "#03624C",
        meadow: "#2CC295",
        caribbean: "#00DF81",
        flashwhite: "#F1F7F6",
        // Secondary
        pine: "#06302B",
        basil: "#0B453A",
        forest: "#095544",
        frog: "#17876D",
        mint: "#2FA98C",
        stone: "#707D7D",
        pistachio: "#AACBC4",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "edge-radial":
          "radial-gradient(circle at 50% 0%, rgba(0,223,129,0.18), rgba(0,18,11,0) 60%)",
        "edge-line": "linear-gradient(90deg, #00DF81, #2CC295, #03624C)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;