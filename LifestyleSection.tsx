import React, { useState } from 'react';
import { LIFESTYLE_SCENES } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Compass } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const [activeSceneId, setActiveSceneId] = useState<string>(LIFESTYLE_SCENES[0].id);
  const activeScene = LIFESTYLE_SCENES.find((s) => s.id === activeSceneId) || LIFESTYLE_SCENES[0];

  return (
    <section id="lifestyle" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
                07 / ARCHITECTURAL SPACES
              </span>
              <div className="h-[1px] w-8 bg-[#8AB4FF]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              Power That Belongs <br />
              <span className="titanium-gradient-text">In Your Space.</span>
            </h2>
          </div>

          {/* Environment Tabs */}
          <div className="flex flex-wrap gap-2">
            {LIFESTYLE_SCENES.map((scene) => (
              <button
                key={scene.id}
                id={`lifestyle-tab-${scene.id}`}
                onClick={() => setActiveSceneId(scene.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeSceneId === scene.id
                    ? 'bg-[#8AB4FF] text-[#08090B] shadow-[0_0_20px_rgba(138,180,255,0.4)]'
                    : 'bg-[#16181D] text-[#C7CBD1]/80 hover:text-white border border-white/5'
                }`}
              >
                {scene.title}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Scene Presentation */}
        <div className="relative rounded-3xl overflow-hidden bg-[#16181D] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Visual Image */}
            <div className="lg:col-span-8 relative overflow-hidden aspect-video lg:aspect-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScene.id}
                  src={activeScene.image}
                  alt={activeScene.title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#16181D] opacity-90 hidden lg:block" />
            </div>

            {/* Content Details on the Right */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#16181D]">
              <div>
                <span className="text-xs font-mono-tech text-[#8AB4FF] uppercase tracking-wider block mb-2">
                  ENVIRONMENT: {activeScene.environment}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeScene.title}
                </h3>

                <p className="text-sm text-[#C7CBD1]/80 leading-relaxed mb-8">
                  {activeScene.description}
                </p>

                {/* Key scene virtues */}
                <div className="space-y-3">
                  {activeScene.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-[#C7CBD1]">
                      <div className="w-4 h-4 rounded-full bg-[#8AB4FF]/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#8AB4FF]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-[#C7CBD1]/50">
                <span>CURATED BY MAGFLOW ATELIER</span>
                <Compass className="w-4 h-4 text-[#8AB4FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
