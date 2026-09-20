import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { submitEnquiry } from '../services/api.js';

const SERVICES = [
  'Web Development', 'Web Apps & Portals', 'UI/UX Design', 'Cloud Solutions',
  'Full Stack Solutions', 'E-Commerce Solutions', 'Custom Software',
  'Maintenance & Support', 'Other',
];

const INITIAL = {
  name: '', company: '', email: '', phone: '', whatsapp: '',
  service: '', projectType: '', budget: '', timeline: '', description: '',
  currentUrl: '', preferredContact: 'Email', additionalRequirements: '', website: '',
};

function Field({ label, children, required, error }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-brand-magenta">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-brand-cyan';

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [enquiryId, setEnquiryId] = useState('');
  const [serverError, setServerError] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrors({});
    setServerError('');
    try {
      const res = await submitEnquiry(form);
      setEnquiryId(res.data.enquiryId || '');
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      if (err?.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setServerError(err?.response?.data?.message || 'Something went wrong. Please try again, or reach us on WhatsApp.');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto text-brand-cyan" size={40} />
        <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Enquiry Received</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Thank you for contacting AlphaPlusStack. Your project enquiry has been received
          successfully. Our team will review your requirements and get back to you soon.
        </p>
        {enquiryId && (
          <p className="mt-4 inline-block rounded-full bg-brand-gradient-soft px-4 py-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan">
            Reference ID: {enquiryId}
          </p>
        )}
        <button
          type="button"
          onClick={() => { setForm(INITIAL); setStatus('idle'); }}
          className="btn-secondary mt-6"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      {/* Honeypot field - hidden from real users */}
      <input
        type="text" name="website" value={form.website} onChange={update('website')}
        className="hidden" tabIndex="-1" autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name}>
          <input required className={inputClass} value={form.name} onChange={update('name')} />
        </Field>
        <Field label="Company Name">
          <input className={inputClass} value={form.company} onChange={update('company')} />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input required type="email" className={inputClass} value={form.email} onChange={update('email')} />
        </Field>
        <Field label="Mobile Number" error={errors.phone}>
          <input className={inputClass} value={form.phone} onChange={update('phone')} />
        </Field>
        <Field label="WhatsApp Number">
          <input className={inputClass} value={form.whatsapp} onChange={update('whatsapp')} />
        </Field>
        <Field label="Service Required" required error={errors.service}>
          <select required className={inputClass} value={form.service} onChange={update('service')}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Project Type">
          <input className={inputClass} placeholder="e.g. New build, Redesign" value={form.projectType} onChange={update('projectType')} />
        </Field>
        <Field label="Estimated Budget">
          <input className={inputClass} placeholder="e.g. ₹50,000 - ₹1,00,000" value={form.budget} onChange={update('budget')} />
        </Field>
        <Field label="Expected Timeline">
          <input className={inputClass} placeholder="e.g. 4-6 weeks" value={form.timeline} onChange={update('timeline')} />
        </Field>
        <Field label="Current Website / App URL" error={errors.currentUrl}>
          <input className={inputClass} placeholder="https://" value={form.currentUrl} onChange={update('currentUrl')} />
        </Field>
        <Field label="Preferred Contact Method">
          <select className={inputClass} value={form.preferredContact} onChange={update('preferredContact')}>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </Field>
      </div>

      <Field label="Project Description" required error={errors.description}>
        <textarea required rows={4} className={inputClass} value={form.description} onChange={update('description')} />
      </Field>

      <Field label="Additional Requirements">
        <textarea rows={3} className={inputClass} value={form.additionalRequirements} onChange={update('additionalRequirements')} />
      </Field>

      {serverError && <p className="text-sm text-red-500">{serverError}</p>}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
        {status === 'loading' ? 'Submitting...' : 'Submit Project Enquiry'}
      </button>
    </form>
  );
}
