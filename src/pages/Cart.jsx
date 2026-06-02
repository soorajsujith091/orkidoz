import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, Trash2, Minus, Plus, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';

export default function Cart() {
  const { items, removeItem, updateQty, subtotal, cartCount, clearCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = couponApplied ? Math.round(subtotal * 0.2) : 0;
  const total = subtotal - discount + shipping;

  const handleCoupon = () => {
    if (coupon.toUpperCase() === 'BUY2GET20') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setCouponApplied(false);
    }
  };

  return (
    <main>
      <Helmet>
        <title>Your Cart | Orkidoz</title>
      </Helmet>

      {/* Header */}
      <section className="py-12 bg-canvas text-center" aria-label="Cart header">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <h1 className="font-display text-ink" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Your Cart
          </h1>
          <p className="text-[14px] text-muted mt-2">{cartCount} item{cartCount !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <section className="pb-24 bg-canvas" aria-label="Cart items">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          {items.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Leaf size={64} className="text-sage/30 mx-auto" />
              <h2 className="font-display text-[32px] text-ink mt-6">Your cart is empty</h2>
              <p className="text-[15px] text-muted mt-3 max-w-sm mx-auto">
                Discover our collection and find something you love.
              </p>
              <div className="mt-8">
                <Link to="/shop">
                  <Button variant="primary">Browse Shop</Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
              {/* Left — Items */}
              <div className="lg:w-[62%]">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-5 py-5 border-b border-border"
                    >
                      {/* Image */}
                      <div className="w-24 h-24 bg-surface rounded-xl flex-shrink-0 overflow-hidden">
                        {item.images && item.images[0] ? (
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[10px] text-muted/40 text-center px-2">{item.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <Link to={`/shop/${item.id}`} className="text-[15px] font-medium text-ink hover:text-sage transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-[12px] text-muted mt-0.5">Size: {item.size}</p>

                        {/* Qty stepper */}
                        <div className="flex border border-border rounded-sm w-fit mt-3">
                          <button
                            onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                            className="w-9 h-9 flex items-center justify-center text-muted hover:text-ink transition cursor-pointer"
                            aria-label="Decrease"
                          >
                            <Minus size={14} />
                          </button>
                          <div className="w-10 h-9 flex items-center justify-center border-x border-border text-[13px] font-medium">
                            {item.qty}
                          </div>
                          <button
                            onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                            className="w-9 h-9 flex items-center justify-center text-muted hover:text-ink transition cursor-pointer"
                            aria-label="Increase"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Price + Remove */}
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-[17px] font-medium text-ink">₹{item.price * item.qty}</span>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-muted/50 hover:text-red-400 transition-colors mt-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right — Summary */}
              <div className="lg:w-[38%]">
                <div className="bg-surface rounded-2xl p-8 lg:sticky lg:top-24">
                  <h3 className="text-[18px] font-medium text-ink">Order Summary</h3>

                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-[14px]">
                      <span className="text-muted">Subtotal</span>
                      <span className="text-ink">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-muted">Shipping</span>
                      <span className={shipping === 0 ? 'text-sage font-medium' : 'text-ink'}>
                        {shipping === 0 ? 'FREE ✓' : `₹${shipping}`}
                      </span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-[14px]">
                        <span className="text-muted">Discount</span>
                        <span className="text-sage font-medium">-₹{discount}</span>
                      </div>
                    )}
                  </div>

                  <hr className="border-border my-4" />

                  <div className="flex justify-between text-[17px] font-bold mt-4">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>

                  {/* Coupon */}
                  <div className="mt-6">
                    <div className="flex gap-2">
                      <input
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Coupon code"
                        className="flex-1 border border-border rounded-sm px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
                      />
                      <Button variant="ghost" onClick={handleCoupon} className="!px-4 !py-2">
                        Apply
                      </Button>
                    </div>
                    {couponApplied && (
                      <p className="text-[12px] text-sage mt-2">
                        BUY2GET20 applied — 20% off!
                      </p>
                    )}
                    {couponError && (
                      <p className="text-[12px] text-red-400 mt-2">{couponError}</p>
                    )}
                  </div>

                  <Link to="/checkout" className="block mt-6">
                    <Button variant="primary" fullWidth>Checkout →</Button>
                  </Link>
                  <Link to="/shop" className="block mt-2">
                    <Button variant="ghost" fullWidth>
                      <ArrowLeft size={14} /> Continue Shopping
                    </Button>
                  </Link>

                  {/* Trust */}
                  <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-muted">
                    <span>🔒 Secure</span>
                    <span>↩ Easy Returns</span>
                    <span>🌿 Organic</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
