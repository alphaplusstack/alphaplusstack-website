import { Link } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';

// Placeholder route for /client and /admin until authentication, the
// client dashboard and the admin dashboard are built in the next phase.
export default function ComingSoonPortal({ title, description }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan">
        <LockKeyhole size={22} />
      </span>
      <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <Link to="/contact" className="btn-secondary mt-7">Contact Us Instead</Link>
    </section>
  );
}
