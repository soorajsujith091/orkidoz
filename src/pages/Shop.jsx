import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, categoryMap } from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    const catValue = categoryMap[activeCategory];
    if (!catValue) return products;
    return products.filter(p => p.cat === catValue);
  }, [activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  return (
    <main>
      <Helmet>
        <title>Shop Baby Clothes | Orkidoz – Rompers, Bombers & Jumpsuits</title>
        <meta name="description" content="Organic cotton baby rompers, bomber jackets and jumpsuits. Sizes 0–24M. From ₹999. Free shipping on orders over ₹999." />
        <meta property="og:title" content="Shop Baby Clothes | Orkidoz" />
        <link rel="canonical" href="https://orkidoz.com/shop" />
      </Helmet>

      {/* ══ HEADER ══ */}
      <section className="py-16 bg-surface text-center" aria-label="Shop header">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <p className="text-[12px] text-muted">
            <Link to="/" className="hover:text-sage transition-colors">Home</Link>
            {' / '}
            <span className="text-ink">Shop</span>
          </p>
          <h1 className="font-display text-ink mt-4 leading-[1.1]" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Our Collection
          </h1>
          <p className="text-[15px] text-muted mt-3">
            Thoughtfully crafted. Consciously made.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 text-[14px] rounded-sm transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-ink text-white'
                    : 'border border-border text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT GRID ══ */}
      <section className="py-16 bg-canvas" aria-label="Product grid">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
            <AnimatePresence mode="popLayout">
              {visible.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="inline-flex items-center gap-2 px-8 py-3 text-[13px] font-semibold tracking-[0.16em] uppercase border border-sage text-sage rounded-sm hover:bg-sage hover:text-white transition-all duration-200 cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}

          {/* Result count */}
          <p className="text-center text-[13px] text-muted mt-6">
            Showing {visible.length} of {filtered.length} products
          </p>
        </div>
      </section>
    </main>
  );
}
