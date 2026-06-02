import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, Scissors, Package, ShieldCheck, Heart, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { showToast } from '../components/ui/Toast';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(1);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  const wishlisted = product ? isWishlisted(product.id) : false;
  const discount = product ? product.original - product.price : 0;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.cat === product.cat && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-[32px] text-ink">Product Not Found</h1>
          <Link to="/shop" className="text-sage hover:underline mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-2">
          <p>{product.description}</p>
          <p className="text-[13px]"><strong>Fabric:</strong> 100% GOTS-certified organic cotton</p>
          <p className="text-[13px]"><strong>Weight:</strong> 180 GSM, lightweight and breathable</p>
          <p className="text-[13px]"><strong>Care:</strong> Machine wash cold, tumble dry low. Iron on low heat.</p>
        </div>
      ),
    },
    {
      title: 'Size Guide',
      content: (
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-medium">Size</th>
              <th className="text-left py-2 font-medium">Age</th>
              <th className="text-left py-2 font-medium">Height</th>
              <th className="text-left py-2 font-medium">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2">0-3M</td><td>0-3 months</td><td>56-62 cm</td><td>3-6 kg</td></tr>
            <tr className="border-b border-border/50"><td className="py-2">3-6M</td><td>3-6 months</td><td>62-68 cm</td><td>6-8 kg</td></tr>
            <tr className="border-b border-border/50"><td className="py-2">6-12M</td><td>6-12 months</td><td>68-76 cm</td><td>8-10 kg</td></tr>
            <tr className="border-b border-border/50"><td className="py-2">12-18M</td><td>12-18 months</td><td>76-83 cm</td><td>10-12 kg</td></tr>
            <tr><td className="py-2">18-24M</td><td>18-24 months</td><td>83-90 cm</td><td>12-14 kg</td></tr>
          </tbody>
        </table>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p>Free shipping on orders over ₹999. Standard delivery takes 5-7 business days.</p>
          <p>We accept returns within 7 days of delivery. Items must be unworn with tags attached.</p>
          <p>For exchanges, please contact us at orkidoz@yahoo.com</p>
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[0];
    addItem(product, size, qty);
    showToast(`${product.name} added to cart!`);
  };

  return (
    <main>
      <Helmet>
        <title>{product.name} | Orkidoz – Organic Baby Clothing</title>
        <meta name="description" content={`Buy ${product.name} made from GOTS-certified organic cotton. Soft, breathable, baby-safe. ₹${product.price}. Free shipping over ₹999.`} />
        <meta property="og:title" content={`${product.name} | Orkidoz`} />
        <link rel="canonical" href={`https://orkidoz.com/shop/${product.id}`} />
      </Helmet>

      {/* ══ PRODUCT VIEW ══ */}
      <section className="py-12 lg:py-16 bg-canvas" aria-label="Product details">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Left — Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[52%]"
            >
              <div className="aspect-square bg-surface rounded-2xl overflow-hidden group relative">
                {product.images && product.images[mainImageIdx] ? (
                  <img
                    src={product.images[mainImageIdx]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F4F1EC] to-[#E8E0D5] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center px-8">
                      <Leaf size={40} className="text-sage/30 mx-auto mb-3" />
                      <p className="font-display italic text-[24px] text-muted/30">{product.name}</p>
                      <p className="text-[12px] text-muted/20 mt-1">{product.color}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setMainImageIdx(i)}
                      className={`w-[76px] h-[76px] rounded-lg overflow-hidden bg-surface flex-shrink-0 cursor-pointer transition-all ${
                        mainImageIdx === i
                          ? 'ring-2 ring-sage ring-offset-2'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right — Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-[48%] lg:sticky lg:top-24 self-start"
            >
              {/* Breadcrumb */}
              <nav className="text-[11px] text-muted" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-sage transition-colors">Home</Link>
                {' / '}
                <Link to="/shop" className="hover:text-sage transition-colors">Shop</Link>
                {' / '}
                <span className="text-ink">{product.name}</span>
              </nav>

              <span className="inline-block bg-sage-lt text-sage rounded-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mt-2">
                {product.cat}
              </span>

              <h1 className="font-display text-ink mt-3 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mt-4">
                {discount > 0 && (
                  <del className="text-[14px] text-muted">₹{product.original}</del>
                )}
                <span className="text-[28px] font-semibold text-ink">₹{product.price}</span>
                {discount > 0 && (
                  <Badge variant="save">Save ₹{discount}</Badge>
                )}
              </div>

              <hr className="border-border mt-6" />

              {/* Size */}
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Size</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-[44px] h-[44px] border rounded-sm text-[13px] cursor-pointer transition-all ${
                        selectedSize === size
                          ? 'bg-ink text-white border-ink'
                          : 'border-border text-ink hover:border-ink'
                      }`}
                    >
                      {size.replace('M', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty */}
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Qty</p>
                <div className="flex border border-border rounded-sm w-fit mt-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center border-x border-border text-[14px] font-medium">
                    {qty}
                  </div>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 space-y-3">
                <Button variant="primary" fullWidth onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => toggle(product)}
                >
                  <Heart size={16} className={wishlisted ? 'fill-gold text-gold' : ''} />
                  {wishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
                </Button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { icon: Leaf, text: 'Organic Cotton' },
                  { icon: Scissors, text: 'Hand Embroidered' },
                  { icon: Package, text: 'Gift Ready' },
                  { icon: ShieldCheck, text: 'GOTS Certified' },
                ].map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-surface rounded-sm px-3 py-1.5 text-[12px] text-muted">
                      <Icon size={14} className="text-sage" />
                      {feat.text}
                    </span>
                  );
                })}
              </div>

              {/* Accordion */}
              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ RELATED PRODUCTS ══ */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-surface" aria-label="Related products">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
            <h2 className="font-display text-[36px] text-ink leading-[1.15]">
              You May Also Like
            </h2>
            <div className="flex gap-5 mt-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {relatedProducts.map((p, i) => (
                <div key={p.id} className="min-w-[260px] snap-start flex-shrink-0">
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
