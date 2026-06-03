import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Type, CheckSquare } from 'lucide-react';

const colors = [
  { name: 'Cream', hex: '#E8E3DC' },
  { name: 'Sage', hex: '#4A6741' },
  { name: 'Brown', hex: '#8C6D58' },
  { name: 'Gold', hex: '#B8863F' },
  { name: 'Slate', hex: '#78716C' },
];

const fonts = [
  { id: 'script', name: 'Script', class: 'font-script' },
  { id: 'serif', name: 'Classic', class: 'font-display' },
  { id: 'sans', name: 'Modern', class: 'font-sans' },
];

const placements = [
  { id: 'center', label: 'Center' },
  { id: 'left', label: 'Left Chest' },
  { id: 'right', label: 'Right Chest' },
];

export default function CustomizeSection() {
  const [name, setName] = useState('oliver');
  const [selectedColor, setSelectedColor] = useState(colors[1]);
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedPlacement, setSelectedPlacement] = useState(placements[0]);
  const [activeTab, setActiveTab] = useState('name');

  return (
    <section className="py-14 sm:py-20 bg-canvas border-y border-border/50" aria-label="Customize">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Left Text & CTA (approx 3 columns) */}
          <div className="lg:col-span-3 flex flex-col pt-4 lg:pt-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-4">
              Make it uniquely theirs
            </p>
            <h2
              className="font-display text-ink leading-[1.1]"
              style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}
            >
              Customize with love,<br />
              for a keepsake<br />
              they'll treasure.
            </h2>
            <p className="text-muted text-[12px] sm:text-[13px] leading-[1.8] mt-4 mb-8">
              Choose their favorite piece, add their name, and create something truly one of a kind.
            </p>
            
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#4c5c44] hover:bg-[#3a4734] text-white px-6 py-3.5 rounded-[4px] text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
              >
                Start Customizing <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 2. Center Image Overlay (approx 5 columns) */}
          <div className="lg:col-span-5 flex justify-center relative min-h-[400px]">
            <div className="relative w-full max-w-[380px] flex items-center justify-center">
              <img
                src="/customize-onesie.png"
                alt="Customizable onesie"
                className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md"
              />
              
              {/* Dynamic name embroidery preview overlay */}
              <div 
                className="absolute text-center pointer-events-none select-none transition-all duration-300"
                style={{ 
                  color: selectedColor.hex,
                  top: selectedPlacement.id === 'center' ? '32%' : '30%',
                  left: selectedPlacement.id === 'left' ? '65%' : selectedPlacement.id === 'right' ? '35%' : '50%',
                  transform: 'translate(-50%, -50%)',
                  textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <span className={`text-[20px] sm:text-[26px] tracking-wide ${selectedFont.class} block leading-none`}>
                  {name || 'baby'}
                </span>
                {selectedPlacement.id === 'center' && (
                  <span className="text-[8px] sm:text-[10px] tracking-[0.2em] font-sans uppercase opacity-85 block mt-0.5">
                    ♥
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 3. Right Control Panel (approx 4 columns) */}
          <div className="lg:col-span-4 bg-[#fcfaf7] shadow-sm border border-border/60 rounded-xl overflow-hidden mt-4 lg:mt-0">
            {/* Tabs */}
            <div className="flex bg-[#f4f0e6]/50">
              <button 
                onClick={() => setActiveTab('name')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeTab === 'name' ? 'bg-[#fcfaf7] text-ink shadow-[0_-2px_0_0_#4A6741_inset]' : 'text-muted hover:text-ink'
                }`}
              >
                <Type size={14} /> Add Name
              </button>
              <button 
                onClick={() => setActiveTab('initials')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeTab === 'initials' ? 'bg-[#fcfaf7] text-ink shadow-[0_-2px_0_0_#4A6741_inset]' : 'text-muted hover:text-ink'
                }`}
              >
                <CheckSquare size={14} /> Add Initials
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Name input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-ink mb-2">
                  Name
                </label>
                <input
                  type="text"
                  maxLength={12}
                  value={name}
                  onChange={(e) => setName(e.target.value.toLowerCase())}
                  placeholder="Enter baby's name"
                  className="w-full border border-border bg-white rounded-md px-4 py-2.5 text-[13px] text-ink placeholder:text-muted/40 focus:outline-none focus:border-sage transition-colors shadow-sm"
                />
              </div>

              {/* Thread Color */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-ink mb-2">
                  Thread Color: <span className="text-muted font-normal normal-case ml-1">{selectedColor.name}</span>
                </label>
                <div className="flex gap-2.5">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center shadow-sm ${
                        selectedColor.name === c.name ? 'border-sage scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Font Style */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-ink mb-2">
                  Font Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {fonts.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFont(f)}
                      className={`border rounded-lg p-2.5 text-center transition-all bg-white shadow-sm ${
                        selectedFont.id === f.id
                          ? 'border-sage ring-1 ring-sage text-sage'
                          : 'border-border text-muted hover:border-muted'
                      }`}
                    >
                      <span className={`text-[16px] leading-none ${f.class}`}>Aa</span>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.1em] mt-1.5">{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Placement */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-ink mb-2">
                  Placement
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {placements.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlacement(p)}
                      className={`border rounded-lg p-2.5 flex justify-center transition-all bg-white shadow-sm ${
                        selectedPlacement.id === p.id
                          ? 'border-sage ring-1 ring-sage'
                          : 'border-border opacity-70 hover:opacity-100'
                      }`}
                      title={p.label}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-6 h-6 ${selectedPlacement.id === p.id ? 'text-sage' : 'text-muted'}`}>
                        <rect x="5" y="4" width="14" height="16" rx="2" />
                        <path d="M9 4v3h6V4" />
                        {/* Dot indicator based on placement */}
                        {p.id === 'center' && <circle cx="12" cy="11" r="1.5" fill="currentColor" />}
                        {p.id === 'left' && <circle cx="15" cy="11" r="1.5" fill="currentColor" />}
                        {p.id === 'right' && <circle cx="9" cy="11" r="1.5" fill="currentColor" />}
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-[9px] font-semibold text-muted uppercase tracking-wider mt-2 text-center">
                  Preview
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Detail Showcase */}
        <div className="mt-16 pt-12 border-t border-border/40">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-stretch">
            <div className="flex flex-col justify-center pr-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted leading-[1.8]">
                Crafted<br/>Slowly,<br/>Made<br/>Meaningful.
              </p>
            </div>
            
            <div className="aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <img src="/organic-tag.png" alt="Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <img src="/sewing-machine.png" alt="Detail 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <img src="/embroidery-1.png" alt="Detail 3" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-white">
              <img src="/folded-clothes.png" alt="Detail 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
