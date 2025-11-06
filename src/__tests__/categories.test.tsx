import { render, screen } from '@testing-library/react'
import Categories from '@/components/Categories'
import React from 'react'

jest.mock('next/link', () => ({ __esModule: true, default: ({ children, href }: any) => <a href={href}>{children}</a> }))

test('renderiza card Veterinário com link', () => {
  render(<Categories />)
  const link = screen.getByRole('link', { name: /veterinário/i })
  expect(link).toHaveAttribute('href', '/categorias/veterinario')
  expect(screen.getByRole('heading', { level: 3, name: /veterinário/i })).toBeInTheDocument()
})
