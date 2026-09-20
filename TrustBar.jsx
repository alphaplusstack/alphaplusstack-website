import { Wrench, Cpu, Layers, Smartphone, ShieldCheck, LifeBuoy } from 'lucide-react';

const ITEMS = [
  { icon: Wrench, label: 'Custom-Built Solutions' },
  { icon: Cpu, label: 'Modern Technology' },
  { icon: Layers, label: 'Scalable Architecture' },
  { icon: Smartphone, label: 'Responsive Design' },
  { icon: ShieldCheck, label: 'Secure Development' },
  { icon: LifeBuoy, label: 'Long-Term Support' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Icon size={18} />
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
