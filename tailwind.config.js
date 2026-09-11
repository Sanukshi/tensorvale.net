/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Enterprise copper / slate palette */
        'tv-bg': '#10232A',
        'tv-white': '#162A32',
        'tv-ink': '#D3C3B9',
        'tv-ink-soft': '#A79E9C',
        'tv-panel': '#181816',
        'tv-muted': '#A79E9C',
        'tv-line': '#3D4D55',
        'tv-line-dark': '#2A3A42',
        'tv-cyan': '#B58863',
        'tv-cyan-dim': '#9A7354',
        'tv-blue': '#D3C3B9',
        'tv-sand': '#D3C3B9',
        'tv-clay': '#B58863',
        'tv-amber': '#B58863',
        'tv-surface': '#181816',
        'tv-card': '#162A32',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        winked: ['Winked', '"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(16, 35, 42, 0.55)',
        glow: '0 0 48px rgba(181, 136, 99, 0.28)',
      },
      backgroundImage: {
        'tv-hero':
          'radial-gradient(ellipse 90% 50% at 50% -10%, rgba(181,136,99,0.2), transparent 55%), linear-gradient(180deg, #10232A 0%, #162A32 50%, #10232A 100%)',
        'tv-site': 'linear-gradient(180deg, #10232A 0%, #10232A 100%)',
        'tv-mint': 'linear-gradient(135deg, #B58863 0%, #9A7354 100%)',
        'tv-panel-grad': 'linear-gradient(160deg, #3D4D55 0%, #181816 55%, #10232A 100%)',
        'tv-card-grad': 'linear-gradient(165deg, #1A3038 0%, #162A32 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 24px rgba(181,136,99,0.2)' },
          '50%': { boxShadow: '0 0 48px rgba(181,136,99,0.45)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.55s ease-out both',
      },
    },
  },
  plugins: [],
}
