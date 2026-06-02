import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, Heart, Gem, Sparkles, Star, ArrowRight, ChevronLeft, ChevronRight, Scissors, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const marqueeItems = [
  'Organic Cotton', 'Custom Embroidery', 'Eco Packaging',
  'GOTS Certified', 'Made in India', 'Sensory Friendly',
];

const brandValues = [
  { icon: Leaf, title: 'Pure & Safe', desc: 'GOTS-certified, non-toxic dyes' },
  { icon: Heart, title: 'Made with Love', desc: 'Small batches, fair practices' },
  { icon: Gem, title: 'Built to Last', desc: 'Cherished as heirlooms' },
  { icon: Sparkles, title: 'Made Personal', desc: 'Custom embroidery for every baby' },
];

const testimonials = [
  { quote: 'Orkidoz delivered exactly what we imagined and more. Sleek, modern and perfectly on-brand.', author: 'Ayesha K', role: 'Happy Parent' },
  { quote: 'A smooth, inspiring experience. They listened and brought our ideas to life beautifully.', author: 'Rina S', role: 'Loving Mom' },
  { quote: "The Orkidoz team's innovative approach made our project truly stand out.", author: 'Hira M', role: 'Proud Parent' },
];

export default function Home() {
  const featured = products.slice(0, 10); // Show more items in the carousel
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <Helmet>
        <title>Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable</title>
        <meta name="description" content="GOTS-certified organic cotton baby clothing. Custom embroidered rompers, bomber jackets & gifting essentials for newborns. Starting ₹999. Free shipping over ₹999." />
        <meta property="og:title" content="Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable" />
        <meta property="og:description" content="GOTS-certified organic cotton baby clothing for newborns. Starting ₹999." />
        <link rel="canonical" href="https://orkidoz.com" />
      </Helmet>

      {/* ══ HERO ══ */}
      <section className="min-h-[92vh] flex items-center relative overflow-hidden bg-canvas" aria-label="Hero">
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/compressed_WEB-2-e1780297624496.webp"
            alt="Orkidoz Organic Baby Collection"
            className="w-full h-full object-cover object-[70%_center] md:object-center"
          />
          {/* Editorial overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/90 to-canvas/40 md:from-canvas/95 md:via-canvas/80 md:to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[58%] lg:pr-12 py-12 lg:py-20"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage"
              >
                New Collection · 2025
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-display italic font-normal text-ink mt-4 leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 56px)' }}
              >
                Soft,<br />planet-friendly<br />clothing.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-[420px] text-muted text-[13px] leading-[1.8] mt-6"
              >
                GOTS-certified organic cotton baby essentials.
                Traditionally woven, breathable and safe for
                delicate skin. Thoughtfully personalised.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link to="/shop">
                  <Button variant="primary">Shop Now</Button>
                </Link>
                <Link to="/about-us">
                  <Button variant="outline">Our Story</Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-wrap gap-6 mt-12"
              >
                {['GOTS Certified', 'Free Shipping ₹999+', 'Easy Returns'].map(t => (
                  <span key={t} className="text-[12px] text-ink font-medium flex items-center gap-1.5">
                    <span className="text-sage">✓</span> {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right spacer to let the babies background show clearly on desktop */}
            <div className="hidden lg:block lg:w-[42%] h-[400px]" />
          </div>
        </div>
      </section>

      {/* ══ MARQUEE STRIP ══ */}
      <section className="py-6 border-y border-border overflow-hidden" aria-label="Brand features">
        <div className="flex animate-marquee-fast">
          {[0, 1, 2].map(i => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap mx-8">
              {marqueeItems.map((item, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-8">
                  <span className="font-display italic text-[18px] text-ink">{item}</span>
                  {j < marqueeItems.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                  )}
                </span>
              ))}
              <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══ */}
      <section className="py-24 bg-canvas overflow-hidden" aria-label="Featured products">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Our Highlights
              </p>
              <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
                Thoughtfully crafted<br />for little ones.
              </h2>
            </div>
            {/* Carousel Buttons */}
            <div className="flex items-center gap-3 mt-6 sm:mt-0">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Previous products"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Next products"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Row */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-8 -mx-6 px-6 lg:-mx-8 lg:px-8 xl:-mx-0 xl:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featured.map((product, i) => (
              <div 
                key={product.id} 
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start flex-shrink-0"
              >
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/shop">
              <Button variant="outline">
                View All Products <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ BRAND VALUES ══ */}
      <section className="py-20 bg-surface" aria-label="Brand values">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {brandValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="px-6 lg:px-10 py-8 text-center"
                >
                  <Icon size={28} className="text-sage mx-auto mb-4" />
                  <h3 className="text-[14px] font-medium text-ink">{val.title}</h3>
                  <p className="text-[13px] text-muted mt-2">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ STORY SNAPSHOT ══ */}
      <section className="py-24 bg-canvas" aria-label="Our story">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[45%]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Our Story
              </p>
              <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
                Crafted with passion,<br />designed with purpose.
              </h2>
              <p className="text-[15px] text-muted leading-[1.8] mt-6">
                Orkidoz began with a heartfelt belief — that babies deserve
                the gentlest touch. We craft each piece using GOTS-certified
                organic cotton, traditionally woven and responsibly dyed.
                Every stitch carries intention.
              </p>
              <div className="mt-8">
                <Link to="/about-us">
                  <Button variant="text">Read Our Full Story →</Button>
                </Link>
              </div>
            </motion.div>

            {/* Right image mosaic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-[55%]"
            >
              <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[480px]">
                <div className="bg-surface rounded-2xl overflow-hidden row-span-2">
                  <img
                    src="/story-1.png"
                    alt="Soft and natural organic baby clothes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#E8E0D5] rounded-2xl overflow-hidden">
                  <img
                    src="/story-2.png"
                    alt="Organic cotton kids clothes collection"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#DDD6CA] rounded-2xl overflow-hidden">
                  <img
                    src="/story-3.png"
                    alt="Hand crafted baby embroidery clothing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CRAFTED WITH CARE (EMBROIDERY & VALUES) ══ */}
      <section className="py-24 bg-canvas border-t border-border/40" aria-label="Crafted with care">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            
            {/* Left embroidery image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[35%] aspect-[4/3] lg:aspect-square bg-surface rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src="/embroidery-hand.png"
                alt="Handcrafted custom embroidery Aarav"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Middle story content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-[35%] flex flex-col justify-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Crafted with Care
              </p>
              <h2 className="font-display text-[32px] lg:text-[40px] text-ink mt-3 leading-[1.2]">
                From soft fabric to<br />forever memories.
              </h2>
              <p className="text-[13px] text-muted leading-relaxed mt-6">
                Every Orkidoz piece goes through a journey of care – from selecting the finest organic fabrics to the last stitch. We believe the little things matter. The feel, the finish, the emotion behind every piece.
              </p>
              <div className="mt-8">
                <Link to="/about-us">
                  <Button variant="outline" className="text-[13px]">
                    See How It's Made <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right column value list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[30%] flex flex-col justify-center gap-8 lg:pl-10 lg:border-l lg:border-border/30"
            >
              {[
                {
                  icon: <Leaf className="text-sage" size={20} />,
                  title: "Carefully sourced organic fabrics",
                },
                {
                  icon: <Scissors className="text-sage" size={20} />,
                  title: "Hand-finished with love",
                },
                {
                  icon: <ShieldCheck className="text-sage" size={20} />,
                  title: "Safe for baby, kind for earth",
                },
              ].map((value, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-lt flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <p className="text-[14px] font-medium text-ink leading-snug">
                    {value.title}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Values Row Container */}
          <div className="mt-20 border border-border/50 bg-white rounded-2xl p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Title */}
              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                  Our Values
                </p>
                <h3 className="font-display text-[24px] lg:text-[28px] text-ink mt-2 leading-tight">
                  Guided by what matters most.
                </h3>
              </div>
              
              {/* Right Columns */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    color: "bg-[#4A6741]",
                    title: "Nurture",
                    desc: "We nurture little ones with softness, love and care.",
                  },
                  {
                    color: "bg-[#B8863F]",
                    title: "Discover",
                    desc: "We inspire little minds to discover the world.",
                  },
                  {
                    color: "bg-[#8C6D58]",
                    title: "Grow",
                    desc: "We grow with your child, celebrating every milestone.",
                  },
                ].map((val, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${val.color}`} />
                      <h4 className="text-[13px] font-semibold uppercase tracking-wider text-ink">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-[12px] text-muted leading-relaxed mt-1">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-24 bg-surface" aria-label="Customer testimonials">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
              Customer Stories
            </p>
            <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
              Loved by little ones<br />and their families.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display italic text-[15px] text-ink leading-relaxed mt-4">
                  "{t.quote}"
                </p>
                <p className="text-[13px] font-medium text-ink mt-6">{t.author}</p>
                <p className="text-[12px] text-muted">{t.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
