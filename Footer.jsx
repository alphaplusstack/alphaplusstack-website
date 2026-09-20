import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Linkedin, Github, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import logoLight from '../assets/logo-light.jpeg';
import logoDark from '../assets/logo-dark.jpeg';

const WHATSAPP_MESSAGE = encodeURIComponent('Hello AlphaPlusStack, I would like to discuss a project.');

// Social links are intentionally left as inert placeholders until AlphaPlusStack
// has real profiles to link to (Admin Settings will make these editable).
const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'X / Twitter' },
];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="border-t border-slate-100 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={isDark ? logoDark : logoLight} alt="AlphaPlusStack" className="h-10 w-auto object-contain" />
            <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              Your Vision + Our Stack = Real Impact
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="/#home" className="hover:text-brand-blue dark:hover:text-brand-cyan">Home</a></li>
              <li><a href="/#about" className="hover:text-brand-blue dark:hover:text-brand-cyan">About</a></li>
              <li><a href="/#services" className="hover:text-brand-blue dark:hover:text-brand-cyan">Services</a></li>
              <li><a href="/#portfolio" className="hover:text-brand-blue dark:hover:text-brand-cyan">Portfolio</a></li>
              <li><Link to="/contact" className="hover:text-brand-blue dark:hover:text-brand-cyan">Contact</Link></li>
              <li><Link to="/client" className="hover:text-brand-blue dark:hover:text-brand-cyan">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>Web Development</li>
              <li>Web Apps &amp; Portals</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
              <li>Full Stack Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>Prayagraj, Uttar Pradesh, India</li>
              <li>
                <a href="mailto:prajapatirahul277303@gmail.com" className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan">
                  <Mail size={14} /> prajapatirahul277303@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919336153244" className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan">
                  <Phone size={14} /> +91 93361 53244
                </a>
              </li>
              <li>
                <a href={`https://wa.me/919336153244?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  aria-label={`${label} (coming soon)`}
                  title={`${label} — coming soon`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 dark:border-white/10 dark:text-slate-500"
                >
                  <Icon size={14} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row">
          <p>&copy; 2026 AlphaPlusStack. All rights reserved.</p>
          <p>Built with technology, creativity and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
