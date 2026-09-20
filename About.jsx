import { Lightbulb, PenTool, Code2, FlaskConical, Rocket, TrendingUp } from 'lucide-react';

const JOURNEY = [
  { icon: Lightbulb, label: 'Idea' },
  { icon: PenTool, label: 'Design' },
  { icon: Code2, label: 'Development' },
  { icon: FlaskConical, label: 'Testing' },
  { icon: Rocket, label: 'Deployment' },
  { icon: TrendingUp, label: 'Growth' },
];

const POINTS = [
  'Client-focused development',
  'Modern technology stack',
  'Scalable architecture',
  'Clean UI/UX',
  'Reliable backend systems',
  'Deployment support',
  'Long-term maintenance',
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">About AlphaPlusStack</span>
          <h2 className="section-heading mt-3">Technology Built Around Your Vision</h2>
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            AlphaPlusStack is a technology-focused startup dedicated to helping businesses and
            entrepreneurs turn ideas into practical, scalable digital solutions. We combine
            thoughtful design, modern development practices and reliable technology to build
            products that are ready for real-world use.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="mb-6 text-sm font-semibold text-slate-500 dark:text-slate-400">The Journey</p>
          <div className="flex flex-wrap items-center gap-y-6">
            {JOURNEY.map(({ icon: Icon, label }, idx) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center gap-2 px-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{label}</span>
                </div>
                {idx < JOURNEY.length - 1 && (
                  <div className="mx-1 hidden h-px w-6 bg-slate-200 dark:bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
