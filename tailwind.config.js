/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
          secondary: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
          },
          dark: {
            100: '#222831',
            200: '#1A1E25',
            300: '#15181D'
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'sans-serif'],
          display: ['Lexend', 'sans-serif']
        },
        borderRadius: {
          '4xl': '2rem'
        },
        boxShadow: {
          'morphic': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
          'morphic-dark': '20px 20px 60px #1a1e25, -20px -20px 60px #222831'
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        },
      },
    },
    plugins: [],
  }