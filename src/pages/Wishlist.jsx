import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { showToast } from '../components/ui/Toast';

export default function Wishlist() {
  const { items, wishlistCount } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item, item.sizes?.[0] || 'One Size', 1);
    showToast(`${item.name} added to cart!`);
  };

  return (
    <main>
      <Helmet>
        <title>My Wishlist | Orkidoz</title>
      </Helmet>

      {/* Header */}
      <section className="py-12 bg-canvas text-center" aria-label="Wishlist header">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
            Wishlist
          </p>
          <h1 className="font-display text-ink mt-3" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Saved for Later
          </h1>
          <p className="text-[14px] text-muted mt-2">
            {wishlistCount} item{wishlistCount !== 1 ? 's' : ''} saved
          </p>
        </div>
      </section>

      <section className="pb-24 bg-canvas" aria-label="Wishlist items">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Heart size={64} className="text-sage/30 mx-auto" />
              <h2 className="font-display text-[32px] text-ink mt-6">Nothing saved yet</h2>
              <p className="text-[15px] text-muted mt-3 max-w-sm mx-auto">
                Browse our collection and save items you love.
              </p>
              <div className="mt-8">
                <Link to="/shop">
                  <Button variant="primary">Browse Shop</Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
              <AnimatePresence>
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={item} index={i} />
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full mt-2 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-sage border border-sage rounded-sm hover:bg-sage hover:text-white transition-all cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
