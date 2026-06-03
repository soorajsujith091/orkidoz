import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      {/* Main Footer — 3 columns + product image */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row">

          {/* Left 3 columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-border/50">

            {/* Col 1: A Greener Tomorrow */}
            <div className="px-6 sm:px-8 py-10 sm:py-12">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink mb-4">
                A Greener Tomorrow
              </h4>
              <p className="text-[12px] text-muted leading-relaxed">
                We are committed to a sustainable future for our little ones.
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink hover:text-sage transition-colors mt-4"
              >
                Our Initiatives <ArrowRight size={12} />
              </Link>
            </div>

            {/* Col 2: Let's Stay Connected */}
            <div className="px-6 sm:px-8 py-10 sm:py-12">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink mb-4">
                Let's Stay Connected
              </h4>
              <p className="text-[12px] text-muted leading-relaxed mb-4">
                Get early access, new arrivals and thoughtful reads.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-border rounded-sm px-3 py-2 text-[12px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-sage transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-sage hover:bg-sage-dark text-white px-3 py-2 rounded-sm transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
              {subscribed && (
                <p className="text-[12px] text-sage mt-2 animate-pulse">
                  ✓ Subscribed!
                </p>
              )}

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-muted hover:text-ink hover:border-ink transition-colors" aria-label="Facebook">
                  <FacebookIcon size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-muted hover:text-ink hover:border-ink transition-colors" aria-label="Instagram">
                  <InstagramIcon size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-muted hover:text-ink hover:border-ink transition-colors" aria-label="Pinterest">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M9.5 19c.5 1 1.5 2 3 2s2.5-1 3-2"/><path d="M11 17l-1 4"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-muted hover:text-ink hover:border-ink transition-colors" aria-label="YouTube">
                  <YoutubeIcon size={14} />
                </a>
              </div>
            </div>

            {/* Col 3: Made for Moments */}
            <div className="px-6 sm:px-8 py-10 sm:py-12">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink mb-4">
                Made for Moments That Matter
              </h4>
              <p className="text-[12px] text-muted leading-relaxed">
                Thoughtful pieces for the moments you'll never forget.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink hover:text-sage transition-colors mt-4"
              >
                Shop Collections <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right — Product Image */}
          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <img
              src="/footer-product.png"
              alt="Orkidoz organic cotton gift bag"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-muted">
            © 2026 Orkidoz. All Rights Reserved.
          </p>
          <p className="text-[11px] text-muted">
            Made with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
