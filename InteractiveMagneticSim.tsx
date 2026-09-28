import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { RotateCw, Zap, Lock, RefreshCw, Sparkles, Volume2, VolumeX } from 'lucide-react';

export const InteractiveMagneticSim: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [watts, setWatts] = useState(0);
  const [chargeProgress, setChargeProgress] = useState(65);

  const handleManualSnap = () => {
    setIsLocked(true);
    setWatts(24.8);
    setChargeProgress((prev) => Math.min(100, prev + 2));

    // Optional audio synthetic click via Web Audio API if sound is enabled
    if (soundEnabled && typeof window !== 'undefined' && window.AudioContext) {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.09);
      } catch (e) {
        // audio context ignored if blocked
      }
    }
  };

  const handleReset = () => {
    setIsLocked(false);
    setWatts(0);
    setRotationAngle(0);
  };

  const handleRotate = (dir: 'left' | 'right') => {
    setRotationAngle((prev) => prev + (dir === 'left' ? -45 : 45));
  };

  return (
    <section id="simulator" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              05 / INTERACTIVE SIMULATOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Experience the <span className="blue-gradient-text">Magnetic Snap.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C7CBD1]/75">
            Test the acoustic snap lock and live 25W telemetry. Rotate the magnetic orientation or
            engage the NdFeB lock sequence.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="bg-[#121418] rounded-3xl border border-white/10 p-6 sm:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Top HUD Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isLocked ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                STATUS: {isLocked ? 'COUPLED (16N)' : 'AWAITING LOCK'}
              </span>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                title="Toggle Acoustic Snap Effect"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#8AB4FF]" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline font-mono-tech text-[10px]">ACOUSTIC SNAP</span>
              </button>
            </div>

            {/* Telemetry Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono-tech">
              <div className="bg-black/50 px-3 py-1.5 rounded-xl border border-white/5">
                <span className="text-[#C7CBD1]/50 block text-[9px]">ACTIVE WATTAGE</span>
                <span className="text-white font-bold">{watts > 0 ? `${watts} W` : '0.0 W'}</span>
              </div>
              <div className="bg-black/50 px-3 py-1.5 rounded-xl border border-white/5">
                <span className="text-[#C7CBD1]/50 block text-[9px]">DEVICE BATTERY</span>
                <span className="text-[#8AB4FF] font-bold">{chargeProgress}%</span>
              </div>
            </div>
          </div>

          {/* Center Stage: Interactive Magnetic Ring & Rotating Alignment Base */}
          <div className="py-16 flex flex-col items-center justify-center relative min-h-[380px]">
            {/* Magnetic Ring Base */}
            <motion.div
              animate={{ rotate: rotationAngle }}
              transition={{ type: 'spring', damping: 20, stiffness: 90 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-b from-[#1C1F26] to-[#0E1013] border-4 border-[#2F3440] shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center cursor-pointer group"
              onClick={handleManualSnap}
            >
              {/* Outer Titanium Bezel */}
              <div className="absolute inset-2 rounded-full border border-white/10" />

              {/* 16 Magnetic Nodes */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const dist = 92;
                const x = Math.cos(rad) * dist;
                const y = Math.sin(rad) * dist;
                return (
                  <div
                    key={i}
                    style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
                    className={`absolute w-3 h-1.5 rounded-full transition-all duration-300 ${
                      isLocked
                        ? 'bg-[#8AB4FF] shadow-[0_0_12px_#8AB4FF]'
                        : 'bg-white/20 group-hover:bg-[#8AB4FF]/50'
                    }`}
                  />
                );
              })}

              {/* Inner Concentric Magnetic Induction Glow */}
              <div
                className={`w-36 h-36 rounded-full border border-[#8AB4FF]/30 flex flex-col items-center justify-center transition-all duration-500 ${
                  isLocked ? 'bg-[#8AB4FF]/10 scale-105 shadow-[0_0_50px_rgba(138,180,255,0.4)]' : ''
                }`}
              >
                <Zap
                  className={`w-8 h-8 transition-all duration-500 ${
                    isLocked ? 'text-[#8AB4FF] scale-125 animate-pulse' : 'text-[#C7CBD1]/40'
                  }`}
                />
                <span className="text-[10px] font-mono-tech mt-1 text-[#C7CBD1]/60">
                  {isLocked ? '25W FAST FLOW' : 'TAP TO SNAP'}
                </span>
              </div>

              {/* Magnetic Lock Confirmation Ring */}
              {isLocked && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.15, opacity: 1 }}
                  className="absolute inset-0 rounded-full border-2 border-emerald-400/80 pointer-events-none"
                />
              )}
            </motion.div>
          </div>

          {/* Simulator Action Controls */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                id="sim-rotate-left-btn"
                onClick={() => handleRotate('left')}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5 -scale-x-100" />
                <span>Rotate -45°</span>
              </button>
              <button
                id="sim-rotate-right-btn"
                onClick={() => handleRotate('right')}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Rotate +45°</span>
              </button>
              <button
                id="sim-reset-btn"
                onClick={handleReset}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 transition-colors"
                title="Reset Simulator"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <button
              id="sim-engage-snap-btn"
              onClick={handleManualSnap}
              className="px-6 py-2.5 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(138,180,255,0.4)] transition-all"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isLocked ? 'Snap Locked' : 'Engage 16N Magnetic Snap'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
