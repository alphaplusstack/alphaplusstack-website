import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const FILTERS = ['All', 'Websites', 'Web Apps', 'E-Commerce', 'UI/UX', 'Full Stack'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  // No projects are live yet. Rather than invent clients or results, the
  // Admin Portfolio Manager (phase 3) will populate this grid for real —
  // for now every slot is an honest placeholder.
  const placeholders = new Array(6).fill(null);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Our Work</span>
        <h2 className="section-heading mt-3">Portfolio</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Projects will appear here as they launch. Nothing is showcased until it's real.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f
                ? 'bg-brand-gradient text-white shadow-soft'
                : 'border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-cyan dark:hover:text-brand-cyan'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((_, idx) => (
          <div
            key={idx}
            className="card flex aspect-[4/3] flex-col items-center justify-center gap-3 border-dashed p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan">
              <Sparkles size={20} />
            </div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">Coming Soon</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              A new {filter === 'All' ? 'project' : filter.toLowerCase()} is in the works
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
