import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

/**
 * Example test for a Button/CTA component
 * Tests basic button rendering and accessibility
 */

const MockCTAButton = ({ children, onClick }: { children: string; onClick?: () => void }) => (
  <button onClick={onClick} aria-label={children}>
    {children}
  </button>
)

describe('CTA Button Component', () => {
  it('renders with correct text', () => {
    render(<MockCTAButton>Get Started</MockCTAButton>)
    
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    
    render(<MockCTAButton onClick={handleClick}>Click Me</MockCTAButton>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    button.click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible with proper aria labels', () => {
    render(<MockCTAButton>Learn More</MockCTAButton>)
    
    const button = screen.getByRole('button', { name: /learn more/i })
    expect(button).toHaveAttribute('aria-label', 'Learn More')
  })
})
