import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, Heart, Sparkles, Shield, Scissors, Package, Sprout, Globe, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const promisePillars = [
  { icon: Leaf, title: 'Certified Organic', desc: 'Every fabric meets GOTS standards — pure, safe and free from harmful chemicals.' },
  { icon: Heart, title: 'Ethically Made', desc: 'Small batches crafted by skilled artisans with fair wages and happy hands.' },
  { icon: Sparkles, title: 'Uniquely Personal', desc: 'Custom embroidery adds a special touch, making each piece truly one of a kind.' },
  { icon: Shield, title: 'Baby-Safe Always', desc: 'Non-toxic dyes, nickel-free snaps and breathable fabrics for delicate skin.' },
];

const valuesCards = [
  { color: 'bg-sage', label: 'Nurture', title: 'We nurture little ones with softness, love and care.', body: 'Every product is made with the understanding that babies need the gentlest touch. From fabric selection to final stitch, nurturing guides every decision.' },
  { color: 'bg-gold', label: 'Discover', title: 'We inspire little minds to discover the world.', body: 'Through playful designs and thoughtful details, we encourage curiosity and wonder. Each piece tells a story waiting to be explored.' },
  { color: 'bg-[#C17F59]', label: 'Grow', title: 'We grow with your child, celebrating every milestone.', body: 'Built to last through crawling, first steps and beyond. Our clothing grows with your little one, becoming cherished keepsakes.' },
];

export default function About() {
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubscribed, setNewsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 4000);
    }
  };

  return (
    <main>
      <Helmet>
        <title>About Orkidoz | Our Story, Mission & Values</title>
        <meta name="description" content="Born from a mother's heart. Orkidoz creates GOTS-certified organic cotton baby essentials with love, purpose and sustainability." />
        <meta property="og:title" content="About Orkidoz | Our Story, Mission & Values" />
        <link rel="canonical" href="https://orkidoz.com/about-us" />
      </Helmet>

      {/* ══ HERO ══ */}
      <section className="min-h-[70vh] flex items-center bg-canvas" aria-label="About hero">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0 w-full py-16 lg:py-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:w-[55%]"
            >
              <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Our Story
              </motion.p>
              <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }}
                className="font-display italic text-ink mt-4 leading-[1.05]"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                Born from love.<br />Made for little<br />beginnings.
              </motion.h1>
              <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
                className="max-w-[440px] text-muted text-[15px] leading-[1.8] mt-6">
                Orkidoz was created with a simple belief — that babies
                deserve the purest start, wrapped in softness, care
                and conscious choices.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8">
                <Button variant="primary">Our Journey</Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[45%]"
            >
              <div className="aspect-[3/4] bg-surface rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/story-2.png"
                  alt="Organic cotton baby clothes journey"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER STORY ══ */}
      <section className="py-24 bg-canvas" aria-label="Founder story">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Our Journey
              </p>
              <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
                It all started with<br />a mother's heart.
              </h2>
              <p className="text-[15px] text-muted leading-[1.8] mt-6">
                Like every parent, we wanted the very best for our
                little one. But when we looked for clothes that were
                truly gentle, thoughtfully made and free from harmful
                chemicals, we couldn't find enough choices that
                felt right.
              </p>
              <p className="text-[15px] text-muted leading-[1.8] mt-4">
                That's when Orkidoz was born — out of a desire to
                create better. Better fabrics. Better choices. And
                pieces that hold more meaning.
              </p>
              <p className="font-display italic text-[28px] text-gold mt-8">
                Neha Agarwal
              </p>
              <p className="text-[12px] text-muted mt-1">— Founder, Orkidoz</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[3/4] bg-surface rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/story-3.png"
                  alt="Organic cotton clothing made with heart"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Small overlay card */}
              <div className="absolute bottom-6 right-6 lg:-right-4 bg-white shadow-lg rounded-xl p-3 border-4 border-white">
                <div className="bg-surface rounded-lg p-3 flex items-center gap-3">
                  <Leaf size={18} className="text-sage flex-shrink-0" />
                  <div>
                    <p className="text-[12px] font-medium text-ink">Made with</p>
                    <p className="text-[11px] text-muted">Organic Cotton</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROMISE PILLARS ══ */}
      <section className="py-24 bg-surface" aria-label="Our promise">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
              Our Promise
            </p>
            <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
              Thoughtful in every detail.<br />Conscious in every choice.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {promisePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="pl-6 border-l-2 border-sage-lt hover:border-sage transition-colors duration-300"
                >
                  <Icon size={24} className="text-sage mb-4" />
                  <h3 className="text-[16px] font-medium text-ink">{pillar.title}</h3>
                  <p className="text-[14px] text-muted mt-2 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROCESS DETAIL ══ */}
      <section className="py-24 bg-canvas" aria-label="Our process">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="aspect-square bg-surface rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/embroidery-hand.png"
                  alt="Orkidoz handcrafted embroidery details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-1/2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Crafted with Care
              </p>
              <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
                From soft fabric to<br />forever memories.
              </h2>
              <p className="text-[15px] text-muted leading-[1.8] mt-6">
                Every Orkidoz piece goes through a journey of care — from
                selecting the finest organic fabrics to the last stitch.
                We believe the little things matter. The feel, the finish,
                the emotion behind every piece.
              </p>
              <div className="mt-6">
                <Button variant="text">See How It's Made →</Button>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  { icon: Leaf, title: 'Carefully sourced organic fabrics', desc: 'GOTS-certified cotton from trusted farms' },
                  { icon: Heart, title: 'Hand-finished with love', desc: 'Skilled artisans in small-batch production' },
                  { icon: Globe, title: 'Safe for baby, kind for earth', desc: 'Non-toxic dyes and eco-friendly packaging' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <Icon size={20} className="text-sage flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[14px] font-medium text-ink">{item.title}</p>
                        <p className="text-[13px] text-muted">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 bg-canvas" aria-label="Our values">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
              Our Values
            </p>
            <h2 className="font-display text-h2 text-ink mt-3 leading-[1.15]">
              Guided by what<br />matters most.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {valuesCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface rounded-2xl p-10"
              >
                <div className={`w-3 h-3 rounded-full ${card.color}`} />
                <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mt-4 ${
                  card.color === 'bg-sage' ? 'text-sage' :
                  card.color === 'bg-gold' ? 'text-gold' : 'text-[#C17F59]'
                }`}>
                  {card.label}
                </p>
                <h3 className="font-display italic text-[24px] text-ink mt-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[14px] text-muted mt-3 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GREENER TOMORROW ══ */}
      <section className="py-20 bg-ink" aria-label="Greener tomorrow">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2C2C2C]">
            {/* Col 1 */}
            <div className="lg:pr-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                A Greener Tomorrow
              </p>
              <p className="text-[14px] text-[#A8A29E] leading-relaxed mt-4">
                We're committed to a sustainable future for our little ones.
                Every choice we make considers the planet they'll inherit.
              </p>
              <a href="#" className="text-[13px] text-sage hover:underline underline-offset-4 mt-4 inline-block">
                Our Initiatives →
              </a>
            </div>

            {/* Col 2 — Newsletter */}
            <div className="lg:px-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Let's Stay Connected
              </p>
              <p className="text-[13px] text-[#A8A29E] mt-4">
                Get early access, new arrivals and thoughtful reads.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mt-4 max-w-xs mx-auto">
                <input
                  type="email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-[#3C3C3C] rounded-sm px-3 py-2 text-[13px] text-white placeholder:text-[#57534E] focus:outline-none focus:border-sage transition"
                  required
                />
                <button type="submit" className="bg-sage hover:bg-sage-dark text-white px-3 py-2 rounded-sm transition cursor-pointer" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
              {newsSubscribed && (
                <p className="text-sage text-[12px] mt-2">✓ Subscribed!</p>
              )}
            </div>

            {/* Col 3 */}
            <div className="lg:pl-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                Made for Moments That Matter
              </p>
              <p className="text-[14px] text-[#A8A29E] leading-relaxed mt-4">
                Thoughtful pieces for the moments you'll never forget.
                Each garment is designed to become a cherished memory.
              </p>
              <Link to="/shop" className="text-[13px] text-sage hover:underline underline-offset-4 mt-4 inline-block">
                Shop Collections →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
