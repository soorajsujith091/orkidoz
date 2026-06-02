import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-4 text-left text-[15px] font-medium text-ink hover:text-sage transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50"
            aria-expanded={openIndex === i}
          >
            <span>{item.title}</span>
            <span className={`transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
              <Plus size={18} className="text-muted" />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-[14px] text-muted leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
