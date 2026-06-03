import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, Heart, Gem, Sparkles, Scissors, ShieldCheck, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══ CUSTOM LINE-ART SVG ICONS ═══ */
const LeafIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#A88B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4 text-[#A88B6E]">
    <path d="M46 16c-3 1-9.5 5.5-14.5 11.5-6.5 8-11.5 18-12 21-.5 3 .5 4 1.5 4 3 0 12.5-4.5 20-11.5 7.5-7 11.5-14.5 12-19.5.5-5-2-9-7-10z" />
    <path d="M19.5 52.5c2-2.5 5-7.5 8-12" />
    <path d="M31.5 40.5c4-4 8.5-9 12.5-14" />
    <path d="M26 44.5c-2.5-1-4-2.5-5-4" />
    <path d="M32 37.5c-2.5-1.5-4-3.5-5-5.5" />
    <path d="M36 32.5c2.5-1 4-2.5 5-4" />
    <path d="M41 26.5c2.5-1.5 4-3.5 5-5.5" />
  </svg>
);

const HandHeartIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#A88B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4 text-[#A88B6E]">
    <path d="M32 24c-2.5-2.8-5-3-6.5-1.5-1.5 1.5-1 4 1 5.8l5.5 5.2 5.5-5.2c2-1.8 2.5-4.3 1-5.8s-4-1.3-6.5 1.5z" />
    <path d="M18 36.5c2.5-1 5-.5 7.5.5 2.5 1 4 2.5 6 2.5s4-1 6-2c2-1 4-1 5.5 0c1.5 1 2 2.5 1.5 3.5s-2.5 1.5-4 1.5H20.5c-3 0-5.5-1.5-8-3l-4.5-3" />
    <path d="M19.5 37.5c-1 1-1.8 2.2-2 3.5.5 1.5 1.5 2.5 2.5 3" />
  </svg>
);

const NeedleIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#A88B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4 text-[#A88B6E]">
    <path d="M48 16L18 46" />
    <path d="M45.5 16.5l2 2" />
    <path d="M46.5 17.5c3-3 6.5-3.5 7.5-2s-1 4.5-3.5 7-6 4-7.5 7c-1.5 3-.5 5 1.5 5s4.5-2 6-5" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#A88B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4 text-[#A88B6E]">
    <path d="M19 28h26v22H19z" />
    <path d="M17 24h30v4H17z" />
    <path d="M32 24v26" />
    <path d="M19 39h26" />
    <path d="M32 24c-2.5-4.5-7.5-4.5-7.5-1 0 3 5 2.5 7.5 1" />
    <path d="M32 24c2.5-4.5 7.5-4.5 7.5-1 0 3-5 2.5-7.5 1" />
  </svg>
);

/* ═══ PROMISE VALUES DATA ═══ */
const promiseValues = [
  {
    icon: <LeafIcon />,
    title: 'Pure & Safe',
    desc: 'We use GOTS-certified organic cotton and safe, non-toxic dyes that are gentle on delicate skin.',
  },
  {
    icon: <HandHeartIcon />,
    title: 'Ethically Made',
    desc: 'Our pieces are crafted in small batches with care, ensuring fair practices and happy hands.',
  },
  {
    icon: <NeedleIcon />,
    title: 'Made to Last',
    desc: 'Designed to be cherished, worn and passed down as beautiful heirlooms.',
  },
  {
    icon: <GiftIcon />,
    title: 'Made Personal',
    desc: 'Because every baby is unique. We add the personal touch that makes each piece truly theirs.',
  },
];

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable</title>
        <meta name="description" content="GOTS-certified organic cotton baby clothing. Custom embroidered rompers, bomber jackets & gifting essentials for newborns. Starting ₹999. Free shipping over ₹999." />
        <meta property="og:title" content="Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable" />
        <meta property="og:description" content="GOTS-certified organic cotton baby clothing for newborns. Starting ₹999." />
        <link rel="canonical" href="https://orkidoz.com" />
      </Helmet>

      {/* ══════════════════════════════════════════════════════
          SECTION 1: HERO — "Our Story"
          ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-canvas" aria-label="Hero">
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/compressed_WEB-2-e1780297624496.webp"
            alt="Orkidoz Organic Baby Collection"
            className="w-full h-full object-cover object-[70%_center] md:object-center"
          />
          {/* Editorial overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 to-canvas/30 md:from-canvas/95 md:via-canvas/85 md:to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[50%] flex flex-col justify-center py-10 lg:py-16"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
              >
                Our Story
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="font-display text-ink mt-5 leading-[1.1]"
                style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
              >
                Born from love.<br />
                <span className="italic font-semibold">Made for little<br />beginnings.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="max-w-[400px] text-muted text-[14px] leading-[1.8] mt-6"
              >
                Orkidoz was created with a simple belief – that babies deserve
                the purest start, wrapped in softness, care and conscious choices.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-10"
              >
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                >
                  Our Journey <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right spacer to allow background babies to be visible on desktop */}
            <div className="hidden lg:block lg:w-[50%] h-[400px]" />
          </div>
        </div>

        {/* Curved Wave Divider at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path d="M0,80 C150,40 350,40 600,95 C850,130 1050,70 1200,40 L1200,120 L0,120 Z" className="fill-canvas" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: OUR JOURNEY
          ══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-16 bg-canvas" aria-label="Our Journey">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[42%]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Our Journey
              </p>
              <h2
                className="font-display text-ink mt-4 leading-[1.1]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
              >
                It all started with<br />a mother's heart.
              </h2>
              <p className="text-[14px] text-muted leading-[1.85] mt-6">
                Like every parent, we wanted the very best for our little one. But when we looked for clothes that were truly gentle, thoughtfully made and free from harmful chemicals, we couldn't find enough choices that felt right.
              </p>
              <p className="text-[14px] text-muted leading-[1.85] mt-4">
                That's when Orkidoz was born – out of a desire to create better. Better fabrics. Better choices. And pieces that hold more meaning.
              </p>

              {/* Founder Signature */}
              <div className="mt-8 border-t border-border/50 pt-6">
                <p className="font-script text-[22px] text-ink italic">
                  Neha Agarwal
                </p>
                <p className="text-[12px] text-muted mt-1">
                  – Founder, Orkidoz
                </p>
              </div>
            </motion.div>

            {/* Right image grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-[58%]"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Top left — mother & baby (taller) */}
                <div className="row-span-2 rounded-2xl overflow-hidden bg-surface">
                  <img
                    src="/story-2.png"
                    alt="Mother holding baby"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Top right — folded clothes */}
                <div className="rounded-2xl overflow-hidden bg-surface aspect-[4/3]">
                  <img
                    src="/folded-clothes.png"
                    alt="Folded organic baby clothes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Bottom right — organic cotton tag */}
                <div className="rounded-2xl overflow-hidden bg-[#E8E0D5] aspect-[4/3]">
                  <img
                    src="/organic-tag.png"
                    alt="Made with Organic Cotton"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: OUR PROMISE
          ══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-14 bg-canvas" aria-label="Our Promise">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0">
          {/* Main Card Container */}
          <div className="bg-surface rounded-[24px] border border-[#EDE8E0] px-6 py-12 md:px-10 md:py-16">
            {/* Heading */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                Our Promise
              </p>
              <h2
                className="font-display text-ink mt-3 leading-[1.25] text-[24px] sm:text-[28px] md:text-[32px]"
              >
                Thoughtful in every detail.<br />
                Conscious in every choice.
              </h2>
            </div>

            {/* Promise Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
              {promiseValues.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-center px-4 md:px-6 lg:px-8 py-4 md:py-0 ${
                    i > 0 ? 'md:border-l md:border-[#EDE8E0]' : ''
                  }`}
                >
                  {/* Icon rendered directly on card background */}
                  {val.icon}
                  <h3 className="text-[14px] md:text-[15px] font-semibold text-ink tracking-wide mt-2">
                    {val.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed mt-3 max-w-[240px] mx-auto">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4: CRAFTED WITH CARE
          ══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-16 bg-canvas" aria-label="Crafted with care">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">

            {/* Left — Sewing machine image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[30%] rounded-2xl overflow-hidden bg-surface"
            >
              <img
                src="/sewing-machine.png"
                alt="Custom embroidery on sewing machine"
                className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto"
                loading="lazy"
              />
            </motion.div>

            {/* Middle — Story content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-[38%] flex flex-col justify-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Crafted with Care
              </p>
              <h2
                className="font-display text-ink mt-4 leading-[1.15]"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
              >
                From soft fabric to<br />forever memories.
              </h2>
              <p className="text-[13px] text-muted leading-[1.85] mt-6">
                Every Orkidoz piece goes through a journey of care – from selecting the finest organic fabrics to the last stitch. We believe the little things matter. The feel, the finish, the emotion behind every piece.
              </p>
              <div className="mt-8">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 text-sage text-[13px] font-semibold uppercase tracking-[0.1em] hover:text-sage-dark transition-colors"
                >
                  See How It's Made <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Right — Value list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[32%] flex flex-col justify-center gap-7 lg:pl-8 lg:border-l lg:border-border/40"
            >
              {[
                {
                  icon: <Leaf className="text-sage" size={20} />,
                  title: 'Carefully sourced organic fabrics',
                },
                {
                  icon: <Scissors className="text-sage" size={20} />,
                  title: 'Hand-finished with love',
                },
                {
                  icon: <ShieldCheck className="text-sage" size={20} />,
                  title: 'Safe for baby, kind for earth',
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: OUR VALUES
          ══════════════════════════════════════════════════════ */}
      <section className="pb-10 sm:pb-12 lg:pb-16 bg-canvas" aria-label="Our values">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-0">
          <div className="border border-border/60 bg-white rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Title */}
              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Our Values
                </p>
                <h3
                  className="font-display text-ink mt-2 leading-tight"
                  style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
                >
                  Guided by what matters most.
                </h3>
              </div>

              {/* Right Columns */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    color: 'bg-sage',
                    title: 'Nurture',
                    desc: 'We nurture little ones with softness, love and care.',
                  },
                  {
                    color: 'bg-gold',
                    title: 'Discover',
                    desc: 'We inspire little minds to discover the world.',
                  },
                  {
                    color: 'bg-[#8C6D58]',
                    title: 'Grow',
                    desc: 'We grow with your child, celebrating every milestone.',
                  },
                ].map((val, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${val.color}`} />
                      <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-[12px] text-muted leading-relaxed mt-0.5">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
