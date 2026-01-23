'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const solutionFamilies = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI',
    objective: 'Build intelligent decision systems for leaders who need visibility, compliance, and guardrails.',
    persona: 'COO/Strategy teams, AI councils',
    stack: ['LangChain', 'Snowflake', 'dbt', 'Looker', 'GitHub Actions'],
    success: '140+ scenario plays with automated decision nodes and ROI tracking for finance + ops.',
    accelerators: ['Decision intelligence playbook', 'Forecasting templates'],
    link: '/case-studies',
  },
  {
    id: 'ai-dashboards',
    title: 'AI-Powered Dashboards',
    objective: 'Surface real-time insights, anomalies, and actions in a single pane for execs & operators.',
    persona: 'Revenue ops, analytics leaders',
    stack: ['Power BI', 'Metabase', 'OpenAI', 'Airflow', 'Kafka'],
    success: '30% faster reaction time with alerting + GPT explanations for anomalies.',
    accelerators: ['Dashboard modules', 'Alerting & playbook library'],
    link: '/insights#ai-dashboards',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    objective: 'Modernize monoliths with AI augmentation, composable APIs, and data contracts.',
    persona: 'CTOs, engineering leaders',
    stack: ['Next.js', 'Node.js', 'Terraform', 'Postgres'],
    success: 'Lift-and-shift + AI augmentation reduced outages by 47% while enabling new revenue streams.',
    accelerators: ['Legacy migration playbook', 'API integration templates'],
    link: '/insights#how-to',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    objective: 'Deliver Custom LLMs, ChatGPT-style assistants, and document intelligence with guardrails.',
    persona: 'Product leaders, knowledge teams',
    stack: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Vercel AI'],
    success: 'Knowledge assistant handled 38% of support requests with 99% accuracy.',
    accelerators: ['LLM safety checklist', 'Document intelligence kit'],
    link: '/insights#generative-ai',
  },
  {
    id: 'knowledge-assistants',
    title: 'Knowledge Assistants',
    objective: 'Create conversational AI, chatbots, voice assistants, and multilingual support for teams.',
    persona: 'Customer support, sales enablement',
    stack: ['Dialogflow', 'Rasa', 'AWS Polly', 'Pinecone'],
    success: 'Self-serve knowledge base increased deflection by 33% and shortened ramp time for new reps.',
    accelerators: ['Conversational flows', 'Multilingual assets'],
    link: '/case-studies',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive & Prescriptive Analytics',
    objective: 'Forecast demand, analyze risk, and detect churn with trusted models + action plans.',
    persona: 'Revenue, risk, and growth teams',
    stack: ['Python', 'Prophet', 'Looker', 'Snowflake', 'Prefect'],
    success: 'Demand forecasting models cut inventory carrying costs by 18%.',
    accelerators: ['Forecast templates', 'Risk decision cards'],
    link: '/insights#predictive-analytics',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    objective: 'Deploy image recognition, video analytics, and OCR flows for automation.',
    persona: 'Quality, operations, compliance officers',
    stack: ['PyTorch', 'YOLO', 'OpenCV', 'Azure Cognitive Services'],
    success: 'Automated visual QA reduced manual audits by 62%.',
    accelerators: ['Vision labeling kits', 'OCR & document workflows'],
    link: '/insights#technical',
  },
  {
    id: 'nlp-solutions',
    title: 'NLP Solutions',
    objective: 'Analyze sentiment, classify text, and build search & retrieval systems with personalization.',
    persona: 'Marketing, CX, product analytics',
    stack: ['spaCy', 'Elastic', 'OpenAI', 'Custom embeddings'],
    success: 'Sentiment analysis surfaced churn signals enabling proactive outreach.',
    accelerators: ['Search + retrieval stacks', 'Personalization templates'],
    link: '/insights#nlp',
  },
  {
    id: 'recommendation-engines',
    title: 'Recommendation Engines',
    objective: 'Personalize journeys, upsell/cross-sell, and rank signals across touchpoints.',
    persona: 'Product, growth, and revenue leaders',
    stack: ['Vertex AI', 'Redis', 'Amplitude', 'Looker'],
    success: 'Recommendation scoring lifted ARPU by 12%.',
    accelerators: ['Recommendation library', 'Experimentation kit'],
    link: '/case-studies',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    objective: 'Automate approvals, AI-driven operations, and smart workflows.',
    persona: 'Operations, finance, and HR leaders',
    stack: ['Zapier', 'n8n', 'TypeScript', 'Human-in-loop rules'],
    success: 'Workflow automation slashed approval time by 35%.',
    accelerators: ['Smart approval templates', 'Agent orchestration playbook'],
    link: '/insights#automation',
  },
]

export default function SolutionsShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-2">Solutions</p>
          <h2 className="heading-2 text-white">Outcome-focused solution families</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Each family pairs business objectives with personas, stacks, success stories, and accelerators so you can pick the right play.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {solutionFamilies.map((solution, index) => (
            <motion.article
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-accent">Solution</span>
              </div>
              <p className="text-gray-300 mb-3">{solution.objective}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="text-white font-semibold">Target persona:</span> {solution.persona}
              </p>
              <div className="text-sm text-gray-200 mb-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-1">Success story</p>
                <p>{solution.success}</p>
              </div>
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Stack highlights</p>
                <div className="flex flex-wrap gap-2">
                  {solution.stack.map((item) => (
                    <span key={`${solution.id}-${item}`} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Accelerators</p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-4">
                  {solution.accelerators.map((accelerator) => (
                    <li key={`${solution.id}-${accelerator}`}>{accelerator}</li>
                  ))}
                </ul>
              </div>
              <Link href={solution.link} className="mt-auto text-sm font-semibold text-accent inline-flex items-center gap-1">
                Explore approach
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
