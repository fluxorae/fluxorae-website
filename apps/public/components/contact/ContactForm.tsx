'use client'

import { useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Building2, BadgeCheck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const contactSchema = z
  .object({
    userType: z.enum(['client', 'employee'], { required_error: 'Please choose an option' }),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    company: z.string().optional(),
    phone: z.string().optional(),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    service: z.string().optional(),
    budget: z.string().optional(),
    role: z.string().optional(),
    reason: z.string().optional(),
    employeeId: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.userType === 'employee') {
      if (!data.role) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please select your department/role',
          path: ['role'],
        })
      }
      if (!data.reason) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please select a reason',
          path: ['reason'],
        })
      }
    }
  })

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { userType: 'client' },
  })

  const searchParams = useSearchParams()
  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'employee' || type === 'client') {
      setValue('userType', type)
    }
  }, [searchParams, setValue])

  const userType = watch('userType')

  const clientFields = useMemo(
    () => [
      { name: 'company', label: 'Company Name', placeholder: 'Acme Corp (optional)' },
      {
        name: 'service',
        label: 'Service Interested In',
        type: 'select' as const,
        options: [
          'AI & Automation',
          'Product Engineering',
          'Data / Cloud / DevOps',
          'UI/UX & Branding',
          'Marketing & SEO',
          'Other',
        ],
      },
      { name: 'budget', label: 'Budget Range', placeholder: 'E.g., ₹5-10L / $10-20k (optional)' },
    ],
    [],
  )

  const employeeFields = useMemo(
    () => [
      {
        name: 'role',
        label: 'Department / Role',
        type: 'select' as const,
        options: ['Engineering', 'Design', 'Data', 'Marketing', 'Sales', 'HR', 'Ops', 'Finance', 'Other'],
      },
      {
        name: 'reason',
        label: 'Reason',
        type: 'select' as const,
        options: ['Support', 'Update', 'Access', 'HR', 'Other'],
      },
      { name: 'employeeId', label: 'Employee ID', placeholder: 'Optional' },
    ],
    [],
  )

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-8 rounded-2xl shadow-3xl"
    >
      <h2 className="heading-3 text-xl mb-6 text-white">Send us a Message</h2>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-emerald-500/10 border border-emerald-300/40 rounded-lg flex items-center space-x-2 text-emerald-100"
        >
          <CheckCircle size={20} />
          <span>Thank you! Your message has been sent successfully.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/10 border border-red-300/40 rounded-lg flex items-center space-x-2 text-red-100"
        >
          <AlertCircle size={20} />
          <span>Something went wrong. Please try again later.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <p className="block text-sm font-semibold text-secondary mb-3">Who are you? *</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'client', label: 'Client', icon: Building2, desc: 'Looking for services or partnership' },
              { value: 'employee', label: 'Employee', icon: BadgeCheck, desc: 'Internal request or update' },
            ].map((option) => {
              const Icon = option.icon
              const selected = userType === option.value
              return (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
                    selected ? 'border-accent bg-accent/10 shadow-neon' : 'border-white/10 hover:border-accent/40 bg-white/5'
                  }`}
                >
                  <Controller
                    name="userType"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="radio"
                        value={option.value}
                        checked={field.value === option.value}
                        onChange={() => field.onChange(option.value)}
                        className="sr-only"
                      />
                    )}
                  />
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${selected ? 'bg-accent/10 text-accent' : 'bg-white/10 text-secondary'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className={`font-semibold ${selected ? 'text-white' : 'text-secondary'}`}>{option.label}</p>
                    <p className="text-sm text-gray-300">{option.desc}</p>
                  </div>
                </label>
              )
            })}
          </div>
          {errors.userType && <p className="mt-1 text-sm text-red-600">{errors.userType.message}</p>}
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
                placeholder="Your Name"
              />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-secondary mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
              placeholder="+1 (234) 567-890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-secondary mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {userType === 'client' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    {...register(field.name as keyof ContactFormData)}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    {...register(field.name as keyof ContactFormData)}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {userType === 'employee' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employeeFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    {...register(field.name as keyof ContactFormData)}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    {...register(field.name as keyof ContactFormData)}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    placeholder={field.placeholder}
                  />
                )}
                {errors[field.name as keyof ContactFormData] && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors[field.name as keyof ContactFormData]?.message as string}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={6}
            className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-white placeholder:text-gray-400"
            placeholder="Tell us more about your project or inquiry..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
