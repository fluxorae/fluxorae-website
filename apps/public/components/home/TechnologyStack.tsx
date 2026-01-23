const stackSections = [
  {
    title: 'AI + Models',
    items: ['OpenAI + Azure', 'Anthropic Claude 3', 'LangChain', 'Custom LLMs', 'Weights & Biases'],
  },
  {
    title: 'Product & Experience',
    items: ['Next.js', 'Tailwind + shadcn/ui', 'Framer Motion', 'Vercel Edge', 'Storybook'],
  },
  {
    title: 'Data & Analytics',
    items: ['dbt', 'Snowflake & Postgres', 'Looker / Metabase', 'Airbyte/Segment', 'Datadog'],
  },
  {
    title: 'Cloud & MLOps',
    items: ['AWS / GCP / Azure', 'Terraform', 'Kubernetes', 'CI/CD Pipelines', 'MLOps Monitoring'],
  },
]

export default function TechnologyStack() {
  return (
    <section className="section-padding border-y border-white/10 bg-primary-dark/20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Technology stack</p>
          <h2 className="heading-2 text-white">Purpose-built foundations</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We blend enterprise platforms, generative AI, and cloud automation to keep delivery predictable, secure, and connected to your flows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stackSections.map((section) => (
            <div key={section.title} className="glass-panel p-5 rounded-3xl border border-white/10 h-full">
              <h3 className="text-white text-lg font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
