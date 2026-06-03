import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

export default function BestsellersSection() {
  // Select 4 representative best sellers
  const bestSellers = products.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-canvas" aria-label="Bestsellers">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              Shop Favorites
            </p>
            <h2
              className="font-display text-ink mt-3 leading-[1.2] text-[26px] sm:text-[36px]"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink hover:text-sage transition-colors border-b border-ink/20 pb-1"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
