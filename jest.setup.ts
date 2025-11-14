import '@testing-library/jest-dom'

// Provide a minimal IntersectionObserver polyfill for jsdom tests
if (typeof globalThis.IntersectionObserver === 'undefined') {
	class IntersectionObserver {
		constructor() {}
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords() {
			return []
		}
	}
	// @ts-ignore - attach to global for tests
	globalThis.IntersectionObserver = IntersectionObserver as any
}