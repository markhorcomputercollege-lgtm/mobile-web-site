import React from 'react';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PremiumCTAProps {
  onExploreProducts: () => void;
  onOpenOrder: () => void;
}

export const PremiumCTA: React.FC<PremiumCTAProps> = ({
  onExploreProducts,
  onOpenOrder,
}) => {
  return (
    <section id="cta" className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#08090B] via-[#101217] to-[#08090B] relative overflow-hidden border-t border-white/5">
      {/* Central luxury ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-[#8AB4FF]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 backdrop-blur-md"
        >
          <Zap className="w-3.5 h-3.5 text-[#8AB4FF]" />
          <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase font-semibold">
            THE ATELIER COLLECTION
          </span>
        </motion.div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
          Find Your <br />
          <span className="blue-gradient-text">Perfect Flow.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#C7CBD1]/80 mb-10 leading-relaxed font-normal">
          Explore a more refined approach to magnetic charging. Grade 5 titanium, certified Qi2 25W
          velocity, and silence in motion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="cta-explore-btn"
            onClick={onExploreProducts}
            className="px-8 py-4 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_35px_rgba(138,180,255,0.4)] hover:shadow-[0_0_50px_rgba(138,180,255,0.7)] hover:scale-105 active:scale-95"
          >
            Explore All Creations
          </button>
          <button
            id="cta-order-btn"
            onClick={onOpenOrder}
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <span>Express Checkout Bag</span>
            <ArrowRight className="w-4 h-4 text-[#8AB4FF]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono-tech text-[#C7CBD1]/60">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8AB4FF]" />
            2-Year Global Atelier Guarantee
          </span>
          <span>•</span>
          <span>Complimentary Carbon-Neutral Courier Delivery</span>
          <span>•</span>
          <span>30-Day Aesthetic Trial</span>
        </div>
      </div>
    </section>
  );
};
