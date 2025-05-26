import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        "84": "0.84",
      },
      backgroundImage: {
        "culture-gradient": "linear-gradient(to bottom, #6843e1 0%, #d2c9f3 45%, #5b5769 60%, #030303 100%)",
        "we-value-gradient": "linear-gradient(to bottom, #030303 0%, #020202 100%)",
        "we-value-gradient2": "linear-gradient(to bottom, #030303 0%, #020202 67%,#ffffff 68%, #ffffff 100%)",
        "custom-gradient-transparent-to-white": "linear-gradient(to right, transparent 65%, #fff 0%)",
        "custom-gradient": "linear-gradient(to right, #f1f1f1 77%, #fff 0%)",
        "hero-service": "linear-gradient(180deg, #6843E1 0%, #cabff3 100%)",
        "we-are-culture": "linear-gradient(180deg, #896de7 0%, #020202 100%)",
        "custom-gradient-blog": "linear-gradient(#f1f1f1 40%, #ffffff 60%)",
        "data-shadow":
          "url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27143%27 height=%27134%27 viewBox=%270 0 143 134%27 fill=%27none%27><path d=%27M91.8424 4.08515C91.8424 4.08515 67.5423 -6.57489 45.0523 6.54511C22.5623 19.6751 12.4724 47.895 3.71235 70.465C-5.04765 93.035 2.14234 117.005 20.5723 128.895C39.0123 140.775 50.2023 125.675 75.1423 126.475C100.082 127.275 107.032 131.575 126.872 117.565C146.712 103.565 148.362 67.6449 130.462 39.8649C112.552 12.0849 91.8424 4.07539 91.8424 4.07539V4.08515Z%27 fill=%27%236743DF%27/><path d=%27M91.8424 4.08515C91.8424 4.08515 67.5423 -6.57489 45.0523 6.54511C22.5623 19.6751 12.4724 47.895 3.71235 70.465C-5.04765 93.035 2.14234 117.005 20.5723 128.895C39.0123 140.775 50.2023 125.675 75.1423 126.475C100.082 127.275 107.032 131.575 126.872 117.565C146.712 103.565 148.362 67.6449 130.462 39.8649C112.552 12.0849 91.8424 4.07539 91.8424 4.07539V4.08515Z%27 fill=%27%23F1F1F1%27/></svg>')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#6843E1",
        secondary: "#28FFE3",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        mobile: "390px",
        csTitle: "428px",
        extramob: "484px",
        mobtab: "620px",
        tablet: "768px",
        talop: "896px",
        laptop: "1024px",
        laptopm: "1140px",
        desktop: "1366px",
        desktopm: "1500px",
        desktoplg: "1630px",
        desktopxl: "1920px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
