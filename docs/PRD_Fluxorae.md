# Fluxorae Private Limited – Product Requirements Document

## 1. Product Overview
### 1.1 Vision
Fluxorae.com is envisioned as an AI-plus-human integrated, full-stack ecosystem that surfaces services, products, and verified freelancers in one destination. The platform marries autonomous intelligence with human operations to maximize delivery speed, trust, and repeatability while acting as a profit engine for the company. Every workflow is designed to drive measurable business outcomes—accelerated time to value, cost reduction through automation, and predictable ROI for enterprise and SMB accounts.

### 1.2 Target Users
| User Type | Description |
| --- | --- |
| Customer | Purchasers of services or digital products, seeking bundled expertise, clarity, and assurance. |
| Freelancer | Credentialed external talent contributing on projects, packages, or escrow engagements. |
| Employee | Internal ops, product, QA, and support staff who manage workflows, ensure quality, and unlock automation signals. |
| Admin | System-wide controllers responsible for governance (RBAC, finance, platform health) and compliance oversight. |
| AI Agent | Advisory and copilot layer that analyzes prompts, surfaces recommendations, detects risk, and collaborates with humans (always requiring human approval for critical actions). |

## 2. Core Modules (Scope Definition)
Each module below is scoped for the first release unless noted otherwise.

### M1. Marketing Website
- SEO-optimized landing structure and hero story that highlights Fluxorae as a measurable outcome machine.
- Listings for services, products, case studies, and CTAs for “Book a Call” + exploration paths.
- Contact and lead capture with data-backed visuals, trust badges, and certification references.

### M2. Authentication & Roles
- Role definitions: CUSTOMER, FREELANCER, EMPLOYEE, ADMIN (expandable by phase).
- Primary auth: email/password; Phase 2: Google sign-in.
- JWT-based session management + RBAC enforcement in APIs.

### M3. Service & Product Store
- Services segmented by category (Web, App, AI, Marketing, Automation, etc.) with fixed packages + custom quotes.
- AI-assisted service discovery suggests best-fit bundles.
- Digital products (templates, tools, licenses) with instant delivery upon payment and download portal.

### M4. Custom Project System (Core)
Customer journey:
1. Post project using AI wizard.
2. AI generates structured scope, deliverables, timeline, estimated budget.
3. Customer confirmation triggers payment (milestones/escrow) and project workspace provisioning.
- Workspace ties scope, milestones, tasks, files, chat, approvals, and audit logging.

### M5. Freelancer Marketplace
- Onboarding with signup, KYC documents, skill selectors, portfolio uploads, and availability calendar.
- Match logic: freelancers apply, AI suggests projects, admins/PMs may assign directly.
- Rating and availability data feed into Talent Matching.

### M6. Project Workspace
- Shared interface for customers, freelancers, employees with chat, file uploads, task lists, milestones, status tracking, approval controls, and embedded AI insights.
- Real-time updates via WebSockets; activities logged for traceability.

### M7. Payments & Escrow
- Support for one-time payments and milestone-based escrow that holds funds until QA validation and customer approval.
- Platform deducts fee automatically; payouts triggered on milestone acceptance.
- QA and AI analyzers feed quality signals before release.

### M8. AI Analyzer System
- Requirement Analyzer structures text into scope.
- Cost & Time Estimator leverages historical project data.
- Talent Matching uses skills, rating, availability.
- Risk Detector flags delays/engagement issues.
- QA Analyzer inspects delivery completeness.
- Support Copilot drafts ticket replies (humans review).
- AI stays advisory; humans approve escalations, payments, or scope changes.

### M9. Internal Employee System
- Ops dashboard for active projects, assignments, SLA monitoring, QA checklists, dispute handling, and automation alerts (e.g., milestone delays).

### M10. Admin Panel
- Cross-functional control center: user/service/product CRUD, pricing rules, escrow controls, AI logs/overrides, analytics, compliance dashboards, and health signals.

## 3. Functional Requirements
### 3.1 Customer
- Signup/login (email + optional Google in Phase 2).
- Browse services/products with filtering, quickcost estimator, and case study references.
- Post projects through AI wizard.
- Participate in workspace chat, upload files, and review milestones.
- Pay (escrow) and track milestone statuses.
- Approve/reject deliveries, raise support tickets, download/view invoices.

### 3.2 Freelancer
- Manage profile, certifications, and KYC documents.
- Take skill tests (Phase 2) and display ratings.
- Apply to projects or receive AI recommendations.
- Deliver milestone assets, interact in workspace chat, and update statuses.
- Track earnings, request payouts, view platform fees.

### 3.3 Employee
- View assigned projects and tasks with priorities.
- Manage project tasks, QA reviews/approvals, and escalate issues.
- Communicate with clients/freelancers via workspace.
- Monitor SLA dashboards and respond to automation alerts.

### 3.4 Admin
- Full CRUD capabilities across users, services, products, pricing, and workflows.
- Override payments, ban or suspend malicious actors, and adjust system configurations.
- Monitor logs (audit, AI actions) and enforce compliance.

## 4. Non-Functional Requirements
| Area | Requirement |
| --- | --- |
| Performance | APIs respond in <300ms for typical requests; WebSockets provide sub-second updates. |
| Scalability | Modular services support horizontal scaling (Docker + cloud-native orchestration). |
| Security | Encrypt KYC documents, payments, and sensitive user data; enforce RBAC, MFA guardrails (future). |
| Availability | 99.9% platform uptime with automated failover and service monitoring. |
| Auditability | Full logs across AI runs, project actions, payments, and admin overrides. |
| Compliance | GDPR-ready consent, data export, and retention controls; security certifications documented. |

## 5. Tech Stack (Final)
- **Frontend:** Next.js + TypeScript, Tailwind CSS, WebSockets for chat, responsive UI.
- **Backend:** NestJS (Node.js) with REST APIs and WebSocket Gateway.
- **Database:** PostgreSQL for relational data, Redis for caching and job queues.
- **AI Layer:** Separate microservice, prompt templates + logs, pgvector for embeddings, orchestrated agent logic.
- **Infra:** Dockerized services, CI/CD pipelines (GitHub Actions), Cloud hosting, Cloudflare CDN, logging/monitoring stack.

## 6. Database Schema (Core Tables)
`users`, `profiles`, `services`, `products`, `orders`, `projects`, `milestones`, `tasks`, `proposals`, `assignments`, `messages`, `files`, `payments`, `escrows`, `invoices`, `reviews`, `tickets`, `ai_runs`, `audit_logs`

## 7. API Modules
- `/auth`
- `/users`
- `/services`
- `/products`
- `/projects`
- `/milestones`
- `/tasks`
- `/messages`
- `/payments`
- `/escrow`
- `/freelancers`
- `/employees`
- `/admin`
- `/ai/analyze`

## 8. Automation Rules
1. New project triggers AI analysis and suggests PM assignment.
2. Milestone delay sends alerts to ops/admin and possibly escalations.
3. Low freelancer rating prompts QA audit.
4. Idle customers receive follow-up nudges from support copilot.
5. Escrow stuck beyond thresholds notifies admin.

## 9. MVP Scope (First Release)
- ✅ Included: Auth + roles, Services store, Project posting, Freelancer onboarding, Workspace, Payments (basic), AI requirement analyzer, Admin panel (basic).
- ❌ Excluded (Phase 2): Mobile app, Skill tests, Advanced analytics, Subscription plans.

## 10. Success Metrics (KPIs)
- Conversion rate (lead → booked project).
- Average delivery time from project posting to completion.
- Repeat customer ratio.
- Freelancer utilization percentage and payout throughput.
- Dispute rate (milestone rejections / refunds).
- Revenue per client.

## 11. Risks & Mitigation
| Risk | Mitigation |
| --- | --- |
| Low freelancer quality | Curated onboarding, AI-assisted vetting, continuous QA reviews. |
| Scope creep | AI-generated scope + mandatory PM/human approvals before changes. |
| Payment disputes | Milestone escrow, QA checkpoints, transparent approvals. |
| AI errors | Human override required for payments/actions; AI recommendations logged for auditing. |

## Appendix
- **Storytelling notes:** Each major customer-facing page closes with measurable metrics and CTA (“Book a Call”/“Request Proposal”) plus supporting view options.
- **Governance:** Tie audit logs and AI overrides to `/admin` module for traceability and compliance reviews.

## 12. Approval & Backlog Mapping
Use the module name as the approval anchor, then point to the ticket or board card that confirms scope acceptance. Replace the placeholder IDs below with the actual Jira/Trello/Notion references once they exist.
| Module | Backlog reference (Jira/Trello/Notion) | Approved owner |
| --- | --- | --- |
| M1. Marketing Website | JIRA-FLX-M1 / Notion-Page-Marketing | Marketing Lead |
| M2. Authentication & Roles | JIRA-FLX-M2 / Notion-Security | Product Lead |
| M3. Service & Product Store | JIRA-FLX-M3 / Notion-Commerce | Product & Growth |
| M4. Custom Project System (Core) | JIRA-FLX-M4 / Notion-Projects | Delivery Lead |
| M5. Freelancer Marketplace | JIRA-FLX-M5 / Notion-Marketplace | Talent Ops |
| M6. Project Workspace | JIRA-FLX-M6 / Notion-Workspace | Ops |
| M7. Payments & Escrow | JIRA-FLX-M7 / Notion-Finance | Finance & Legal |
| M8. AI Analyzer System | JIRA-FLX-M8 / Notion-AI | AI Ops |
| M9. Internal Employee System | JIRA-FLX-M9 / Notion-EmployeeTools | Ops & QA |
| M10. Admin Panel | JIRA-FLX-M10 / Notion-Admin | Platform Governance |

## 13. Content & CTA Alignment
Tie the marketing and storytelling sections back to the templates the content team will edit, note the required conversion targets, and list the metrics/CTAs each block needs to reinforce.
| Content section | Template/page reference | Required CTA(s) | Key metric/story signal |
| --- | --- | --- | --- |
| Home Hero (outcome value + AI + trust) | `apps/public/app/page.tsx` | Primary: “Book a Call”; Secondary: “Explore Solutions” | ROI claim, speed gain, trusted-by metrics |
| Services Snapshot & Detailed Story | `apps/public/app/services/page.tsx` | Primary: “Request Proposal”; Secondary: “Download Pricing Guide” | Outcome cards, service-to-solution mapping |
| Solutions Showcase | `apps/public/app/solutions/page.tsx` | Primary: “Book a Call”; Secondary: “View Case Studies” | Persona callouts, success story highlights |
| Case Studies hub | `apps/public/app/case-studies/page.tsx` & `/app/case-studies/[slug]/page.tsx` | “View Case Studies” strong CTA plus “Book a Call” | Problem > Solution > Impact with ROI metrics |
| Insights & Thought Leadership | `apps/public/app/insights/page.tsx` and sub-pages | “Download Research” / “Book a Call” | Latest insights, format filters highlighting value |
| Pricing & Engagement Models | `apps/public/app/pricing/page.tsx` | Primary: “Request Proposal”; Secondary: “Schedule a Consultation” | Pricing philosophy + calculator preview |
| Contact / Book a Call | `apps/public/app/contact/page.tsx` & `/book-call/page.tsx` | “Book a Call” (calendar) + “Download Brief” | Project brief completion rate, engagement tracking |
| About & Trust Story | `apps/public/app/about/page.tsx` | “Join the Team” / “Book a Call” | Leadership, culture, certifications metrics |

## 14. Implementation Dependencies & Owners
Flag dependencies that require coordination (real QA checks, AI safety reviews, compliance sign-off) and assign clear owners to prevent approval bottlenecks.
| Dependency | Affected modules | Owner | Notes |
| --- | --- | --- | --- |
| IRL QA checkpoint & replay | M4, M5, M6, M7 | QA Lead | Tie workspace milestone approvals and escrow releases to QA-signed checklists. |
| AI agent verification | M4, M5, M8, M9 | AI Ops | Ensure all automations (requirement scoping, talent matching, risk detection) are logged and human-reviewed before activation. |
| Compliance & security review | M2, M5, M7, M10 | Compliance Officer | Validate RBAC, escrow controls, KYC storage, and audit logging before deployment. |
| Marketing/story CTA QA | M1 + marketing-focused sections | Marketing Ops | Confirm CTA copy matches approved plan and measurement events fire on home/services/solutions pages. |
| Technology or infrastructure gating | M6, M8, M9 | Platform Engineering | Guarantee Redis/Socket reliability before workspace & AI metrics go live. |

Add the above tables to your backlog notes so that implementation tickets can link directly to this document and automatically reflect the approved modules, CTA expectations, and coordination checkpoints.
