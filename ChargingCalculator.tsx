import React, { useState } from 'react';
import { Zap, Clock, BatteryCharging, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export const ChargingCalculator: React.FC = () => {
  const devices = [
    { name: 'iPhone 16 Pro Max', battery: '4,685 mAh', standardQi: 145, magSafe15W: 88, magFlow25W: 46 },
    { name: 'iPhone 16 Pro', battery: '3,582 mAh', standardQi: 120, magSafe15W: 72, magFlow25W: 36 },
    { name: 'iPhone 15 Pro Max', battery: '4,422 mAh', standardQi: 140, magSafe15W: 85, magFlow25W: 48 },
    { name: 'Galaxy S25 / Qi2 Ready', battery: '4,000 mAh', standardQi: 130, magSafe15W: 78, magFlow25W: 41 },
  ];

  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);
  const dev = devices[selectedDeviceIndex];

  return (
    <section id="efficiency" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              08 / VELOCITY BENCHMARK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Quantifiable <span className="blue-gradient-text">Efficiency.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C7CBD1]/75">
            Select your flagship smartphone to compare real-world charging duration to 80% capacity.
          </p>

          {/* Device Selector Chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {devices.map((d, i) => (
              <button
                key={d.name}
                id={`calc-device-btn-${i}`}
                onClick={() => setSelectedDeviceIndex(i)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedDeviceIndex === i
                    ? 'bg-[#8AB4FF] text-[#08090B] shadow-[0_0_15px_rgba(138,180,255,0.4)]'
                    : 'bg-[#16181D] text-[#C7CBD1]/80 hover:text-white border border-white/5'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Speed Comparison Bars */}
        <div className="bg-[#16181D] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono-tech">
            <span className="text-[#C7CBD1]">BENCHMARK: 0% TO 80% RECHARGE DURATION</span>
            <span className="text-[#8AB4FF]">BATTERY: {dev.battery}</span>
          </div>

          <div className="space-y-8 mt-8">
            {/* Standard 7.5W Qi */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
                <span className="text-[#C7CBD1]/70">Standard Legacy Qi (7.5W)</span>
                <span className="font-mono-tech text-white/50">{dev.standardQi} minutes</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-white/20 rounded-full transition-all duration-700"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            {/* Standard 15W MagSafe */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
                <span className="text-[#C7CBD1]">Standard MagSafe (15W Max)</span>
                <span className="font-mono-tech text-[#C7CBD1]">{dev.magSafe15W} minutes</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-[#C7CBD1]/60 rounded-full transition-all duration-700"
                  style={{ width: `${(dev.magSafe15W / dev.standardQi) * 100}%` }}
                />
              </div>
            </div>

            {/* MagFlow 25W Qi2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1A202C] via-[#1E2638] to-[#121418] border border-[#8AB4FF]/30 shadow-[0_0_30px_rgba(138,180,255,0.15)]">
              <div className="flex justify-between items-center text-sm sm:text-base font-bold mb-2">
                <span className="text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#8AB4FF]" />
                  MagFlow 25W Qi2 Ultra
                </span>
                <span className="font-mono-tech text-[#8AB4FF] text-base">{dev.magFlow25W} minutes</span>
              </div>
              <div className="w-full h-4 rounded-full bg-black/40 overflow-hidden p-0.5 border border-[#8AB4FF]/40">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(dev.magFlow25W / dev.standardQi) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#4A80E8] to-[#8AB4FF] rounded-full shadow-[0_0_15px_#8AB4FF]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#C7CBD1]/80 font-mono-tech">
                <span className="text-emerald-400 font-semibold">
                  ⚡ Saves ~{dev.standardQi - dev.magFlow25W} minutes vs standard wireless
                </span>
                <span className="text-cyan-400">CryoFlow -12°C Controlled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
