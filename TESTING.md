# Testing Guide for Fluxorae Website

This document outlines the testing strategy and setup for the Fluxorae website project.

## Overview

We use **Jest** and **React Testing Library** to write and run tests for the Fluxorae Next.js application. This combination provides:

- **Jest**: A powerful test runner and assertion library
- **React Testing Library**: For testing React components in a way that resembles how users interact with them

## Installation

All testing dependencies are already installed. To verify:

```bash
npm list @testing-library/react jest
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test:watch
```

Watch mode automatically reruns tests when files change, which is helpful during development.

### Generate coverage report
```bash
npm test:coverage
```

This generates a coverage report showing which parts of your code are covered by tests.

## Test Structure

Tests are located alongside the components they test, using the `.test.tsx` or `.test.ts` file extension.

Example structure:
```
components/
  layout/
    Header.tsx
    Header.test.tsx
  contact/
    ContactForm.tsx
    ContactForm.test.tsx
```

## Writing Tests

### Basic Test Example

```typescript
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    
    // Use screen queries to find elements
    const element = screen.getByRole('button', { name: /click me/i })
    
    // Assert the element exists
    expect(element).toBeInTheDocument()
  })
})
```

### Key Testing Library Queries

Use these queries to find elements in order of preference:

1. **Accessibility Queries** (Recommended)
   - `getByRole()` - Query by ARIA role
   - `getByLabelText()` - Query by label (especially for form inputs)
   - `getByPlaceholderText()` - Query by placeholder text
   - `getByText()` - Query by element text content

2. **Semantic Queries**
   - `getByAltText()` - Query by image alt text
   - `getByTitle()` - Query by title attribute

3. **Test IDs** (Last Resort)
   - `getByTestId()` - Query by `data-testid` attribute

Example:
```typescript
// Good - accessible
const submitBtn = screen.getByRole('button', { name: /submit/i })
const emailInput = screen.getByLabelText(/email/i)

// Avoid - test implementation details
const element = screen.getByTestId('my-element')
```

### Testing User Interactions

Use `userEvent` for simulating user interactions:

```typescript
import userEvent from '@testing-library/user-event'

it('handles form submission', async () => {
  const user = userEvent.setup()
  render(<ContactForm onSubmit={jest.fn()} />)
  
  const submitBtn = screen.getByRole('button', { name: /submit/i })
  await user.click(submitBtn)
  
  // Assert results
})
```

### Testing with Props

```typescript
it('displays different content based on props', () => {
  const { rerender } = render(<Component title="First" />)
  expect(screen.getByText('First')).toBeInTheDocument()
  
  rerender(<Component title="Second" />)
  expect(screen.getByText('Second')).toBeInTheDocument()
})
```

### Mocking

Mock external dependencies and API calls:

```typescript
// Mock a module
jest.mock('@/lib/sanity', () => ({
  fetchPosts: jest.fn(() => Promise.resolve([])),
}))

// Mock functions
const mockCallback = jest.fn()

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] }),
  })
)
```

## Coverage Thresholds

The project is configured with the following coverage thresholds:

- **Branches**: 50%
- **Functions**: 50%
- **Lines**: 50%
- **Statements**: 50%

These are baseline thresholds. We recommend gradually improving coverage to 80%+ for critical components.

## Sample Test Files

Example test files are provided for reference:

- `components/layout/Header.test.tsx` - Navigation component test
- `components/contact/ContactForm.test.tsx` - Form component test
- `components/common/CTA.test.tsx` - Button component test

These examples demonstrate:
- ✅ Rendering components
- ✅ Finding elements using accessibility queries
- ✅ Mocking user interactions
- ✅ Testing accessibility attributes
- ✅ Testing function callbacks

## Best Practices

1. **Test Behavior, Not Implementation**
   - Write tests from the user's perspective
   - Avoid testing internal state or implementation details

2. **Use Semantic Queries**
   - Prefer `getByRole`, `getByLabelText`, `getByText`
   - Avoid `getByTestId` unless necessary

3. **Keep Tests Simple**
   - One assertion per test when possible
   - Use descriptive test names

4. **Mock External Dependencies**
   - Mock API calls
   - Mock external libraries
   - Keep tests isolated and fast

5. **Test Accessibility**
   - Ensure components have proper ARIA attributes
   - Use semantic HTML
   - Test that keyboard navigation works

6. **Organize Tests**
   - Group related tests in `describe` blocks
   - Use clear, descriptive test names

## Common Testing Patterns

### Testing Async Operations

```typescript
it('handles async data loading', async () => {
  render(<AsyncComponent />)
  
  // Wait for element to appear
  const element = await screen.findByText(/loaded/i)
  expect(element).toBeInTheDocument()
})
```

### Testing Error States

```typescript
it('displays error message on failure', () => {
  jest.mock('@/lib/api', () => ({
    fetchData: jest.fn(() => Promise.reject(new Error('API Error'))),
  }))
  
  render(<Component />)
  const error = await screen.findByText(/error/i)
  expect(error).toBeInTheDocument()
})
```

### Testing Conditional Rendering

```typescript
it('shows different content based on condition', () => {
  const { rerender } = render(<Component isLoggedIn={false} />)
  expect(screen.getByText(/login/i)).toBeInTheDocument()
  
  rerender(<Component isLoggedIn={true} />)
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
})
```

## Configuration Files

- **jest.config.js** - Jest configuration with Next.js support
- **jest.setup.js** - Global test setup file

## Debugging Tests

### View rendered HTML
```typescript
const { debug } = render(<Component />)
debug() // Prints the DOM to console
```

### Check what queries are available
```typescript
const { container } = render(<Component />)
console.log(container.innerHTML)
```

### Use screen.logTestingPlaygroundURL()
```typescript
import { screen } from '@testing-library/react'

screen.logTestingPlaygroundURL() // Opens testing playground in browser
```

## Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

1. Review the sample test files
2. Adapt the patterns to your components
3. Run `npm test` to verify tests work
4. Gradually increase test coverage for critical components
5. Use watch mode during development: `npm test:watch`

## Questions?

Refer to the official documentation or check the sample test files for implementation patterns.
