import { Hero } from '@fluxorae/ui';

export default function Home() {
  return (
    <main>
      <Hero
        title="Fluxorae India"
        subtitle="Leading Digital Transformation in the Indian Ecosystem"
      />
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          <div className="p-8 bg-slate-800 rounded-xl">Web Development</div>
          <div className="p-8 bg-slate-800 rounded-xl">Mobile Apps</div>
          <div className="p-8 bg-slate-800 rounded-xl">Cloud Solutions</div>
        </div>
      </section>
    </main>
  );
}
