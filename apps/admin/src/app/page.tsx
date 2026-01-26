import { Hero } from '@fluxorae/ui';

export default function AdminDashboard() {
  return (
    <main className="bg-slate-950 min-h-screen text-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Fluxorae Admin Control
        </h1>
        <p className="text-slate-400 mt-2">Manage your digital ecosystem across domains.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h3 className="text-slate-500 text-sm uppercase font-semibold">Total Leads</h3>
          <p className="text-3xl font-bold mt-2">1,284</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h3 className="text-slate-500 text-sm uppercase font-semibold">Domain: .in</h3>
          <p className="text-3xl font-bold mt-2 text-emerald-400">Active</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h3 className="text-slate-500 text-sm uppercase font-semibold">Domain: .com</h3>
          <p className="text-3xl font-bold mt-2 text-blue-400">Active</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h3 className="text-slate-500 text-sm uppercase font-semibold">System Health</h3>
          <p className="text-3xl font-bold mt-2 text-purple-400">99.9%</p>
        </div>
      </div>

      <section className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
              <div>
                <p className="font-semibold">New lead captured on fluxorae.in</p>
                <p className="text-sm text-slate-500">2 minutes ago</p>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
