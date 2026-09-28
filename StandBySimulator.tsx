import React, { useState, useEffect } from 'react';
import { RotateCw, Moon, Sun, Clock, Zap, Sparkles, Smartphone, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioFX } from '../utils/audio';

export const StandBySimulator: React.FC = () => {
  const [isLandscape, setIsLandscape] = useState(true);
  const [clockStyle, setClockStyle] = useState<'swiss' | 'cyber' | 'minimal'>('cyber');
  const [nightMode, setNightMode] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds();

  const handleToggleOrientation = () => {
    audioFX.playMagneticSnap();
    setIsLandscape(!isLandscape);
  };

  const handleToggleNight = () => {
    audioFX.playTick();
    setNightMode(!nightMode);
  };

  return (
    <section id="standby-lab" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]" />
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              INTERACTIVE STANDBY MODE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Transform Into An <span className="titanium-gradient-text">Ambient Sanctuary.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#C7CBD1]/75">
            When mounted in landscape on MagFlow, your smartphone automatically engages Qi2 25W StandBy.
            Customize the ambient dial and test nocturnal red-light sleep protection.
          </p>
        </div>

        {/* Simulator Workspace */}
        <div className="relative rounded-3xl overflow-hidden bg-[#16181D]/80 border border-white/10 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex flex-col items-center">
          {/* Controls Ribbon */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono-tech">
            <div className="flex items-center gap-2">
              <span className="text-[#C7CBD1]/60">CLOCK DIAL:</span>
              <button
                onClick={() => {
                  audioFX.playTick();
                  setClockStyle('cyber');
                }}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  clockStyle === 'cyber'
                    ? 'bg-[#8AB4FF] text-[#08090B] border-[#8AB4FF] font-bold'
                    : 'bg-white/5 text-[#C7CBD1] border-white/10 hover:border-white/30'
                }`}
              >
                CYBER HUD
              </button>
              <button
                onClick={() => {
                  audioFX.playTick();
                  setClockStyle('swiss');
                }}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  clockStyle === 'swiss'
                    ? 'bg-[#8AB4FF] text-[#08090B] border-[#8AB4FF] font-bold'
                    : 'bg-white/5 text-[#C7CBD1] border-white/10 hover:border-white/30'
                }`}
              >
                SWISS ANALOG
              </button>
              <button
                onClick={() => {
                  audioFX.playTick();
                  setClockStyle('minimal');
                }}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  clockStyle === 'minimal'
                    ? 'bg-[#8AB4FF] text-[#08090B] border-[#8AB4FF] font-bold'
                    : 'bg-white/5 text-[#C7CBD1] border-white/10 hover:border-white/30'
                }`}
              >
                TYPOGRAPHIC
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Night Mode Redshift Toggle */}
              <button
                onClick={handleToggleNight}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all ${
                  nightMode
                    ? 'bg-rose-900/40 text-rose-300 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                    : 'bg-white/5 text-[#C7CBD1] border-white/10'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>{nightMode ? 'Nocturnal Red Shift Active' : 'Enable Night Shift'}</span>
              </button>

              {/* Rotate Orientation */}
              <button
                onClick={handleToggleOrientation}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#8AB4FF]" />
                <span>{isLandscape ? 'Landscape 90°' : 'Portrait 0°'}</span>
              </button>
            </div>
          </div>

          {/* Simulated Floating Smartphone on Magnetic Stand */}
          <div className="my-10 relative flex flex-col items-center justify-center min-h-[360px]">
            {/* MagFlow Stand Base Silhouette */}
            <div className="absolute bottom-0 w-36 h-4 bg-gradient-to-r from-transparent via-[#282D38] to-transparent rounded-full blur-xs" />
            <div className="absolute bottom-4 w-4 h-36 bg-gradient-to-t from-[#20252F] to-[#343B49] rounded-full border border-white/10 shadow-lg" />
            <div className="absolute bottom-36 w-16 h-16 rounded-full bg-[#181B22] border-2 border-[#8AB4FF]/50 shadow-[0_0_30px_rgba(138,180,255,0.3)] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-dashed border-[#8AB4FF]/70 animate-spin" />
            </div>

            {/* Smartphone Enclosure */}
            <motion.div
              animate={{
                width: isLandscape ? '560px' : '280px',
                height: isLandscape ? '290px' : '480px',
                rotate: isLandscape ? 0 : 0,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 120 }}
              className={`relative z-10 rounded-[36px] p-3 border-4 shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-colors duration-500 flex flex-col items-center justify-center overflow-hidden ${
                nightMode
                  ? 'border-rose-900/60 bg-black'
                  : 'border-[#3E4554] bg-[#0A0C0F]'
              }`}
            >
              {/* Dynamic Island cutout */}
              <div className="absolute top-2 w-20 h-4 rounded-full bg-black border border-white/10 z-30" />

              {/* StandBy Display Screen */}
              <div
                className={`w-full h-full rounded-[28px] p-6 flex items-center justify-between relative overflow-hidden transition-colors duration-500 select-none ${
                  nightMode
                    ? 'text-rose-500 bg-gradient-to-tr from-black via-rose-950/20 to-black'
                    : 'text-white bg-gradient-to-tr from-[#08090B] via-[#101217] to-[#08090B]'
                }`}
              >
                {/* Dial Content 1: Cyber HUD */}
                {clockStyle === 'cyber' && (
                  <div className="w-full flex items-center justify-between gap-6">
                    {/* Time block */}
                    <div>
                      <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] opacity-60 mb-1 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5" />
                        <span>QI2 25W ACTIVE INDUCTION</span>
                      </div>
                      <div className="text-6xl sm:text-7xl font-bold font-mono-tech tracking-tighter">
                        {hours}:{minutes}
                      </div>
                      <div className="text-xs font-mono-tech opacity-70 mt-1">
                        {time.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                      </div>
                    </div>

                    {/* Telemetry Ring Widget */}
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 font-mono-tech text-xs">
                      <div className="relative w-20 h-20 rounded-full border-2 border-current/20 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">25.0W</span>
                        <span className="text-[8px] opacity-60 uppercase">Full Velocity</span>
                      </div>
                      <span className="mt-2 text-[10px] opacity-80">31.4°C CRYOFLOW</span>
                    </div>
                  </div>
                )}

                {/* Dial Content 2: Swiss Analog */}
                {clockStyle === 'swiss' && (
                  <div className="w-full flex items-center justify-around">
                    <div className="relative w-44 h-44 rounded-full border-2 border-current/30 flex items-center justify-center shadow-inner">
                      {/* 12, 3, 6, 9 markers */}
                      <span className="absolute top-2 text-xs font-mono-tech font-bold">12</span>
                      <span className="absolute right-3 text-xs font-mono-tech font-bold">3</span>
                      <span className="absolute bottom-2 text-xs font-mono-tech font-bold">6</span>
                      <span className="absolute left-3 text-xs font-mono-tech font-bold">9</span>

                      {/* Hour & Minute Hands */}
                      <div
                        className="absolute w-1 h-14 bg-current rounded-full origin-bottom bottom-1/2"
                        style={{
                          transform: `rotate(${((time.getHours() % 12) + time.getMinutes() / 60) * 30}deg)`,
                        }}
                      />
                      <div
                        className="absolute w-0.5 h-18 bg-current rounded-full origin-bottom bottom-1/2"
                        style={{
                          transform: `rotate(${time.getMinutes() * 6}deg)`,
                        }}
                      />
                      <div
                        className={`absolute w-0.5 h-20 rounded-full origin-bottom bottom-1/2 ${
                          nightMode ? 'bg-rose-400' : 'bg-[#8AB4FF]'
                        }`}
                        style={{
                          transform: `rotate(${seconds * 6}deg)`,
                        }}
                      />
                      <div className="w-3 h-3 rounded-full bg-current z-10" />
                    </div>

                    <div className="text-left font-mono-tech">
                      <span className="text-xs uppercase opacity-70 text-[#8AB4FF] font-bold block">UGREEN ATELIER</span>
                      <span className="text-3xl font-bold tracking-tight block">MAGFLOW</span>
                      <span className="text-xs opacity-80 mt-1 block">CHRONOMETER SPEC</span>
                      <div className="mt-3 text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 inline-block">
                        MAGNETIC LOCK: 16N
                      </div>
                    </div>
                  </div>
                )}

                {/* Dial Content 3: Typographic Minimal */}
                {clockStyle === 'minimal' && (
                  <div className="w-full text-center">
                    <div className="text-7xl sm:text-8xl font-extrabold tracking-tighter leading-none">
                      {hours}<span className="animate-pulse">:</span>{minutes}
                    </div>
                    <p className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.3em] opacity-60 mt-3">
                      SILENT ATELIER INDUCTION • 100% RECHARGED BY 07:00 AM
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="text-center text-xs font-mono-tech text-[#C7CBD1]/60">
            Compatible with all Qi2 and MagSafe iPhones running iOS 17 & iOS 18 StandBy Mode.
          </div>
        </div>
      </div>
    </section>
  );
};
