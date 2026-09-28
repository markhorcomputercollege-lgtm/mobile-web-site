import React, { useState } from 'react';
import { Share2, QrCode, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioFX } from '../utils/audio';

interface FloatingShareWidgetProps {
  onOpenShareModal: () => void;
}

export const FloatingShareWidget: React.FC<FloatingShareWidgetProps> = ({ onOpenShareModal }) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleQuickCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioFX.playTick();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2">
      <motion.button
        id="floating-share-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          audioFX.playTick();
          onOpenShareModal();
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#16181D]/90 hover:bg-[#1E222B] border border-[#8AB4FF]/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(138,180,255,0.2)] backdrop-blur-xl transition-all group"
      >
        <div className="w-6 h-6 rounded-full bg-[#8AB4FF]/20 flex items-center justify-center text-[#8AB4FF] group-hover:scale-110 transition-transform">
          <Share2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-mono-tech uppercase tracking-wider font-semibold text-white">
          Share
        </span>

        {/* Quick Copy shortcut within pill */}
        <button
          onClick={handleQuickCopy}
          className="ml-1 pl-2 border-l border-white/15 text-[#C7CBD1]/70 hover:text-[#8AB4FF] transition-colors"
          title="Quick Copy Link"
        >
          {copied ? (
            <span className="text-[10px] text-emerald-400 font-mono-tech flex items-center gap-1">
              <Check className="w-3 h-3" />
              Copied
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </motion.button>
    </div>
  );
};
