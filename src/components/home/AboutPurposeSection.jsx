import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPurposeSection() {
  return (
    <section className="py-14 sm:py-20 bg-canvas" aria-label="Our Purpose">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Image */}
          <div className="w-full lg:w-[50%]">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] sm:aspect-[1.3] bg-surface">
              <img
                src="/about-purpose.png"
                alt="Mother and baby cuddling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%] space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              Our Purpose
            </p>
            
            <h2
              className="font-display text-ink leading-[1.15] text-[28px] sm:text-[40px]"
            >
              Created with purpose.<br />
              <span className="italic">Made with conscious love.</span>
            </h2>
            
            <p className="text-muted text-[13px] sm:text-[14px] leading-[1.8] max-w-[465px]">
              Orkidoz was founded with a simple belief – that the things closest to our babies should be the purest, the softest, and the most meaningful. We source GOTS-certified organic cotton and partner with ethical makers to craft garments that are gentle on your baby and the earth.
            </p>

            <div className="pt-2">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 text-sage text-[12px] font-semibold uppercase tracking-[0.12em] hover:text-sage-dark transition-colors"
              >
                Learn Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
