import React, { useState } from 'react';
import { X, Sparkles, Check, Download, Layers, ShieldCheck, DollarSign, Award, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioFX } from '../utils/audio';

interface ClientPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPitchModal: React.FC<ClientPitchModalProps> = ({ isOpen, onClose }) => {
  const [customBrand, setCustomBrand] = useState('MAGFLOW');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPitch = () => {
    audioFX.playTick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl bg-[#0D0F13] border border-[#8AB4FF]/30 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10 text-white my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#16181D] to-[#0D0F13]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8AB4FF]/20 border border-[#8AB4FF]/40 flex items-center justify-center text-[#8AB4FF]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                  <span>Client Presentation Deck & OEM Customizer</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-[#8AB4FF] text-[#08090B] font-extrabold">
                    EXECUTIVE
                  </span>
                </h3>
                <p className="text-xs text-[#C7CBD1]/60 font-mono-tech">
                  Confidential Lineup Specifications, Unit Economics & Co-Branding Preview
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#C7CBD1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
            {/* Interactive Co-Branding Laser Etch Visualizer */}
            <div className="p-6 rounded-2xl bg-[#16181D] border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono-tech text-[#8AB4FF] uppercase tracking-wider block">
                    Interactive Co-Branding Studio
                  </span>
                  <p className="text-xs text-[#C7CBD1]/70">
                    Type your brand or client name to preview custom CNC laser engraving on the titanium chassis:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    maxLength={18}
                    value={customBrand}
                    onChange={(e) => setCustomBrand(e.target.value.toUpperCase())}
                    placeholder="ENTER BRAND"
                    className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/20 text-xs font-mono-tech tracking-widest text-[#8AB4FF] focus:outline-none focus:border-[#8AB4FF]"
                  />
                </div>
              </div>

              {/* Mock Titanium Charger Bevel with Live Engraved Brand */}
              <div className="h-28 rounded-xl bg-gradient-to-r from-[#181B22] via-[#282D38] to-[#181B22] border-2 border-[#545B6A] flex items-center justify-between px-8 relative overflow-hidden shadow-inner">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#8AB4FF]/40 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#8AB4FF]/30 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold tracking-[0.25em] text-white text-base sm:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {customBrand || 'UGREEN × MAGFLOW'}
                    </span>
                    <span className="block text-[9px] font-mono-tech tracking-[0.2em] text-[#C7CBD1]/60">
                      25W QI2 • BILLET TITANIUM Ti-6Al-4V • ATELIER
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono-tech text-emerald-400 block">
                    CNC TOLERANCE: ±0.015 MM
                  </span>
                  <span className="text-[9px] font-mono-tech text-[#C7CBD1]/40">
                    PATENT PENDING MAG-RING™
                  </span>
                </div>
              </div>
            </div>

            {/* Financial & Unit Economics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#16181D]/60 border border-white/10">
                <span className="text-[10px] font-mono-tech uppercase text-[#C7CBD1]/60 block mb-1">
                  Estimated BOM / COGS
                </span>
                <span className="text-2xl font-bold font-mono-tech text-white">$19.80 - $22.40</span>
                <p className="text-[11px] text-[#C7CBD1]/60 mt-2">
                  Includes Grade 5 Ti bezel, 16x N52 array, Qi2 copper coil & Kevlar cable.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#16181D]/60 border border-white/10">
                <span className="text-[10px] font-mono-tech uppercase text-[#C7CBD1]/60 block mb-1">
                  Recommended MSRP
                </span>
                <span className="text-2xl font-bold font-mono-tech text-[#8AB4FF]">$79.00 - $89.00</span>
                <p className="text-[11px] text-[#C7CBD1]/60 mt-2">
                  Luxury electronics positioning matching Bang & Olufsen and Apple Hermès tier.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#16181D]/60 border border-white/10">
                <span className="text-[10px] font-mono-tech uppercase text-[#C7CBD1]/60 block mb-1">
                  Gross Margin Profile
                </span>
                <span className="text-2xl font-bold font-mono-tech text-emerald-400">72.4% - 76.1%</span>
                <p className="text-[11px] text-[#C7CBD1]/60 mt-2">
                  Exceptional DTC contribution margin with sub-$3 air-courier footprint.
                </p>
              </div>
            </div>

            {/* Regulatory & Tooling Status */}
            <div className="p-5 rounded-2xl bg-[#16181D]/40 border border-white/10 space-y-3">
              <span className="text-xs font-mono-tech text-white uppercase tracking-wider block">
                Production Readiness Milestones
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-tech">
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>WPC Qi2 Spec 2.0</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>CE / FCC / RoHS</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>CryoFlow Thermal</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>FSC Luxury Box</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-[#16181D] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono-tech text-[#C7CBD1]/60">
              PRESENTATION CONFIDENTIAL • ATELIER PROTOTYPE V4
            </div>

            <button
              onClick={handleCopyPitch}
              className="px-6 py-2.5 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(138,180,255,0.3)]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Deck Summary Copied!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Copy Presentation Brief</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
