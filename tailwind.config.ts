import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            textShadow: `
              1px 1px 0px hsl(var(--primary-foreground)/0.3),
              -1px -1px 0px hsl(var(--primary)/0.2),
              2px 2px 3px hsl(var(--background)/0.1),
              0 0 4px hsl(var(--primary)/0.5),
              0 0 8px hsl(var(--primary)/0.3)
            `
          },
          '50%': {
            transform: 'scale(1.02)',
            textShadow: `
              1.5px 1.5px 0px hsl(var(--primary-foreground)/0.6),
              -1.5px -1.5px 0px hsl(var(--primary)/0.4),
              2px 2px 3px hsl(var(--background)/0.0),
              0 0 10px hsl(var(--primary)/0.8),
              0 0 18px hsl(var(--primary)/0.6),
              0 0 28px hsl(var(--accent)/0.4)
            `
          },
        },
        heroImagePulseFloat: {
            '0%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-8px) scale(1.03)' },
            '100%': { transform: 'translateY(0px) scale(1)' },
        },
        'logo-sway-float': {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-5px) translateX(5px) scale(1.02)' },
          '50%': { transform: 'translateY(-10px) translateX(0px) scale(1.04)' },
          '75%': { transform: 'translateY(-5px) translateX(-5px) scale(1.02)' },
          '100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
        },
        'pan-object-position': {
          '0%': { 'object-position': '48% 50%' },
          '100%': { 'object-position': '52% 50%' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'hero-image-pulse-float': 'heroImagePulseFloat 6s ease-in-out infinite alternate',
        'logo-sway-float': 'logo-sway-float 7s ease-in-out infinite alternate',
        'image-pan-slow': 'pan-object-position 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
