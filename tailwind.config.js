/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        b1: {
          DEFAULT: "var(--colors-b1)",
        },
        b2: {
          DEFAULT: "var(--colors-b2)",
        },
        b3: {
          DEFAULT: "var(--colors-b3)",
        },
        b4: {
          DEFAULT: "var(--colors-b4)",
        },
        bp: "var(--colors-bp)",

        b5: {
          DEFAULT: "var(--colors-b5)",
        },
        b6: {
          DEFAULT: "var(--colors-b6)",
        },
        b7: {
          DEFAULT: "var(--colors-b7)",
        },
        b8: {
          DEFAULT: "var(--colors-b8)",
        },

        g1: {
          DEFAULT: "var(--colors-g1)",
        },
        g2: {
          DEFAULT: "var(--colors-g2)",
        },
        g3: {
          DEFAULT: "var(--colors-g3)",
        },
        g4: {
          DEFAULT: "var(--colors-g4)",
        },
        g5: {
          DEFAULT: "var(--colors-g5)",
        },
        g6: {
          DEFAULT: "var(--colors-g6)",
        },
        g7: {
          DEFAULT: "var(--colors-g7)",
        },
        g8: {
          DEFAULT: "var(--colors-g8)",
        },

        gr1: {
          DEFAULT: "var(--colors-gr1)",
        },
        gr2: {
          DEFAULT: "var(--colors-gr2)",
        },
        gr3: {
          DEFAULT: "var(--colors-gr3)",
        },
        gr4: {
          DEFAULT: "var(--colors-gr4)",
        },
        gr5: {
          DEFAULT: "var(--colors-gr5)",
        },
        gr6: {
          DEFAULT: "var(--colors-gr6)",
        },
        gr7: {
          DEFAULT: "var(--colors-gr7)",
        },
        gr8: {
          DEFAULT: "var(--colors-gr8)",
        },
        grs: {
          DEFAULT: "var(--colors-grs)",
        },

        "accent-w": {
          DEFAULT: "var(--accent-colors-w)",
        },
        "accent-pk": {
          DEFAULT: "var(--accent-colors-pk)",
        },
        "accent-y": {
          DEFAULT: "var(--accent-colors-y)",
        },
        "accent-o": {
          DEFAULT: "var(--accent-colors-o)",
        },
        "accent-p": {
          DEFAULT: "var(--accent-colors-w)",
        },
        "accent-r1": {
          DEFAULT: "var(--accent-colors-r1)",
        },
        "accent-r2": {
          DEFAULT: "var(--accent-colors-r2)",
        },

        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
