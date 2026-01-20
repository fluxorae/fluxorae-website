import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#050816',
          dark: '#02040a',
          light: '#0f1629',
        },
        secondary: {
          DEFAULT: '#E2E8F0',
          light: '#F8FAFC',
          dark: '#0B1224',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
          light: '#A78BFA',
        },
        bharat: {
          saffron: '#FF9933',
          green: '#138808',
          ashoka: '#3A75C4',
        },
        electric: {
          DEFAULT: '#14F195',
          soft: '#5AE6C8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        neon: '0 10px 40px rgba(139, 92, 246, 0.35)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(20, 241, 149, 0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(20, 241, 149, 0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
