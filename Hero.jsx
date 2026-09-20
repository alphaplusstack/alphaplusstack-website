import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import logoLight from '../assets/logo-light.jpeg';
import logoDark from '../assets/logo-dark.jpeg';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-brand-gradient-soft" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-20">
        <div className="animate-fade-up">
          <span className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1.5 dark:border-brand-cyan/20 dark:bg-brand-cyan/5">
            <Sparkles size={13} /> Build &middot; Design &middot; Develop &middot; Deploy
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Build. Design.
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">Develop. Deploy.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-slate-700 dark:text-slate-300">
            We turn ideas into powerful digital products that create real business impact.
          </p>
          <p className="mt-4 max-w-xl text-slate-500 dark:text-slate-400">
            From websites and web applications to full-stack platforms and cloud solutions,
            AlphaPlusStack helps businesses build reliable, scalable and modern digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <a href="#services" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Signature element: the logo's orbit motif, extended into a living ring */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex">
          <div className="absolute inset-0 animate-orbit rounded-full opacity-30 [mask-image:radial-gradient(closest-side,transparent_78%,black_80%)] bg-orbit-ring" />
          <div className="absolute inset-8 rounded-full border border-dashed border-brand-blue/20 dark:border-brand-cyan/20" />
          <div className="relative flex h-64 w-64 animate-float items-center justify-center rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-soft-dark">
            <img
              src={isDark ? logoDark : logoLight}
              alt="AlphaPlusStack logo"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
