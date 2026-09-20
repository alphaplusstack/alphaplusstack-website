import { useState } from 'react';
import {
  Globe, LayoutDashboard, PenTool, Cloud, Layers,
  ShoppingCart, Settings2, LifeBuoy, X,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Modern, responsive and high-performance websites designed for businesses, brands and startups.',
    more: 'We build fast, SEO-friendly websites using modern frameworks, with clean code and a design system that scales as your brand grows.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Apps & Portals',
    desc: 'Custom web applications, dashboards, portals and business management systems.',
    more: 'From internal tools to customer-facing portals, we design and build applications around your real workflows, not generic templates.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'User-focused interfaces designed to provide simple, attractive and intuitive experiences.',
    more: 'We research, wireframe and design interfaces that are easy to use on the first try, then refine them with real usability in mind.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Deployment, hosting, cloud configuration and scalable infrastructure solutions.',
    more: 'We configure hosting and cloud infrastructure so your product stays fast, available and ready to scale as traffic grows.',
  },
  {
    icon: Layers,
    title: 'Full Stack Solutions',
    desc: 'Complete frontend, backend, database, API and deployment solutions under one roof.',
    more: 'One team handling the entire stack means fewer handoffs, consistent architecture, and a product that fits together end to end.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'Modern online stores with product management, orders, payments and customer experiences.',
    more: 'We build online stores with clean checkout flows, product management and the integrations your store actually needs.',
  },
  {
    icon: Settings2,
    title: 'Custom Software',
    desc: 'Business-specific software built around unique workflows and requirements.',
    more: 'When off-the-shelf tools fall short, we design and build software shaped around how your business actually operates.',
  },
  {
    icon: LifeBuoy,
    title: 'Maintenance & Support',
    desc: 'Ongoing updates, monitoring, bug fixing, optimization and technical support.',
    more: 'Launch day is the start, not the finish. We keep your product updated, monitored and running smoothly after it ships.',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading mt-3">Services Built for Real Products</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Every engagement is scoped around your goals, not a fixed package.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="card group flex flex-col p-6 transition-shadow hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <service.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
              <button
                type="button"
                onClick={() => setActive(service)}
                className="mt-5 self-start text-sm font-semibold text-brand-blue transition-colors hover:text-brand-purple dark:text-brand-cyan"
              >
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="card relative w-full max-w-md p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X size={18} />
            </button>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <active.icon size={20} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{active.title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{active.more}</p>
            <a href="/contact" className="btn-primary mt-6 w-full">Start a Project</a>
          </div>
        </div>
      )}
    </section>
  );
}
