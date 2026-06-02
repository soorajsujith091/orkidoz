import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/ui/SocialIcons';
import Button from '../components/ui/Button';
import { showToast } from '../components/ui/Toast';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent! We\'ll be back to you soon.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main>
      <Helmet>
        <title>Contact Orkidoz | Get in Touch</title>
        <meta name="description" content="Reach Orkidoz at orkidoz@yahoo.com or +91 8098 01 8002. Serving customers across India, UK and UAE. We reply within 24 hours." />
        <meta property="og:title" content="Contact Orkidoz | Get in Touch" />
        <link rel="canonical" href="https://orkidoz.com/contact-us" />
      </Helmet>

      {/* ══ HERO ══ */}
      <section className="py-24 bg-surface text-center" aria-label="Contact hero">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 xl:px-0">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }}
              className="font-display text-ink mt-4"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-[15px] text-muted mt-3">
              We'd love to hear from you. Typically reply within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ SPLIT LAYOUT ══ */}
      <section className="py-16 bg-canvas" aria-label="Contact form">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left — Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[40%]"
            >
              <div className="bg-canvas border border-border rounded-2xl p-10 h-fit">
                <h3 className="text-[22px] font-medium text-ink">Contact Information</h3>

                <div className="mt-8 space-y-6">
                  {[
                    { icon: MapPin, label: 'Location', value: 'India · UK · UAE' },
                    { icon: Mail, label: 'Email', value: 'orkidoz@yahoo.com' },
                    { icon: Phone, label: 'Phone', value: '+91 8098 01 8002' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4 items-start">
                        <Icon size={20} className="text-sage flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[12px] text-muted">{item.label}</p>
                          <p className="text-[15px] font-medium text-ink">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <hr className="border-border mt-8" />

                <div className="mt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                    Follow Us
                  </p>
                  <div className="flex gap-4 mt-4">
                    {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 bg-surface rounded-sm flex items-center justify-center text-muted hover:bg-sage hover:text-white transition-all"
                        aria-label={['Facebook', 'Instagram', 'YouTube'][i]}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-[13px] text-muted italic mt-8">
                  We typically reply within 24 hours on business days.
                </p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-[60%]"
            >
              <div className="bg-canvas border border-border rounded-2xl p-10">
                <h3 className="text-[22px] font-medium text-ink">Send a Message</h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[12px] font-medium text-ink mb-2 block">First Name</label>
                      <input
                        name="firstName" value={form.firstName} onChange={handleChange}
                        className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50"
                        placeholder="First name" required
                      />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-ink mb-2 block">Last Name</label>
                      <input
                        name="lastName" value={form.lastName} onChange={handleChange}
                        className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50"
                        placeholder="Last name" required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-ink mb-2 block">Email</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50"
                      placeholder="your@email.com" required
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-ink mb-2 block">
                      Phone <span className="text-[11px] text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50"
                      placeholder="+91 XXXX XX XXXX"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-ink mb-2 block">Subject</label>
                    <input
                      name="subject" value={form.subject} onChange={handleChange}
                      className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50"
                      placeholder="How can we help?" required
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-ink mb-2 block">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={5}
                      className="w-full border border-border rounded-sm px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition placeholder:text-muted/50 resize-none"
                      placeholder="Tell us more about your inquiry..." required
                    />
                  </div>

                  <Button variant="primary" fullWidth type="submit" className="mt-3">
                    Send Message →
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
