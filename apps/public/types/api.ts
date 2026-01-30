export interface ServiceDto {
  id: string
  slug: string
  title: string
  description?: string | null
  category?: string | null
  deliverables: string[]
  priceCents: number
  customQuote: boolean
  aiTags: string[]
}

export interface ProjectDto {
  id: string
  name: string
  status: string
  description?: string | null
  scope?: Record<string, unknown> | null
  estimatedBudget?: number | null
  estimatedTimelineDays?: number | null
}

export interface UserDto {
  id: string
  email: string
  role: string
  status: string
  firstName?: string | null
  lastName?: string | null
}

export interface AiAnalysisResponse {
  scope: Record<string, unknown>
  estimations: { budget: number; timelineDays: number }
  talent: Record<string, unknown>
  riskSignals: string[]
  estimatedBudget: number
  estimatedTimelineDays: number
  confidence: number
}
