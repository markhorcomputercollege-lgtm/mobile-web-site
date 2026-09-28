import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ShieldCheck, Cpu, Flame, Disc, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ExplodedViewProps {
  onOpenProductModal: () => void;
}

export const ExplodedView: React.FC<ExplodedViewProps> = ({ onOpenProductModal }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 'frosted-glass',
      name: 'Frosted Oleophobic Glass',
      material: 'Chemically Strengthened Borosilicate',
      purpose: 'Ultra-smooth surface prevents micro-abrasions on phone lenses while dissipating direct contact heat.',
      thickness: '0.6 mm',
      icon: <Layers className="w-4 h-4 text-[#8AB4FF]" />,
    },
    {
      id: 'induction-coils',
      name: 'Dual-Strand Copper Induction Coil',
      material: 'Oxygen-Free 99.99% Pure Copper',
      purpose: 'Engineered with 48 concentric winds to deliver Qi2 25W electromagnetic transmission at 88% efficiency.',
      thickness: '1.2 mm',
      icon: <Disc className="w-4 h-4 text-amber-400" />,
    },
    {
      id: 'neodymium-ring',
      name: '16x N52 Neodymium Polar Array',
      material: 'Rare Earth NdFeB Sintered Alloy',
      purpose: 'Arranged in alternating north-south poles to generate 16N of magnetic clamp with zero stray flux leakage.',
      thickness: '1.8 mm',
      icon: <ShieldCheck className="w-4 h-4 text-[#8AB4FF]" />,
    },
    {
      id: 'vapor-chamber',
      name: 'CryoFlow Graphite Vapor Shield',
      material: 'Synthetic Multilayer Graphene',
      purpose: 'Rapidly distributes heat horizontally across the entire surface to eliminate battery hotspot throttling.',
      thickness: '0.4 mm',
      icon: <Flame className="w-4 h-4 text-cyan-400" />,
    },
    {
      id: 'titanium-chassis',
      name: 'Billet Grade 5 Titanium Base',
      material: 'Ti-6Al-4V Aerospace Alloy',
      purpose: 'Provides rigid structural containment, weighted anti-slip mass, and natural thermodynamic convection.',
      thickness: '1.8 mm',
      icon: <Cpu className="w-4 h-4 text-slate-300" />,
    },
  ];

  return (
    <section id="architecture" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative overflow-hidden border-t border-white/5">
      {/* Soft atmospheric blue glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#8AB4FF]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
            04 / INTERNAL ARCHITECTURE
          </span>
          <div className="h-[1px] w-8 bg-[#8AB4FF]/40" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
          Designed to Fit <span className="titanium-gradient-text">Your Flow.</span>
        </h2>
        <p className="text-base text-[#C7CBD1]/80 max-w-2xl mb-16">
          Every micron has been refined. Explore the five precision-layered components that form
          the monolithic MagFlow 25W Ultra Pad.
        </p>

        {/* Two Column Layout: Visual Exploded Stack & Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Layered Stack Diagram */}
          <div className="lg:col-span-7 bg-[#16181D]/60 rounded-3xl p-6 sm:p-10 border border-white/10 relative shadow-2xl backdrop-blur-md flex flex-col items-center justify-center min-h-[440px]">
            {/* 3D Stack Visualization */}
            <div className="w-full max-w-md flex flex-col items-center gap-3 py-6">
              {layers.map((layer, idx) => {
                const isSelected = activeLayer === idx;
                return (
                  <motion.div
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full cursor-pointer p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1E222A] border-[#8AB4FF] shadow-[0_0_25px_rgba(138,180,255,0.2)]'
                        : 'bg-[#121418]/90 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5">{layer.icon}</div>
                      <div>
                        <span className="text-xs font-mono-tech text-[#C7CBD1]/60 block uppercase">
                          LAYER 0{idx + 1}
                        </span>
                        <span
                          className={`text-sm font-semibold transition-colors ${
                            isSelected ? 'text-[#8AB4FF]' : 'text-white'
                          }`}
                        >
                          {layer.name}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono-tech text-[#C7CBD1] block">
                        {layer.thickness}
                      </span>
                      <span className="text-[10px] uppercase font-mono-tech text-[#8AB4FF]/70">
                        {isSelected ? 'ACTIVE' : 'SELECT'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#C7CBD1]/60">
              <span>TOTAL DEPTH: 5.8 MM MONOLITH</span>
              <span className="text-[#8AB4FF]">TOLERANCE: ±0.02 MM</span>
            </div>
          </div>

          {/* Right Column: Deep Dive Material Card */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#16181D] rounded-3xl p-8 border border-white/10 shadow-xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8AB4FF]/10 border border-[#8AB4FF]/30 text-xs font-mono-tech text-[#8AB4FF] mb-4">
                  <span>LAYER 0{activeLayer + 1} OF 05</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {layers[activeLayer].name}
                </h3>

                <div className="text-xs font-mono-tech text-[#8AB4FF] mb-6">
                  Material Composition: {layers[activeLayer].material}
                </div>

                <p className="text-sm sm:text-base text-[#C7CBD1]/80 leading-relaxed mb-6">
                  {layers[activeLayer].purpose}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                      Component Thickness
                    </span>
                    <span className="text-base font-semibold text-white">
                      {layers[activeLayer].thickness}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                      Thermal Resistance
                    </span>
                    <span className="text-base font-semibold text-emerald-400">
                      Zero Hotspots
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick action button */}
            <button
              onClick={onOpenProductModal}
              className="w-full py-3.5 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>View Full Technical Blueprint</span>
              <ArrowRight className="w-4 h-4 text-[#8AB4FF]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
