export default function Badge({ children, variant = 'sale', className = '' }) {
  const styles = {
    sale: 'bg-sage text-white',
    new: 'bg-gold text-white',
    tag: 'bg-surface text-ink',
    save: 'bg-sage-lt text-sage',
  };

  return (
    <span
      className={`inline-flex items-center text-[10px] font-sans font-semibold uppercase tracking-wider rounded-sm px-2 py-0.5 ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
