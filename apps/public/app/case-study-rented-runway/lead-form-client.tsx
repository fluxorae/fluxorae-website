'use client'

import { useState } from 'react'

export default function LeadFormClient() {
  const [status, setStatus] = useState<{ text: string; type: 'error' | 'success' | '' }>({ text: '', type: '' })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || !email || !message) {
      setStatus({ text: 'Please fill all fields.', type: 'error' })
      return
    }
    if (!emailPattern.test(email)) {
      setStatus({ text: 'Enter a valid email.', type: 'error' })
      return
    }
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    window.location.href = `mailto:[EMAIL]?subject=Case Study Lead - The Rented Runway&body=${body}`
    setStatus({ text: 'Opening your email client...', type: 'success' })
    form.reset()
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        aria-label="Name"
        required
        className="w-full bg-primary-dark/70 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        aria-label="Email"
        required
        className="w-full bg-primary-dark/70 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <textarea
        name="message"
        placeholder="What do you want to rent? Date? Size? Dehradun location?"
        aria-label="Message"
        required
        className="w-full bg-primary-dark/70 border border-white/10 rounded-xl px-3 py-3 text-white min-h-[140px] focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-accent to-amber-300 text-primary font-semibold px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition"
      >
        Submit &amp; get a quote
      </button>
      <div className={`text-sm ${status.type === 'error' ? 'text-danger' : 'text-success'}`}>{status.text}</div>
    </form>
  )
}
