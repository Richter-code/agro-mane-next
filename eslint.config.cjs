module.exports = {
  // Apply the flat config to source files
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  ignores: ['node_modules/**', '.next/**'],
  extends: ['next/core-web-vitals', 'next/typescript'],
}
