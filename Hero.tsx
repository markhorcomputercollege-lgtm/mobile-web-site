import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Zap, RotateCw, CheckCircle2, Volume2, VolumeX, Shield, Sparkles } from 'lucide-react';
import { audioFX } from '../utils/audio';

interface HeroProps {
  onExploreClick: () => void;
  onLineupClick: () => void;
  onOpenPitch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onLineupClick, onOpenPitch }) => {
  const [isSnapped, setIsSnapped] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(76);
  const [selectedFinish, setSelectedFinish] = useState<'obsidian' | 'titanium' | 'silver' | 'blue'>('obsidian');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const finishes = [
    { id: 'obsidian', name: 'Obsidian Black', hex: '#121418', border: '#333842' },
    { id: 'titanium', name: 'Natural Titanium', hex: '#8B919D', border: '#A2A9B6' },
    { id: 'silver', name: 'Frosted Silver', hex: '#D8DCE3', border: '#E8ECF2' },
    { id: 'blue', name: 'Electric Atelier', hex: '#264278', border: '#8AB4FF' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const triggerSnapSimulation = () => {
    setIsSnapped(true);
    audioFX.playMagneticSnap();
    setTimeout(() => {
      audioFX.playChargingChime();
    }, 150);

    setBatteryLevel((prev) => Math.min(100, prev + 2));
  };

  const handleRelease = () => {
    setIsSnapped(false);
    audioFX.playTick();
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#08090B]"
    >
      {/* Dynamic Ambient Spotlights based on Finish */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] blur-[160px] pointer-events-none rounded-full transition-colors duration-700 ${
          selectedFinish === 'blue'
            ? 'bg-[#8AB4FF]/20'
            : selectedFinish === 'silver'
            ? 'bg-white/10'
            : 'bg-[#8AB4FF]/10'
        }`}
      />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#537AE0]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Studio Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C7CBD1 1px, transparent 1px), linear-gradient(90deg, #C7CBD1 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-4 sm:mt-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#8AB4FF] animate-ping" />
          <span className="text-[11px] font-mono-tech tracking-[0.25em] text-[#C7CBD1] uppercase font-semibold">
            UGREEN ATELIER • THE NEXT GENERATION OF MAGNETIC POWER
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase"
        >
          UGREEN MAGFLOW. <br className="hidden sm:inline" />
          Power, Perfectly <span className="titanium-gradient-text">Aligned.</span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#C7CBD1]/80 leading-relaxed font-normal mb-6"
        >
          UGREEN presents a refined magnetic charging experience engineered around seamless 16N alignment,
          sculpted Grade 5 titanium, and official Qi2 25W velocity.
        </motion.p>

        {/* Finish Switcher on Hero */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <span className="text-[10px] font-mono-tech uppercase text-[#C7CBD1]/50 mr-2">
            Finish:
          </span>
          {finishes.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setSelectedFinish(f.id as any);
                audioFX.playTick();
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech transition-all duration-300 border ${
                selectedFinish === f.id
                  ? 'bg-white/10 text-white border-[#8AB4FF] shadow-[0_0_15px_rgba(138,180,255,0.3)]'
                  : 'bg-black/40 text-[#C7CBD1]/60 border-white/5 hover:border-white/20'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full border border-white/30"
                style={{ backgroundColor: f.hex }}
              />
              <span>{f.name}</span>
            </button>
          ))}
        </div>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="px-8 py-3.5 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(138,180,255,0.35)] hover:shadow-[0_0_40px_rgba(138,180,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore MagFlow
          </button>
          <button
            id="hero-lineup-btn"
            onClick={onLineupClick}
            className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            Discover the Lineup
          </button>
          <button
            id="hero-pitch-btn"
            onClick={onOpenPitch}
            className="px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-[#8AB4FF]/30 font-medium text-xs tracking-wider uppercase font-mono-tech transition-all duration-300 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8AB4FF]" />
            <span>Client Deck Mode</span>
          </button>
        </motion.div>
      </div>

      {/* Cinematic Centerpiece Product Presentation with 3D Tilt & Magnetic Snap */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 my-2 flex flex-col items-center">
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="relative w-full max-w-2xl rounded-3xl p-1 bg-gradient-to-b from-[#C7CBD1]/20 via-[#16181D]/80 to-[#08090B] shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          {/* Inner Studio Bezel */}
          <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-[#16181D] to-[#0D0F13] p-4 sm:p-6 border border-white/10">
            {/* Product Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0A0C0F] flex items-center justify-center group">
              <img
                src="/src/assets/images/magflow_hero_pad_1790064716297.jpg"
                alt="MagFlow 25W Ultra Pad Luxury Magnetic Charger"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Holographic Magnetic Ring Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
                  isSnapped ? 'opacity-100' : 'opacity-60'
                }`}
              >
                {/* Concentric Pulse Rings */}
                <div
                  className={`w-36 h-36 rounded-full border border-[#8AB4FF]/40 flex items-center justify-center transition-all duration-700 ${
                    isSnapped
                      ? 'scale-110 border-[#8AB4FF] shadow-[0_0_50px_rgba(138,180,255,0.8)]'
                      : 'animate-pulse'
                  }`}
                >
                  <div className="w-24 h-24 rounded-full border border-dashed border-[#8AB4FF]/60 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-12 h-12 rounded-full bg-[#8AB4FF]/20 backdrop-blur-md flex items-center justify-center border border-[#8AB4FF]">
                      <Zap className="w-5 h-5 text-[#8AB4FF] animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Floating Smartphone Lock Graphic when Snapped */}
              {isSnapped && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: -20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  className="absolute inset-x-8 inset-y-6 rounded-2xl border-2 border-[#8AB4FF]/60 bg-black/65 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl p-6 pointer-events-none"
                >
                  {/* Circular Charging Ring (Apple Style) */}
                  <div className="relative w-28 h-28 rounded-full border-4 border-[#8AB4FF]/30 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8AB4FF] border-r-emerald-400"
                    />
                    <Zap className="w-6 h-6 text-emerald-400 animate-pulse mb-1" />
                    <span className="text-xl font-mono-tech font-bold text-white">
                      {batteryLevel}%
                    </span>
                    <span className="text-[9px] font-mono-tech text-[#8AB4FF] uppercase tracking-wider">
                      25W QI2
                    </span>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-xs font-semibold text-white block">
                      MagFlow Magnetic Lock Engaged
                    </span>
                    <span className="text-[10px] font-mono-tech text-emerald-400">
                      16N Rare Earth Polar Attraction • CryoFlow Active
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Real-time Magnetic HUD Status Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-[#08090B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono-tech">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSnapped ? 'bg-emerald-400 animate-ping' : 'bg-[#8AB4FF]'
                    }`}
                  />
                  <span className="text-[#C7CBD1]">
                    {isSnapped ? 'MAGNETIC CLAMP: 16N LOCKED' : 'ALIGNMENT TARGET: READY'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-[#08090B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono-tech text-white">
                  <Zap className="w-3.5 h-3.5 text-[#8AB4FF]" />
                  <span>25W QI2 ACTIVE</span>
                </div>
              </div>

              {/* Interactive Snap Trigger button */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-3">
                {isSnapped ? (
                  <button
                    id="hero-release-snap-btn"
                    onClick={handleRelease}
                    className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-[#08090B] font-bold text-xs flex items-center gap-2 transition-all duration-300 shadow-xl pointer-events-auto"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Magnetic Lock 16N Active (Click to Release)</span>
                  </button>
                ) : (
                  <button
                    id="hero-simulate-snap-btn"
                    onClick={triggerSnapSimulation}
                    className="px-5 py-2.5 rounded-full bg-[#08090B]/90 hover:bg-[#8AB4FF] text-[#C7CBD1] hover:text-[#08090B] border border-white/20 hover:border-[#8AB4FF] backdrop-blur-md text-xs font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg pointer-events-auto"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-[#8AB4FF]" />
                    <span>Test Interactive Magnetic Snap & Sound</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Spec Ribbon below image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/5 text-left">
              <div>
                <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                  Power Rate
                </span>
                <span className="text-sm font-semibold text-white">25W Qi2 Certified</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                  Hold Force
                </span>
                <span className="text-sm font-semibold text-white">16N Rare Earth Array</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                  Chassis Finish
                </span>
                <span className="text-sm font-semibold text-white capitalize">
                  {finishes.find((f) => f.id === selectedFinish)?.name}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                  Thermals
                </span>
                <span className="text-sm font-semibold text-[#8AB4FF]">CryoFlow Active -12°C</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator at bottom */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 mt-4 text-[#C7CBD1]/50 hover:text-white transition-colors cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[10px] tracking-[0.2em] font-mono-tech uppercase">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#8AB4FF]" />
        </motion.div>
      </div>
    </section>
  );
};
