import { Hero } from '@fluxorae/ui';

export default function Home() {
  return (
    <main>
      <Hero
        title="Fluxorae Global"
        subtitle="Empowering Enterprises Worldwide with Modern Technology"
      />
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Global Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          <div className="p-8 bg-slate-800 rounded-xl">Enterprise AI</div>
          <div className="p-8 bg-slate-800 rounded-xl">SaaS Platforms</div>
          <div className="p-8 bg-slate-800 rounded-xl">Digital Strategy</div>
        </div>
      </section>
    </main>
  );
}
