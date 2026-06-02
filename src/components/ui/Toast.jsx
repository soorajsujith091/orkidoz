import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

let toastId = 0;
const listeners = new Set();
let toasts = [];

function notify(message, type = 'success') {
  const id = ++toastId;
  const toast = { id, message, type };
  toasts = [...toasts, toast];
  listeners.forEach(fn => fn(toasts));
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(fn => fn(toasts));
  }, 4000);
}

export function showToast(message, type = 'success') {
  notify(message, type);
}

export default function Toast() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    listeners.add(setItems);
    return () => listeners.delete(setItems);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2" aria-live="polite">
      <AnimatePresence>
        {items.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-xl rounded-lg px-5 py-3.5 border border-border min-w-[280px]"
          >
            <CheckCircle size={18} className="text-sage flex-shrink-0" />
            <span className="text-[14px] text-ink flex-1">{t.message}</span>
            <button
              onClick={() => {
                toasts = toasts.filter(x => x.id !== t.id);
                listeners.forEach(fn => fn(toasts));
              }}
              className="text-muted hover:text-ink transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
