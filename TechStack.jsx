const STACK = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  'Cloud / DevOps': ['AWS', 'Vercel', 'Render', 'Netlify', 'GitHub'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
};

export default function TechStack() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Our Ecosystem</span>
        <h2 className="section-heading mt-3">A Modern Technology Ecosystem</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The technologies and tools AlphaPlusStack works with to design, build and ship
          reliable digital products.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(STACK).map(([category, items]) => (
          <div key={category} className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue dark:text-brand-cyan">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
