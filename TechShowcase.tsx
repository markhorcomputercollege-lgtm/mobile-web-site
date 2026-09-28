import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_FEATURES } from '../data/products';
import { Magnet, Zap, ThermometerSnowflake, Cpu, CheckCircle, Info } from 'lucide-react';

export const TechShowcase: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = TECH_FEATURES[activeFeatureIndex];

  const featureIcons = [
    <Magnet className="w-5 h-5 text-[#8AB4FF]" key="mag" />,
    <Zap className="w-5 h-5 text-[#8AB4FF]" key="zap" />,
    <ThermometerSnowflake className="w-5 h-5 text-[#8AB4FF]" key="therm" />,
    <Cpu className="w-5 h-5 text-[#8AB4FF]" key="cpu" />,
  ];

  return (
    <section id="technology" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative overflow-hidden border-y border-white/5">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#8AB4FF]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              02 / MAGNETIC ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Precision in Every <span className="blue-gradient-text">Connection.</span>
          </h2>
          <p className="mt-4 text-base text-[#C7CBD1]/80 max-w-2xl mx-auto">
            Interact with the core engineering pillars developed by UGREEN Laboratories that separate MagFlow from conventional
            inductive chargers. Select a subsystem to examine the magnetic circuit.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Magnetic Simulator Canvas & Visual Breakdown */}
          <div className="lg:col-span-7 bg-[#16181D]/80 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono-tech">
              <span className="text-[#C7CBD1] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ACTIVE SIMULATION: FLUX ALIGNMENT
              </span>
              <span className="text-[#8AB4FF]">25W QI2 PROFILE</span>
            </div>

            {/* Dynamic Diagram */}
            <div className="relative py-12 flex flex-col items-center justify-center min-h-[340px]">
              {/* Outer Phone Contour Silhouette */}
              <div className="relative w-64 h-80 rounded-[38px] border-2 border-white/15 bg-gradient-to-b from-white/[0.02] to-white/[0.05] p-3 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                {/* Phone Notch/Speaker indicator */}
                <div className="w-16 h-1 rounded-full bg-white/20 absolute top-3"></div>

                {/* Magnetic Flux Ring (16 Segment Neodymium Array) */}
                <div className="relative w-40 h-40 rounded-full flex items-center justify-center">
                  {/* Rotating magnetic alignment guidelines */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#8AB4FF]/50 animate-[spin_30s_linear_infinite]" />

                  {/* 16 Magnetic Array segments */}
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i * 360) / 16;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 66;
                    const y = Math.sin(rad) * 66;
                    const isSelected = activeFeatureIndex === 0;
                    return (
                      <div
                        key={i}
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                        }}
                        className={`absolute w-3.5 h-1.5 rounded-sm transition-all duration-500 ${
                          isSelected
                            ? 'bg-[#8AB4FF] shadow-[0_0_10px_#8AB4FF]'
                            : 'bg-white/40'
                        }`}
                      />
                    );
                  })}

                  {/* Center Copper Induction Coil */}
                  <div className="w-24 h-24 rounded-full border-2 border-amber-500/60 bg-gradient-to-br from-amber-500/10 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-amber-500/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#8AB4FF]/20 border border-[#8AB4FF] flex items-center justify-center shadow-[0_0_20px_#8AB4FF]">
                        <Zap className="w-4 h-4 text-[#8AB4FF] animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Radiating electromagnetic flux waves */}
                  <motion.div
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full border-2 border-[#8AB4FF]/40 pointer-events-none"
                  />
                </div>

                {/* Snap Lock Distance indicator */}
                <div className="mt-4 px-3 py-1 rounded-full bg-[#08090B]/80 border border-white/10 text-[11px] font-mono-tech text-[#C7CBD1] flex items-center gap-1.5">
                  <span>DISTANCE:</span>
                  <span className="text-emerald-400 font-semibold">0.0 mm (LOCKED)</span>
                </div>
              </div>
            </div>

            {/* Verification Footer Note */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C7CBD1]/60 font-mono-tech">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-[#8AB4FF]" />
                Technical Specification: Verified Qi2 Handshake
              </span>
              <span>Qi2 ID: #MF25-W09</span>
            </div>
          </div>

          {/* Right Column: Interactive Subsystem Feature Cards */}
          <div className="lg:col-span-5 space-y-3">
            {TECH_FEATURES.map((feat, idx) => {
              const isActive = activeFeatureIndex === idx;
              return (
                <button
                  key={feat.id}
                  id={`tech-feature-tab-${idx}`}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#1E222B] border-[#8AB4FF]/40 shadow-[0_0_25px_rgba(138,180,255,0.15)]'
                      : 'bg-[#16181D]/50 border-white/5 hover:bg-[#16181D] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-[#8AB4FF]/20' : 'bg-white/5'}`}>
                        {featureIcons[idx]}
                      </div>
                      <span className="font-semibold text-white text-base">
                        {feat.title}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-mono-tech font-bold text-sm text-[#8AB4FF]">
                        {feat.stat}
                      </span>
                      <span className="block text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50">
                        {feat.statLabel}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 pt-3 border-t border-white/10 text-xs text-[#C7CBD1]/80 leading-relaxed overflow-hidden"
                      >
                        <p className="font-medium text-white mb-1">{feat.headline}</p>
                        <p>{feat.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
