import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Sliders, Shield } from 'lucide-react';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="introduction" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8AB4FF]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
            01 / PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 bg-[#8AB4FF]/40" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Heading */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Less Friction. <br />
              <span className="titanium-gradient-text">More Flow.</span>
            </h2>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono-tech text-[#C7CBD1]/60">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#C7CBD1]">
                TITANIUM GRADE 5
              </span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#C7CBD1]">
                QI2 CERTIFIED 25W
              </span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#C7CBD1]">
                N52 NEODYMIUM
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Craft Highlights */}
          <div className="lg:col-span-6 space-y-6 text-[#C7CBD1]/80 leading-relaxed text-base sm:text-lg font-normal">
            <p>
              UGREEN's industrial design atelier presents magnetic charging products that bring
              architectural simplicity, precision metallurgy, and effortless power flow to modern spaces.
            </p>
            <p className="text-sm sm:text-base text-[#C7CBD1]/70 leading-relaxed">
              Traditional wireless charging forced users to hunt for microscopic alignment sweet
              spots, bleeding wattage through thermal friction. UGREEN MagFlow redesigns the interaction
              from first principles: high-density N52 neodymium magnets clamp into concentric lock the instant
              your phone draws within 15mm, channeling uncompromised 25W Qi2 throughput.
            </p>

            {/* Editorial highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#16181D]/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Layers className="w-4 h-4 text-[#8AB4FF]" />
                  <span>Unibody Billet Titanium</span>
                </div>
                <p className="text-xs text-[#C7CBD1]/60">
                  Precision CNC milled from single blocks for structural rigidity and passive heat sink efficiency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181D]/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Shield className="w-4 h-4 text-[#8AB4FF]" />
                  <span>Sub-Millimeter Lock</span>
                </div>
                <p className="text-xs text-[#C7CBD1]/60">
                  Eliminates coil misalignment to guarantee maximum inductive coupling and preserve battery longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
