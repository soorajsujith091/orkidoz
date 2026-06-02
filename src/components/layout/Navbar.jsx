import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, User, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { useScrollY } from '../../hooks/useScrollY';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact-us', label: 'Contact Us' },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const scrolled = scrollY > 60;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-white/95 backdrop-blur-sm border-b border-border'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="Orkidoz Home">
            <img
              src="/002-png-SmallO-e1759221054651.png"
              alt="Orkidoz"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[14px] font-sans transition-colors duration-200 ${
                    isActive
                      ? 'text-sage underline underline-offset-4 decoration-1'
                      : 'text-ink hover:text-sage'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-ink hover:text-sage transition-colors cursor-pointer" aria-label="Search">
              <Search size={20} />
            </button>

            <Link to="/wishlist" className="p-2 text-ink hover:text-sage transition-colors relative" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sage text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button className="p-2 text-ink hover:text-sage transition-colors cursor-pointer hidden sm:block" aria-label="Account">
              <User size={20} />
            </button>

            <Link to="/cart" className="p-2 text-ink hover:text-sage transition-colors relative" aria-label="Shopping cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sage text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-ink hover:text-sage transition-colors lg:hidden cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-sm z-50 lg:hidden"
              style={{ backgroundColor: 'rgba(28, 25, 23, 0.4)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 shadow-2xl lg:hidden flex flex-col"
              style={{ backgroundColor: '#FAFAF8' }}
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center">
                  <img
                    src="/002-png-SmallO-e1759221054651.png"
                    alt="Orkidoz"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-muted hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-1 p-6 pt-8">
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-[20px] font-display py-2 transition-colors duration-200 ${
                        isActive ? 'text-sage' : 'text-ink hover:text-sage'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="p-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="Facebook">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="Instagram">
                    <InstagramIcon size={20} />
                  </a>
                  <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="YouTube">
                    <YoutubeIcon size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
