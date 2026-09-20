import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

// AI-ready architecture: this widget currently shows a static "coming soon"
// message. Once a backend endpoint (e.g. POST /api/chat) is wired up to an
// AI provider using AI_API_KEY, this component only needs its submit
// handler swapped out — the UI shell stays the same.
export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open AlphaPlus AI assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-brand-charcoal-soft">
          <div className="flex items-center gap-3 bg-brand-gradient px-4 py-3.5 text-white">
            <Bot size={18} />
            <div>
              <p className="text-sm font-semibold leading-tight">AlphaPlus AI</p>
              <p className="text-[11px] text-white/80">AI Assistant Coming Soon</p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <p className="rounded-xl bg-slate-100 px-3.5 py-2.5 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300">
              Hi! I'm not quite live yet — soon I'll help you explore services, get pricing
              guidance and start a project. For now, our team is happy to help directly.
            </p>
            <a href="/contact" className="btn-primary block w-full text-center !py-2.5 text-xs">
              Talk to the AlphaPlusStack Team
            </a>
          </div>
          <div className="flex items-center gap-2 border-t border-slate-100 p-3 dark:border-white/10">
            <input
              disabled
              placeholder="Chat will be available soon..."
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-400 dark:border-white/10 dark:bg-white/5"
            />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-white/5">
              <Send size={14} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
