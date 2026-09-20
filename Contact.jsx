import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm.jsx';
import FAQ from '../components/FAQ.jsx';

const WHATSAPP_MESSAGE = encodeURIComponent('Hello AlphaPlusStack, I would like to discuss a project.');

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="section-heading mt-3">Start Your Project</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            Share your requirements below, or reach us directly — whichever is easiest for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white">Direct Contact</h3>
              <div className="mt-5 space-y-4">
                <a href="tel:+919336153244" className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan"><Phone size={16} /></span>
                  Call Us
                </a>
                <a href={`https://wa.me/919336153244?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan"><MessageCircle size={16} /></span>
                  Chat on WhatsApp
                </a>
                <a href="mailto:prajapatirahul277303@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-blue dark:text-brand-cyan"><Mail size={16} /></span>
                  Send Email
                </a>
              </div>
            </div>

            <div className="card overflow-hidden p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <MapPin size={16} /> Location
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Prayagraj, Uttar Pradesh, India</p>
              <p className="mt-1 text-xs font-medium text-brand-blue dark:text-brand-cyan">Serving Clients Across India &amp; Beyond</p>
              <div className="mt-4 flex h-36 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-400 dark:border-white/10 dark:bg-white/5">
                Map view available once an embed key is configured
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
