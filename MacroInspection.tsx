import React, { useState } from 'react';
import { ZoomIn, Sparkles, Shield, Compass, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const MacroInspection: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeSpot, setActiveSpot] = useState<number>(0);

  const hotspots = [
    {
      title: '45° Billet Chamfered Bezel',
      description: 'Diamond-tipped CNC cutters machine a continuous 45-degree mirror bevel into Grade 5 titanium, creating exquisite specular highlights under directional light.',
      metric: '0.02 mm Tolerance',
    },
    {
      title: 'Laser-Etched Concentric Flux Ring',
      description: 'Sub-surface micro-etching provides tactile grip without dust accumulation, subtly marking the exact electromagnetic focal point for phone docking.',
      metric: '1,200 DPI Optical Clarity',
    },
    {
      title: 'Kevlar-Reinforced Braided Lead',
      description: 'Integrated 1.5m braided cable utilizes 500D ballistic aramid fibers, rated for over 25,000 bending cycles at the strain-relief boot.',
      metric: '25,000+ Flex Rating',
    },
  ];

  return (
    <section id="craftsmanship" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
                ATELIER CRAFTSMANSHIP
              </span>
              <div className="h-[1px] w-8 bg-[#8AB4FF]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              Microscopic <span className="blue-gradient-text">Precision.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-tech">
            <span className="text-[#C7CBD1]/60">OPTICAL LOUPE:</span>
            <button
              onClick={() => setZoomLevel(1)}
              className={`px-3 py-1 rounded-full border transition-all ${
                zoomLevel === 1
                  ? 'bg-[#8AB4FF] text-[#08090B] border-[#8AB4FF] font-bold'
                  : 'bg-white/5 text-[#C7CBD1] border-white/10'
              }`}
            >
              1.0× STANDARD
            </button>
            <button
              onClick={() => setZoomLevel(1.35)}
              className={`px-3 py-1 rounded-full border transition-all ${
                zoomLevel === 1.35
                  ? 'bg-[#8AB4FF] text-[#08090B] border-[#8AB4FF] font-bold'
                  : 'bg-white/5 text-[#C7CBD1] border-white/10'
              }`}
            >
              2.5× MACRO LOUPE
            </button>
          </div>
        </div>

        {/* Loupe Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Zoom Stage */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#16181D] border border-white/10 aspect-video shadow-2xl group">
            <motion.img
              src="/src/assets/images/magflow_macro_titanium_1790065607129.jpg"
              alt="MagFlow Macro Titanium Detail"
              referrerPolicy="no-referrer"
              animate={{ scale: zoomLevel }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-full object-cover object-center origin-center cursor-zoom-in"
              onClick={() => setZoomLevel(zoomLevel === 1 ? 1.35 : 1)}
            />

            {/* Hotspot Pulse Dots */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#8AB4FF] animate-ping" />
                <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-white border border-white/20">
                  CHAMFER BEVEL
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono-tech text-[#C7CBD1] flex items-center gap-2">
              <ZoomIn className="w-3.5 h-3.5 text-[#8AB4FF]" />
              <span>CLICK PHOTO TO TOGGLE 2.5× MACRO ZOOM</span>
            </div>
          </div>

          {/* Hotspot details on Right */}
          <div className="lg:col-span-4 space-y-4">
            {hotspots.map((spot, idx) => (
              <div
                key={spot.title}
                onClick={() => setActiveSpot(idx)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeSpot === idx
                    ? 'bg-[#1E222A] border-[#8AB4FF]/50 shadow-[0_0_20px_rgba(138,180,255,0.15)]'
                    : 'bg-[#16181D]/60 border-white/5 hover:bg-[#16181D]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-tech text-[#8AB4FF]">
                    FEATURE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-[#C7CBD1] border border-white/10">
                    {spot.metric}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{spot.title}</h4>
                <p className="text-xs text-[#C7CBD1]/70 leading-relaxed">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
