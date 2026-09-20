import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What services does AlphaPlusStack provide?',
    a: 'AlphaPlusStack provides web development, web applications, UI/UX design, full-stack development, cloud solutions, e-commerce development and ongoing technical support.',
  },
  {
    q: 'Can you build a custom application?',
    a: 'Yes. Projects can be designed and developed according to specific business requirements.',
  },
  {
    q: 'Do you work with clients outside Prayagraj?',
    a: 'Yes. AlphaPlusStack can work with clients remotely across India and internationally.',
  },
  {
    q: 'How do I start a project?',
    a: 'Submit the project enquiry form or contact the team through email, phone or WhatsApp.',
  },
  {
    q: 'Do you provide maintenance after launch?',
    a: 'Yes. Maintenance and ongoing technical support can be provided based on project requirements.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-slate-800 dark:text-white">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-blue transition-transform dark:text-brand-cyan ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
