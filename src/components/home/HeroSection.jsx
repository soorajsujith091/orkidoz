import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

export default function HeroSection() {
  return (
    <section className="relative bg-canvas overflow-hidden" aria-label="Hero">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center min-h-[70vh] lg:min-h-[85vh] py-10 lg:py-0 gap-10 lg:gap-0">

          {/* Left Content */}
          <motion.div
            variants={stagger} initial="hidden" animate="visible"
            className="w-full lg:w-[50%] flex flex-col justify-center z-10"
          >
            <motion.h1
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="font-display text-ink leading-[1.08]"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Thoughtfully made<br />
              for their most<br />
              <span className="italic font-medium">precious moments.</span>
            </motion.h1>

            <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
              className="max-w-[420px] text-muted text-[14px] sm:text-[15px] leading-[1.8] mt-6"
            >
              Organic babywear, personalized with love and made to be remembered.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link to="/shop"
                className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-7 sm:px-9 py-3.5 rounded-full text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm"
              >
                Shop Collection
              </Link>
              <Link to="/shop"
                className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white px-7 sm:px-9 py-3.5 rounded-full text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
              >
                Personalize Clothing
              </Link>
            </motion.div>

            {/* Mini feature callout */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mt-12 p-3 bg-transparent rounded-xl max-w-[380px]"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/products/romper-1.jpg" alt="Custom romper" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-ink">Customize with their name</p>
                <p className="text-[11px] text-muted mt-0.5">Thoughtful details that make it<br/>totally theirs.</p>
              </div>
              <svg className="w-4 h-4 text-muted ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[50%] flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[560px]">
              
              {/* Organic Blob Mask for Image */}
              <div 
                className="overflow-hidden bg-surface relative"
                style={{ 
                  borderRadius: '52% 48% 39% 61% / 44% 54% 46% 56%',
                  aspectRatio: '1 / 1.15' 
                }}
              >
                <img 
                  src="/home-hero.png" 
                  alt="Orkidoz organic baby collection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Circular Badge - Absolute positioned on top right */}
              <motion.div 
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 sm:top-2 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-xl flex items-center justify-center p-2 z-20"
              >
                <div className="relative w-full h-full rounded-full border border-border/60 flex items-center justify-center">
                  {/* Circular Text (Approximated with standard styling for layout, or we can use SVG text) */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[9.5px] font-semibold tracking-[0.25em] fill-muted uppercase">
                      <textPath href="#circlePath" startOffset="0%">
                        • gots certified • organic cotton
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Center Leaf Icon */}
                  <svg viewBox="0 0 48 48" className="w-10 h-10 text-sage" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M24 8c-4 2-12 8-12 18 0 6 4 10 8 10s4-2 4-4V8z" />
                    <path d="M24 8c4 2 12 8 12 18 0 6-4 10-8 10s-4-2-4-4" />
                    <path d="M24 20v14" />
                    <path d="M24 26l-4-4" />
                    <path d="M24 30l4-4" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
