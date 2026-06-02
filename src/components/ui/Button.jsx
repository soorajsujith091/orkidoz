import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-sage text-white hover:bg-sage-dark',
  outline: 'border border-sage text-sage hover:bg-sage hover:text-white',
  ghost: 'text-sage hover:bg-sage-lt',
  text: 'text-sage underline-offset-4 hover:underline',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-sans transition-all duration-200 cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none`;

  const sizing = variant === 'text'
    ? 'text-[13px] tracking-[0.08em]'
    : 'px-7 py-3 text-[13px] tracking-[0.16em] uppercase rounded-sm';

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${sizing} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
