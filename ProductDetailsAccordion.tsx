import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, HelpCircle, Package, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetailsAccordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('compatibility');

  const sections = [
    {
      id: 'compatibility',
      title: 'Ecosystem & Device Compatibility',
      icon: <Layers className="w-4 h-4 text-[#8AB4FF]" />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#C7CBD1]/80">
          <p>
            MagFlow 25W is built on the universal WPC Qi2 standard and backwards-compatible with
            Apple MagSafe magnetic arrays.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/90">
            <li>
              <strong>Apple iPhone:</strong> iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max, iPhone 15 /
              14 / 13 / 12 series.
            </li>
            <li>
              <strong>Cases:</strong> Official MagSafe cases, Qi2 certified cases, and third-party
              magnetic cases up to 3.0mm thickness.
            </li>
            <li>
              <strong>Android Flagships:</strong> Qi2-enabled smartphones and devices equipped with
              Qi2 magnetic adapter cases.
            </li>
            <li>
              <strong>Audio:</strong> AirPods Pro (2nd Gen / 3rd Gen) with MagSafe charging case.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'safety',
      title: 'Multi-Tiered Safety & Thermal Safeguards',
      icon: <ShieldCheck className="w-4 h-4 text-[#8AB4FF]" />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#C7CBD1]/80">
          <p>
            Equipped with proprietary <strong>Sentinel MCU</strong> microchips monitoring current,
            voltage, and thermals at 200 Hz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-white font-semibold block mb-1">Foreign Object Detection (FOD)</span>
              <p className="text-xs text-[#C7CBD1]/60">
                Immediately shuts off power if keys, coins, or metallic items enter the induction field.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-white font-semibold block mb-1">CryoFlow Dynamic Thermal Throttling</span>
              <p className="text-xs text-[#C7CBD1]/60">
                Adjusts wattage curves smoothly to prevent battery temperatures from exceeding 38°C.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'in-the-box',
      title: 'In The Box & Unboxing Experience',
      icon: <Package className="w-4 h-4 text-[#8AB4FF]" />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#C7CBD1]/80">
          <p>
            Packaged in luxury recycled matte graphite unboxing presentation with magnetic closure.
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
            <li>MagFlow 25W Ultra Magnetic Device</li>
            <li>1.5m Reinforced Braided Kevlar USB-C to USB-C Cable</li>
            <li>Titanium Cable Organizer Clip</li>
            <li>Numbered Authenticity Certificate & 24-Month Global Warranty</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'support-warranty',
      title: 'Global Atelier Warranty & Care',
      icon: <HelpCircle className="w-4 h-4 text-[#8AB4FF]" />,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-[#C7CBD1]/80">
          <p>
            Every MagFlow device is backed by a 2-year complimentary concierge warranty covering
            manufacturing integrity, magnetic flux decay, and electronic MCU regulation.
          </p>
          <p className="text-xs text-[#8AB4FF] font-mono-tech">
            Atelier Support: concierge@magflow.design | 24/7 Priority Assistance
          </p>
        </div>
      ),
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section id="specifications" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              10 / TECHNICAL REPOSITORY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Specifications & <span className="titanium-gradient-text">Assurance.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C7CBD1]/75">
            Transparent engineering documentation for discerning owners.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {sections.map((sec) => {
            const isOpen = openSection === sec.id;
            return (
              <div
                key={sec.id}
                className="rounded-2xl border border-white/10 bg-[#16181D]/70 overflow-hidden transition-all"
              >
                <button
                  id={`accordion-btn-${sec.id}`}
                  onClick={() => toggleSection(sec.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5">{sec.icon}</div>
                    <span className="font-semibold text-white text-sm sm:text-base">
                      {sec.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C7CBD1] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#8AB4FF]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-2 border-t border-white/5"
                    >
                      {sec.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
