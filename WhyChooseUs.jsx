import { Target, Cpu, Layers3, MonitorSmartphone, MessagesSquare, ShieldCheck } from 'lucide-react';

const REASONS = [
  { icon: Target, title: 'Business-Focused Approach', desc: 'We understand the business objective behind every technology project.' },
  { icon: Cpu, title: 'Modern Development', desc: 'We use modern technologies and development practices.' },
  { icon: Layers3, title: 'Scalable Solutions', desc: 'Solutions are designed with future growth in mind.' },
  { icon: MonitorSmartphone, title: 'Responsive Experiences', desc: 'Every interface is optimized for desktop, tablet and mobile.' },
  { icon: MessagesSquare, title: 'Transparent Communication', desc: 'Clients can clearly understand project progress and requirements.' },
  { icon: ShieldCheck, title: 'Long-Term Support', desc: 'We can continue supporting and improving projects after launch.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why AlphaPlusStack</span>
          <h2 className="section-heading mt-3">Built to Be a Long-Term Technology Partner</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6">
              <Icon className="text-brand-blue dark:text-brand-cyan" size={22} />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
