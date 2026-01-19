import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ContactForm from '@/components/contact/ContactForm'

// Mock the fetch API
global.fetch = jest.fn()

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, ...props }: any, ref: any) => (
      <div ref={ref} {...Object.fromEntries(
        Object.entries(props).filter(([key]) => !['initial', 'animate', 'exit', 'whileInView', 'transition', 'layoutId'].includes(key))
      )}>
        {children}
      </div>
    )),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders optional company and phone fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send|submit/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('displays validation errors for invalid input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send|submit/i })
    await user.click(submitButton)
    
    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText(/name must be at least/i)).toBeInTheDocument()
    })
  })

  it('has email validation on email input', () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    
    expect(emailInput.type).toBe('email')
  })

  it('renders the form with proper structure', () => {
    const { container } = render(<ContactForm />)
    
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
  })
})
