import React, { useState } from 'react';
import { Thermometer, ShieldCheck, Flame, Snowflake, Sliders } from 'lucide-react';
import { motion } from 'motion/react';

export const ThermalComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="thermal-lab" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]" />
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              THERMAL IMAGING LAB
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            CryoFlow vs. <span className="titanium-gradient-text">Thermal Throttling.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#C7CBD1]/75">
            Slide horizontally to compare FLIR thermal radiation profiles. MagFlow's graphite vapor
            chamber maintains sub-32°C temps, preventing the battery degradation caused by generic coils.
          </p>
        </div>

        {/* Interactive Split Slider Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[#121418] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] p-4 sm:p-8">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono-tech">
            <div className="flex items-center gap-2 text-rose-400">
              <Flame className="w-4 h-4" />
              <span>CONVENTIONAL CHARGER: 44.6°C (HEAT TRAPPED)</span>
            </div>
            <div className="flex items-center gap-2 text-[#8AB4FF]">
              <Snowflake className="w-4 h-4" />
              <span>MAGFLOW CRYOFLOW: 31.8°C (OPTIMAL INDUCTION)</span>
            </div>
          </div>

          {/* Thermal Stage Container with Slider */}
          <div className="relative my-8 rounded-2xl overflow-hidden h-80 sm:h-96 select-none cursor-ew-resize">
            {/* Background Layer: Conventional Thermal Heatmap (Hot Red / Yellow / Orange) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0000] via-[#5A0A0A] to-[#120000] flex items-center justify-center">
              {/* Heat glow zone */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-yellow-200 blur-2xl opacity-80 animate-pulse" />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-red-500/30 text-xs font-mono-tech text-red-300">
                <span className="block font-bold">GENERIC INDUCTION PAD</span>
                <span className="text-[10px] text-red-200">PEAK: 44.6°C • 52% EFFICIENCY LOSS</span>
              </div>
            </div>

            {/* Foreground Layer (Clipped by slider): MagFlow Cool Blue CryoFlow Heatmap */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#050D1A] via-[#0D2545] to-[#040A14] flex items-center justify-center overflow-hidden border-r-2 border-[#8AB4FF]"
              style={{ width: `${sliderPos}%` }}
            >
              {/* Cool thermal glow zone */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-[#8AB4FF] blur-2xl opacity-60" />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-[#8AB4FF]/40 text-xs font-mono-tech text-[#8AB4FF]">
                <span className="block font-bold">MAGFLOW 25W CRYOFLOW</span>
                <span className="text-[10px] text-cyan-200">PEAK: 31.8°C • SUSTAINED 25W QI2</span>
              </div>
            </div>

            {/* Slider Handle Divider Line */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none flex flex-col items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 h-full bg-[#8AB4FF] shadow-[0_0_15px_#8AB4FF]" />
              <div className="w-10 h-10 -my-5 rounded-full bg-[#0D0F13] border-2 border-[#8AB4FF] text-[#8AB4FF] flex items-center justify-center shadow-xl">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Range input overlay for smooth scrub */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Thermal Comparison Slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
            />
          </div>

          {/* Technical Takeaways */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono-tech">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#C7CBD1]/60 block mb-1">BATTERY HEALTH IMPACT</span>
              <span className="text-white font-semibold">Zero Accelerated Degradation</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#C7CBD1]/60 block mb-1">THROTTLING TIME</span>
              <span className="text-emerald-400 font-semibold">0 Minutes Throttled</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#C7CBD1]/60 block mb-1">DISSIPATION MEDIA</span>
              <span className="text-[#8AB4FF] font-semibold">Ti-6Al-4V + Multilayer Graphene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
