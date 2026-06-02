import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
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
    <footer className="bg-ink" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/002-png-SmallO-e1759221054651.png"
                alt="Orkidoz"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[13px] text-[#A8A29E] leading-relaxed">
              Organic baby essentials crafted with love and consciousness.
            </p>

            <div className="mt-6 space-y-2.5">
              <p className="text-[13px] text-[#A8A29E]">📍 India · UK · UAE</p>
              <p className="text-[13px] text-[#A8A29E]">✉ orkidoz@yahoo.com</p>
              <p className="text-[13px] text-[#A8A29E]">📞 +91 8098 01 8002</p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-[#78716C] hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-[#78716C] hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-[#78716C] hover:text-white transition-colors" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Explore links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about-us', label: 'About Us' },
                { to: '/shop', label: 'Shop' },
                { to: '/contact-us', label: 'Contact Us' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[14px] text-[#A8A29E] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage mb-6">
              Policies
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Policy links">
              {[
                'Privacy Policy',
                'Refund & Returns',
                'Shipping & Delivery',
                'Terms & Conditions',
              ].map(label => (
                <a
                  key={label}
                  href="#"
                  className="text-[14px] text-[#A8A29E] hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage mb-6">
              Stay in the Loop
            </h4>
            <p className="text-[13px] text-[#A8A29E] leading-relaxed mb-4">
              Early access, new arrivals and thoughtful reads.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-[#3C3C3C] rounded-sm px-4 py-2.5 text-[13px] text-white placeholder:text-[#57534E] focus:outline-none focus:border-sage transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-sage hover:bg-sage-dark text-white px-3 py-2.5 rounded-sm transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            {subscribed && (
              <p className="text-[13px] text-sage mt-2 animate-pulse">
                ✓ Subscribed!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2C2C2C]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#57534E]">
            © 2026 Orkidoz. All Rights Reserved.
          </p>
          <p className="text-[12px] text-[#57534E]">
            Made with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
