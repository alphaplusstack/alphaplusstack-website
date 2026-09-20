const STEPS = [
  { num: '01', title: 'Discover', desc: "Understand the client's idea, business requirements and goals." },
  { num: '02', title: 'Plan', desc: 'Define features, architecture, technology and project roadmap.' },
  { num: '03', title: 'Design', desc: 'Create a clean, intuitive and conversion-focused UI/UX.' },
  { num: '04', title: 'Develop', desc: 'Build the frontend, backend, APIs and database.' },
  { num: '05', title: 'Test', desc: 'Perform functional, responsive, performance and security checks.' },
  { num: '06', title: 'Deploy', desc: 'Deploy the solution to a production environment.' },
  { num: '07', title: 'Support', desc: 'Provide maintenance, improvements and technical support.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-heading mt-3">A Clear, Seven-Step Process</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Every project follows the same disciplined path from first conversation to
            long-term support.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-purple opacity-30 lg:block" />
          <div className="grid gap-6 lg:grid-cols-2">
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                className={`card relative p-6 ${idx % 2 === 1 ? 'lg:mt-14' : ''}`}
              >
                <span className="bg-brand-gradient bg-clip-text text-3xl font-extrabold text-transparent">
                  {step.num}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
