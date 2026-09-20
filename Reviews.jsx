import { useEffect, useState } from 'react';
import { Star, MessageSquarePlus, X } from 'lucide-react';
import { fetchApprovedReviews, submitReview } from '../services/api.js';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-brand-purple dark:text-brand-cyan">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill={i < rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
      ))}
    </div>
  );
}

function ReviewForm({ onClose, onSubmitted }) {
  const [form, setForm] = useState({ name: '', company: '', project: '', rating: 5, review: '', website: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await submitReview(form);
      setStatus('success');
      onSubmitted?.();
    } catch (err) {
      setStatus('error');
      setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="card relative w-full max-w-md p-7" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Thank you!</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Your review has been submitted and will appear once approved by our team.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Leave a Review</h3>
            {/* Honeypot */}
            <input type="text" name="website" value={form.website} onChange={update('website')} className="hidden" tabIndex="-1" autoComplete="off" />
            <input required placeholder="Your name" value={form.name} onChange={update('name')} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <input placeholder="Company (optional)" value={form.company} onChange={update('company')} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <input placeholder="Project (optional)" value={form.project} onChange={update('project')} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Rating:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" onClick={() => setForm((f) => ({ ...f, rating: n }))}>
                    <Star size={18} className="text-brand-purple dark:text-brand-cyan" fill={n <= form.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
            <textarea required rows={4} placeholder="Share your experience..." value={form.review} onChange={update('review')} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
              {status === 'loading' ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('loading');
  const [showForm, setShowForm] = useState(false);

  const load = () => {
    setStatus('loading');
    fetchApprovedReviews()
      .then((res) => {
        setReviews(res.data.data || []);
        setStatus('done');
      })
      .catch(() => setStatus('error'));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Client Feedback</span>
        <h2 className="section-heading mt-3">Client Reviews &amp; Experiences</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Every review is checked by our team before it appears here.
        </p>
      </div>

      {status === 'loading' && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card h-40 animate-pulse p-6" />
          ))}
        </div>
      )}

      {status === 'error' && (
        <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          Reviews couldn't be loaded right now. Please refresh to try again.
        </p>
      )}

      {status === 'done' && reviews.length === 0 && (
        <div className="card mx-auto mt-12 max-w-lg p-8 text-center">
          <p className="font-semibold text-slate-800 dark:text-white">No reviews published yet</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            AlphaPlusStack is just getting started. Be the first to share your experience once your project wraps up.
          </p>
        </div>
      )}

      {status === 'done' && reviews.length > 0 && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r._id} className="card p-6">
              <Stars rating={r.rating} />
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">&ldquo;{r.review}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{r.name}</p>
              {r.company && <p className="text-xs text-slate-400">{r.company}</p>}
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <button type="button" onClick={() => setShowForm(true)} className="btn-secondary">
          <MessageSquarePlus size={16} /> Leave a Review
        </button>
      </div>

      {showForm && (
        <ReviewForm
          onClose={() => setShowForm(false)}
          onSubmitted={() => setTimeout(() => setShowForm(false), 2000)}
        />
      )}
    </section>
  );
}
