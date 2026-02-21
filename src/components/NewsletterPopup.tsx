'use client';
import { useState, useEffect, useRef } from 'react';

const POPUP_KEY = 'stp_popup_shown';
const SHOW_DELAY_MS = 30000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) return;

    timer.current = setTimeout(() => setVisible(true), SHOW_DELAY_MS);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5 && !sessionStorage.getItem(POPUP_KEY)) {
        if (timer.current) clearTimeout(timer.current);
        setVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(POPUP_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="newsletter-popup-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-fade-in text-center">
        <button onClick={dismiss} aria-label="Close" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none">✕</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mx-auto mb-3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        <h2 id="newsletter-popup-title" className="font-display text-xl font-bold text-gray-900 mb-2">Get Weekly Tool Reviews</h2>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          SaaS comparisons, deal alerts, and productivity tips delivered weekly.
          <strong className="block text-gray-600 mt-1">Free, every Thursday.</strong>
        </p>
        <div className="text-sm text-blue-500 font-medium mb-3">Coming soon</div>
        <button onClick={dismiss} className="text-[11px] text-gray-400 mt-3 hover:text-gray-600 transition-colors underline block mx-auto">
          No thanks
        </button>
      </div>
    </div>
  );
}
