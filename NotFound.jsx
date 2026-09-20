import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="bg-brand-gradient bg-clip-text text-6xl font-extrabold text-transparent">404</span>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-7">
        <Home size={16} /> Return Home
      </Link>
    </section>
  );
}
