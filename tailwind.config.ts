import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        light: "#F1F3F4",
        "teal-light": "#79BAC1", 
        "teal-dark": "#2A7886",
        purple: "#512B58",
        // Custom gradients and backgrounds
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        primary: "var(--color-teal-dark)",
        secondary: "var(--bg-secondary)",
        accent: "var(--color-teal-light)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "professional-bg": `
          radial-gradient(circle at 20% 80%, rgba(121, 186, 193, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(42, 120, 134, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(81, 43, 88, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #0A0D1A 0%, #141B2D 35%, #1E2A42 65%, #141B2D 100%)
        `,
      },
      animation: {
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "wave": "wave 0.6s ease-in-out",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "professional-glow": "professional-glow 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "gradient-move": "gradient-move 3s linear infinite",
        "twinkle": "twinkle 4s ease-in-out infinite alternate",
        "moveStars": "moveStars 200s linear infinite",
        "shootingStar": "shootingStar 3s linear infinite",
        "nebulaPulse": "nebulaPulse 8s ease-in-out infinite alternate",
        "galaxyRotate": "galaxyRotate 30s linear infinite",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        float: {
          "0%": {
            opacity: "0",
            transform: "translateY(100vh) translateX(0px) rotate(0deg)",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100px) translateX(100px) rotate(360deg)",
          },
        },
        "professional-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(121, 186, 193, 0.1), 0 4px 40px rgba(81, 43, 88, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(121, 186, 193, 0.2), 0 8px 60px rgba(81, 43, 88, 0.15)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        twinkle: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        moveStars: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-2000px)" },
        },
        shootingStar: {
          "0%": {
            opacity: "0",
            transform: "translateX(0) translateY(0) scale(0)",
          },
          "10%": {
            opacity: "1",
            transform: "translateX(0) translateY(0) scale(1)",
          },
          "90%": {
            opacity: "1",
            transform: "translateX(300px) translateY(300px) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(300px) translateY(300px) scale(0)",
          },
        },
        nebulaPulse: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
        },
        galaxyRotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(81, 43, 88, 0.12), inset 0 1px 0 rgba(241, 243, 244, 0.05)",
        "glass-hover": "0 12px 48px rgba(81, 43, 88, 0.18), inset 0 1px 0 rgba(241, 243, 244, 0.08), 0 0 0 1px rgba(121, 186, 193, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;