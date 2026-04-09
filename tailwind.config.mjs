/** @type {import('tailwindcss').Config} */

/** Helper: reference a CSS custom property as an rgb() color with Tailwind
 *  opacity-modifier support (e.g. `bg-base/60`). */
const v = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base:      v('base'),
        mantle:    v('mantle'),
        crust:     v('crust'),
        surface0:  v('surface0'),
        surface1:  v('surface1'),
        surface2:  v('surface2'),
        overlay0:  v('overlay0'),
        overlay1:  v('overlay1'),
        overlay2:  v('overlay2'),
        subtext0:  v('subtext0'),
        subtext1:  v('subtext1'),
        text:      v('text'),
        lavender:  v('lavender'),
        blue:      v('blue'),
        sapphire:  v('sapphire'),
        sky:       v('sky'),
        teal:      v('teal'),
        green:     v('green'),
        yellow:    v('yellow'),
        peach:     v('peach'),
        maroon:    v('maroon'),
        red:       v('red'),
        mauve:     v('mauve'),
        pink:      v('pink'),
        flamingo:  v('flamingo'),
        rosewater: v('rosewater'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-12px) translateX(6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
