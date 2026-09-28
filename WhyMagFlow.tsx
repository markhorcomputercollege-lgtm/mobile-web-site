import React from 'react';
import { Magnet, Feather, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyMagFlow: React.FC = () => {
  const pillars = [
    {
      title: 'Seamless Magnetic Alignment',
      subtitle: 'N52 Neodymium Ring Matrix',
      description:
        'Eliminates the frustration of dead spots. 16 oriented magnets guide your device into absolute inductive synchronization with an affirmative acoustic snap.',
      icon: <Magnet className="w-5 h-5 text-[#8AB4FF]" />,
    },
    {
      title: 'Refined Form',
      subtitle: 'Grade 5 Titanium & Billet Aluminum',
      description:
        'Sculpted with chamfered bevels and zero visible fasteners. Materials chosen for their thermodynamic thermal conductivity and architectural grace on any desk.',
      icon: <Feather className="w-5 h-5 text-[#8AB4FF]" />,
    },
    {
      title: 'Everyday Convenience',
      subtitle: 'StandBy Mode & Tactile Lift-Off',
      description:
        'Engineered with a calibrated base weight so you can effortlessly lift your device one-handed without dragging the charger or upsetting cables.',
      icon: <Clock className="w-5 h-5 text-[#8AB4FF]" />,
    },
    {
      title: 'Thoughtful Design',
      subtitle: 'Intelligent CryoFlow Dissipation',
      description:
        'An internal passive vapor chamber channels heat away from vulnerable smartphone battery chemistries, maintaining full 25W speeds without battery degradation.',
      icon: <Sparkles className="w-5 h-5 text-[#8AB4FF]" />,
    },
  ];

  return (
    <section id="pillars" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
              06 / CORE PRINCIPLES
            </span>
            <div className="h-[1px] w-8 bg-[#8AB4FF]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Engineered for <br />
            <span className="titanium-gradient-text">Everyday Elegance.</span>
          </h2>
          <p className="mt-4 text-base text-[#C7CBD1]/75">
            Designed around honesty in materials, acoustic satisfaction, and enduring utility. No
            superfluous gimmicks—pure, functional luxury.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-[#16181D]/60 border border-white/10 hover:border-[#8AB4FF]/30 transition-all duration-300 flex flex-col justify-between group hover:bg-[#16181D] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#8AB4FF]/10 group-hover:border-[#8AB4FF]/30 transition-colors">
                  {pillar.icon}
                </div>

                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#8AB4FF] block mb-1">
                  {pillar.subtitle}
                </span>

                <h3 className="text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C7CBD1]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#C7CBD1]/50 font-mono-tech">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8AB4FF]" />
                <span>MAGFLOW STANDARD 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
