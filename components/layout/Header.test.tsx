import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/layout/Header'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, ...props }: any, ref: any) => (
      <div
        ref={ref}
        {...Object.fromEntries(
          Object.entries(props).filter(
            ([key]) =>
              ![
                'initial',
                'animate',
                'exit',
                'whileInView',
                'transition',
                'layoutId',
              ].includes(key)
          )
        )}
      >
        {children}
      </div>
    )),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Header Component', () => {
  it('renders the Fluxorae logo', () => {
    render(<Header />)
    
    const logo = screen.getByText('Fluxorae')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders header element with fixed positioning', () => {
    const { container } = render(<Header />)
    
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('fixed')
  })

  it('has menu toggle button for mobile', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('renders all main navigation items', () => {
    render(<Header />)
    
    const expectedLinks = [
      'Home', 'About', 'Services', 'Solutions',
      'Industries', 'Insights', 'Governance', 'Careers', 'Contact'
    ]
    
    expectedLinks.forEach(linkName => {
      expect(screen.getByRole('link', { name: new RegExp(linkName, 'i') })).toBeInTheDocument()
    })
  })
})
