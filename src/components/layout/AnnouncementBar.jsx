export default function AnnouncementBar() {
  const messages = [
    "New Collection Live Now",
    "Buy 2 Get 20% Off — Code BUY2GET20",
    "Free Shipping on Orders Over ₹999",
  ];

  const text = messages.join('  ·  ');

  return (
    <div className="h-9 bg-ink flex items-center overflow-hidden relative" role="marquee" aria-label="Announcements">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1, 2, 3].map(i => (
          <span
            key={i}
            className="text-[11px] font-sans tracking-[0.1em] text-gold mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
