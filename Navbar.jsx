import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import logoLight from '../assets/logo-light.jpeg';
import logoDark from '../assets/logo-dark.jpeg';

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Process', href: '/#process' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const options = [
    { key: 'light', icon: Sun, label: 'Light theme' },
    { key: 'dark', icon: Moon, label: 'Dark theme' },
    { key: 'system', icon: Monitor, label: 'System theme' },
  ];
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-slate-200 bg-slate-50 p-1 dark:border-white/10 dark:bg-white/5">
      {options.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          type="button"
          aria-label={label}
          aria-pressed={mode === key}
          onClick={() => setMode(key)}
          className={`rounded-full p-1.5 transition-colors ${
            mode === key
              ? 'bg-brand-gradient text-white shadow-soft'
              : 'text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-cyan'
          }`}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location.hash]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/70 bg-white/85 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-brand-charcoal/85'
          : 'border-transparent bg-white/60 py-4 backdrop-blur-sm dark:bg-brand-charcoal/60'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/#home" className="flex items-center gap-2 shrink-0">
          <img
            src={isDark ? logoDark : logoLight}
            alt="AlphaPlusStack"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
            Get a Free Consultation
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-slate-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-brand-charcoal lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full !py-3"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
