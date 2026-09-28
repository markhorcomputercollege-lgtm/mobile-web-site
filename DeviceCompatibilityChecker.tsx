import React, { useState } from 'react';
import { Smartphone, CheckCircle2, AlertCircle, Zap, Shield, Search, ArrowRight, BatteryCharging } from 'lucide-react';
import { audioFX } from '../utils/audio';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface DeviceCompatibilityCheckerProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

interface DeviceProfile {
  name: string;
  category: 'iPhone' | 'Android' | 'Audio / Watch';
  qi2Native: boolean;
  maxWattage: string;
  magneticBuiltIn: boolean;
  standBySupported: boolean;
  chargeTimeTo80: string;
  note: string;
  recommendedProduct: Product;
}

export const DeviceCompatibilityChecker: React.FC<DeviceCompatibilityCheckerProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const devices: DeviceProfile[] = [
    {
      name: 'Apple iPhone 16 Pro / 16 Pro Max',
      category: 'iPhone',
      qi2Native: true,
      maxWattage: '25W Full Velocity',
      magneticBuiltIn: true,
      standBySupported: true,
      chargeTimeTo80: '32 mins',
      note: 'Full 25W Qi2 fast charging unlocked with CryoFlow thermal management.',
      recommendedProduct: PRODUCTS[0],
    },
    {
      name: 'Apple iPhone 16 / 16 Plus',
      category: 'iPhone',
      qi2Native: true,
      maxWattage: '25W Full Velocity',
      magneticBuiltIn: true,
      standBySupported: true,
      chargeTimeTo80: '34 mins',
      note: 'Full Qi2 25W multi-rail support with 16N rare-earth snap.',
      recommendedProduct: PRODUCTS[0],
    },
    {
      name: 'Apple iPhone 15 / 14 / 13 / 12 Pro Series',
      category: 'iPhone',
      qi2Native: true,
      maxWattage: '15W Certified Qi2',
      magneticBuiltIn: true,
      standBySupported: true,
      chargeTimeTo80: '46 mins',
      note: 'Direct magnetic snapping with official iOS battery widget integration.',
      recommendedProduct: PRODUCTS[1],
    },
    {
      name: 'Samsung Galaxy S24 Ultra / S24+',
      category: 'Android',
      qi2Native: true,
      maxWattage: '15W Fast Wireless',
      magneticBuiltIn: false,
      standBySupported: true,
      chargeTimeTo80: '52 mins',
      note: 'Requires standard Qi2 magnetic case or MagFlow steel adapter ring.',
      recommendedProduct: PRODUCTS[2],
    },
    {
      name: 'Google Pixel 9 / 9 Pro',
      category: 'Android',
      qi2Native: true,
      maxWattage: '15W Qi Standard',
      magneticBuiltIn: false,
      standBySupported: false,
      chargeTimeTo80: '58 mins',
      note: 'Charges wirelessly; magnetic auto-alignment active with magnetic case.',
      recommendedProduct: PRODUCTS[0],
    },
    {
      name: 'Apple AirPods Pro 2 / AirPods 4',
      category: 'Audio / Watch',
      qi2Native: true,
      maxWattage: '5W Precision Induction',
      magneticBuiltIn: true,
      standBySupported: false,
      chargeTimeTo80: '38 mins',
      note: 'N52 ring snaps earbuds firmly to center coil, avoiding misalignment.',
      recommendedProduct: PRODUCTS[1],
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'iPhone' | 'Android' | 'Audio / Watch'>('All');
  const [selectedDevice, setSelectedDevice] = useState<DeviceProfile>(devices[0]);

  const filtered = devices.filter((d) => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="compatibility-checker" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]" />
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              ECOSYSTEM INTELLIGENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Check Your <span className="blue-gradient-text">Device Compatibility.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#C7CBD1]/75">
            Select or search your smartphone to confirm UGREEN MagFlow 25W Qi2 compatibility, magnetic lock force,
            and estimated recharge velocity.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#16181D] border border-white/5 text-xs font-mono-tech">
            {(['All', 'iPhone', 'Android', 'Audio / Watch'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  audioFX.playTick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#8AB4FF] text-[#08090B] font-bold shadow-sm'
                    : 'text-[#C7CBD1]/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8AB4FF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your phone or device..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#16181D] border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#8AB4FF]"
            />
          </div>
        </div>

        {/* Two-Column Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Device Selector List */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
            {filtered.map((d) => {
              const isSelected = selectedDevice.name === d.name;
              return (
                <div
                  key={d.name}
                  onClick={() => {
                    audioFX.playTick();
                    setSelectedDevice(d);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181C24] border-[#8AB4FF] shadow-[0_0_20px_rgba(138,180,255,0.15)]'
                      : 'bg-[#121418] border-white/5 hover:bg-[#16181D] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-[#8AB4FF] text-[#08090B]' : 'bg-white/5 text-[#C7CBD1]'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{d.name}</h4>
                      <span className="text-[11px] font-mono-tech text-[#8AB4FF]">
                        {d.maxWattage}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Qi2 Ready
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnostic Card */}
          <div className="lg:col-span-6 rounded-3xl bg-[#16181D] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#8AB4FF] block mb-1">
                  COMPATIBILITY REPORT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedDevice.name}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#8AB4FF]/10 border border-[#8AB4FF]/30 flex items-center justify-center text-[#8AB4FF]">
                <Zap className="w-6 h-6" />
              </div>
            </div>

            {/* Matrix Metrics */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono-tech">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#C7CBD1]/60 block mb-1">MAX CHARGING VELOCITY</span>
                <span className="text-base font-bold text-white">{selectedDevice.maxWattage}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#C7CBD1]/60 block mb-1">0-80% DURATION</span>
                <span className="text-base font-bold text-emerald-400">
                  {selectedDevice.chargeTimeTo80}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#C7CBD1]/60 block mb-1">MAGNETIC ATTRACTION</span>
                <span className="text-white font-semibold">
                  {selectedDevice.magneticBuiltIn ? 'Built-in 16N Snap' : 'Requires Mag Case'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#C7CBD1]/60 block mb-1">STANDBY HORIZONTAL DOCK</span>
                <span className="text-white font-semibold">
                  {selectedDevice.standBySupported ? 'Full Support' : 'Standard Charging'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C7CBD1]/80 leading-relaxed p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              {selectedDevice.note}
            </p>

            {/* Recommended Model Match */}
            <div className="pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono-tech text-[#C7CBD1]/60 uppercase block mb-3">
                Recommended MagFlow Match:
              </span>
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedDevice.recommendedProduct.image}
                    alt={selectedDevice.recommendedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover bg-black border border-white/10"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      {selectedDevice.recommendedProduct.name}
                    </h5>
                    <span className="text-xs font-mono-tech text-[#8AB4FF]">
                      {selectedDevice.recommendedProduct.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(selectedDevice.recommendedProduct)}
                    className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono-tech text-white border border-white/15 transition-colors"
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => onAddToCart(selectedDevice.recommendedProduct)}
                    className="px-4 py-1.5 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] text-xs font-bold font-mono-tech uppercase transition-all"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
