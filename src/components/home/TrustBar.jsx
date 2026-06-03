import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="#4A6741" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6c-6 4-14 12-14 22 0 7 5 12 10 12 3 0 4-2 4-4V6z" />
        <path d="M24 6c6 4 14 12 14 22 0 7-5 12-10 12-3 0-4-2-4-4" />
        <circle cx="24" cy="18" r="1.5" fill="#4A6741" />
      </svg>
    ),
    title: 'Organic & Safe',
    desc: 'Gentle on baby skin, pure on the planet',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="#4A6741" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 36V18a12 12 0 0 1 24 0v18" />
        <path d="M8 36h32" />
        <path d="M20 18v8M28 18v8M24 18v12" />
      </svg>
    ),
    title: 'Made to Last',
    desc: 'Timeless pieces to love and pass down',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="#4A6741" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 34l20-20M34 14c2-2 4-2 5-1s1 3-1 5l-4 4" />
        <path d="M14 34c-1 1-2 3-1 4s3 0 4-1" />
        <path d="M20 28l-4 4" />
        <circle cx="30" cy="18" r="1" fill="#4A6741" />
      </svg>
    ),
    title: 'Personalized',
    desc: "Make it uniquely theirs with custom embroidery",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="#4A6741" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 14c-3-3-6-3-7-1.5S16 17 19 19l5 5 5-5c3-2 3.5-5 2-6.5S27 11 24 14z" />
        <path d="M12 28h24v12H12z" />
        <path d="M24 28v12" />
        <path d="M10 24h28v4H10z" />
      </svg>
    ),
    title: 'Consciously Crafted',
    desc: 'Made with care, wrapped with intention',
  },
];

export default function TrustBar() {
  return (
    <section className="py-10 sm:py-14 bg-canvas border-y border-border/50" aria-label="Trust features">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border/50">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4 md:px-6"
            >
              <div className="flex justify-center mb-3">{f.icon}</div>
              <h3 className="text-[13px] font-semibold text-ink tracking-wide">{f.title}</h3>
              <p className="text-[11px] text-muted leading-relaxed mt-1.5 max-w-[180px] mx-auto">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
