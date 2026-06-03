import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GiftGiftingSection() {
  return (
    <section className="py-14 sm:py-20 bg-surface border-y border-border/50" aria-label="Gifting">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              The Perfect Gift
            </p>
            
            <h2
              className="font-display text-ink leading-[1.15] text-[28px] sm:text-[40px]"
            >
              Gifts that feel personal.<br />
              <span className="italic">Memories that last forever.</span>
            </h2>
            
            <p className="text-muted text-[13px] sm:text-[14px] leading-[1.8] max-w-[420px]">
              Our heirloom-quality gift sets are lovingly curated and beautifully packaged in our signature keepsake boxes, making them the ultimate way to welcome a little one.
            </p>

            {/* List of features */}
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-center gap-3 text-[13px] font-medium text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Signature keepsake gift box included
              </li>
              <li className="flex items-center gap-3 text-[13px] font-medium text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Handwritten personalized gift card
              </li>
              <li className="flex items-center gap-3 text-[13px] font-medium text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                GOTS-certified premium organic elements
              </li>
            </ul>

            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
              >
                Explore Gifting <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%]">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] sm:aspect-[1.4] bg-white border border-border/40">
              <img
                src="/gift-box.png"
                alt="Orkidoz organic baby gift box set"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
