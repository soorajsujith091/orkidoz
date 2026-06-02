import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../contexts/WishlistContext';
import Badge from './Badge';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProductCard({ product, index = 0 }) {
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const discount = product.original - product.price;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-white rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/shop/${product.id}`} className="block">
        <div className="aspect-square bg-surface overflow-hidden relative">
          {/* Product image with zoom on hover */}
          {product.images && product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-surface to-border/30 flex items-center justify-center">
              <span className="font-display text-[22px] text-muted/40 italic text-center px-4 select-none">
                {product.name}
              </span>
            </div>
          )}

          {/* SALE badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3">
              <Badge variant="sale">SALE</Badge>
            </div>
          )}
        </div>
      </Link>

      {/* Wishlist heart */}
      <button
        onClick={(e) => { e.stopPropagation(); toggle(product); }}
        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
        aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart
          size={16}
          className={wishlisted ? 'fill-gold text-gold' : 'text-muted'}
        />
      </button>

      {/* Content */}
      <div className="p-4 relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
          {product.cat}
        </p>
        <h3 className="text-[15px] font-medium text-ink mt-1 line-clamp-2 leading-snug">
          <Link to={`/shop/${product.id}`} className="hover:text-sage transition-colors">
            {product.name}
          </Link>
        </h3>

        {/* Price row */}
        <div className="flex items-center flex-wrap gap-x-2 mt-2">
          {discount > 0 && (
            <span className="text-[13px] text-muted line-through">₹{product.original}</span>
          )}
          <span className="text-[17px] font-semibold text-ink">₹{product.price}</span>
          {discount > 0 && (
            <Badge variant="save" className="ml-auto">Save ₹{discount}</Badge>
          )}
        </div>

        <p className="text-[12px] text-muted mt-2 group-hover:text-sage transition-colors duration-300">
          Select Options
        </p>
      </div>
    </motion.div>
  );
}
