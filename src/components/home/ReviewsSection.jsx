import { motion } from 'framer-motion';

const reviews = [
  {
    rating: 5,
    text: "The absolute softest fabric I've ever felt. The customization is done with such care. It's the only thing my baby wears now!",
    author: "Sarah M.",
    location: "Mumbai",
    avatar: "/products/romper-2.jpg",
  },
  {
    rating: 5,
    text: "We ordered a customized romper as a gift and the parents were absolutely thrilled. The packaging itself was a work of art.",
    author: "Aarav K.",
    location: "Bangalore",
    avatar: "/products/romper-4.jpg",
  },
  {
    rating: 5,
    text: "Beautiful designs that wash so well. You can feel the quality in every thread. Highly recommend Orkidoz!",
    author: "Priya S.",
    location: "Delhi",
    avatar: "/products/romper-7.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-14 sm:py-20 bg-canvas overflow-hidden" aria-label="Reviews">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Loved by Parents
          </p>
          <h2
            className="font-display text-ink mt-3 leading-[1.2] text-[26px] sm:text-[36px]"
          >
            See why families choose Orkidoz
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-border/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[13px] sm:text-[14px] text-ink italic leading-[1.7] mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-[12px] font-semibold text-ink">{rev.author}</p>
                  <p className="text-[10px] text-muted">{rev.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
