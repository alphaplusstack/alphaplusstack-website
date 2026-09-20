/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Derived from the AlphaPlusStack logo
        brand: {
          blue: '#155EEF',
          'blue-deep': '#0B2E9E',
          cyan: '#12B4D6',
          purple: '#8A3FFC',
          magenta: '#C026D3',
          charcoal: '#0B1220',
          'charcoal-soft': '#111A2E',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(115deg, #155EEF 0%, #12B4D6 45%, #8A3FFC 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(21,94,239,0.10), rgba(18,180,214,0.08) 45%, rgba(138,63,252,0.10))',
        'orbit-ring': 'conic-gradient(from 180deg, #155EEF, #12B4D6, #8A3FFC, #C026D3, #155EEF)',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(11, 46, 158, 0.25)',
        'soft-dark': '0 8px 30px -10px rgba(18, 180, 214, 0.25)',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        orbit: 'orbit 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
