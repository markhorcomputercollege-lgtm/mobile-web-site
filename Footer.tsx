import React, { useState } from 'react';
import { ArrowRight, Check, Zap, Globe, Share2, QrCode } from 'lucide-react';
import { audioFX } from '../utils/audio';

interface FooterProps {
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      audioFX.playTick();
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-20 pb-12 px-6 sm:px-8 text-[#C7CBD1]/70">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#16181D] border border-white/20 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full border border-[#8AB4FF] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#8AB4FF]" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] font-bold">
                  UGREEN
                </span>
                <span className="text-white/30 text-xs">/</span>
                <span className="font-display font-extrabold text-lg tracking-[0.2em] text-white">
                  MAGFLOW
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C7CBD1]/70 max-w-sm leading-relaxed">
              UGREEN MagFlow Atelier. Power that flows. Designed for the future. An original luxury technological collaboration
              exploring precision 25W magnetic induction, Grade 5 titanium, and minimalist living.
            </p>

            {onOpenShare && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    audioFX.playTick();
                    onOpenShare();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-[#8AB4FF]/30 text-xs font-mono-tech uppercase text-white hover:text-[#8AB4FF] transition-all"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#8AB4FF]" />
                  <span>Share Presentation Suite (WhatsApp, X, QR)</span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-white block mb-2">
              Atelier Dispatch & Releases
            </span>
            <p className="text-xs text-[#C7CBD1]/60 mb-4">
              Receive private dispatches regarding limited titanium finishes and firmware drops.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#8AB4FF]/10 border border-[#8AB4FF]/30 text-[#8AB4FF] text-xs font-mono-tech flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you. You have been registered for private MagFlow dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="atelier@domain.com"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#8AB4FF] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#8AB4FF] text-white hover:text-[#08090B] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Tier: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5 text-xs">
          <div>
            <h4 className="font-mono-tech uppercase text-white tracking-wider font-semibold mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#lineup" className="hover:text-white transition-colors">MagFlow 25W Ultra Pad</a></li>
              <li><a href="#lineup" className="hover:text-white transition-colors">3-in-1 Foldable Stand</a></li>
              <li><a href="#lineup" className="hover:text-white transition-colors">PowerBank 10,000mAh</a></li>
              <li><a href="#lineup" className="hover:text-white transition-colors">AirVent Pro Vehicle Mount</a></li>
              <li><a href="#lineup" className="hover:text-white transition-colors">Braided Kevlar Cables</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-tech uppercase text-white tracking-wider font-semibold mb-4">
              Interactive Labs
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#thermal-lab" className="hover:text-white transition-colors">CryoFlow Thermal Slider</a></li>
              <li><a href="#standby-lab" className="hover:text-white transition-colors">Apple iOS StandBy Mode Simulator</a></li>
              <li><a href="#compatibility-checker" className="hover:text-white transition-colors">Device Compatibility Diagnostic</a></li>
              <li><a href="#macro-titanium" className="hover:text-white transition-colors">2.5x Titanium Loupe Inspector</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Interactive 16N Snap Lab</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-tech uppercase text-white tracking-wider font-semibold mb-4">
              Support & Tech
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#compatibility-checker" className="hover:text-white transition-colors">Device Compatibility Guide</a></li>
              <li><a href="#thermal-lab" className="hover:text-white transition-colors">CryoFlow Thermal Whitepaper</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">2-Year Atelier Warranty</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Qi2 25W Compliance #9822</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-tech uppercase text-white tracking-wider font-semibold mb-4">
              Client & Atelier
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-white/80">Concept & Industrial Design</span></li>
              <li><span className="text-white/80">Grade 5 Titanium Metallurgy</span></li>
              <li><span className="text-white/80">Laser CNC Engraving Suite</span></li>
              <li>
                <button
                  onClick={() => onOpenShare?.()}
                  className="text-[#8AB4FF] hover:underline flex items-center gap-1"
                >
                  <Share2 className="w-3 h-3" />
                  <span>Open Client Share Links</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#C7CBD1]/40">
          <div>
            © {new Date().getFullYear()} UGREEN TECHNOLOGY CO., LTD. & MAGFLOW ATELIER. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#8AB4FF]">
              <Globe className="w-3.5 h-3.5" />
              Global English (US)
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>WPC Qi2 License #9822</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
