import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const collections = [
  { name: 'First Days', image: '/collection-1.png' },
  { name: 'Dress & Snuggle', image: '/collection-2.png' },
  { name: 'Tiny Celebrations', image: '/products/romper-3.jpg' },
  { name: 'Everyday Essentials', image: '/products/romper-5.jpg' },
  { name: 'Precious Gifts', image: '/products/bomber-1.jpg' },
];

export default function CollectionsSection() {
  return (
    <section className="py-14 sm:py-20 bg-canvas" aria-label="Curated Collections">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Curated Collections
          </p>
          <h2
            className="font-display text-ink mt-3 leading-[1.15]"
            style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
          >
            For every moment<br />of their journey.
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage hover:text-sage-dark transition-colors mt-5"
          >
            Explore All Collections <ArrowRight size={14} />
          </Link>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link to="/shop" className="group block">
                <div className="aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-surface">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-[12px] sm:text-[13px] font-medium text-ink mt-3 group-hover:text-sage transition-colors">
                  {col.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
