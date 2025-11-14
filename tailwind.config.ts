import type { Config } from 'tailwindcss'

// Paleta Agropecuária do Mané (identidade proposta)
// Verde escuro, verde médio, tons neutros e off-white
const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2F6F55', // verde médio principal
        brandDark: '#0C3B2E',
        brandLight: '#F0F7F3',
        brandAccent: '#7ED957', // tom vibrante de apoio anterior
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        serif: ['var(--font-serif)']
      },
      backgroundImage: {
        'hero-agromane': "radial-gradient(circle at 30% 30%, rgba(47,111,85,0.35), transparent 60%), radial-gradient(circle at 70% 60%, rgba(12,59,46,0.4), transparent 65%)"
      }
    }
  },
  plugins: []
}

export default config
