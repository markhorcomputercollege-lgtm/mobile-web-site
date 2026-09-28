import React from 'react';
import { PRODUCTS } from '../data/products';
import { Check, Minus, Info } from 'lucide-react';
import { Product } from '../types';

interface ComparisonTableProps {
  onSelectProduct: (product: Product) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectProduct }) => {
  const comparisonRows = [
    { label: 'Form Factor', values: ['Desktop Disc', '3-in-1 Foldable Stand', 'Magnetic Battery Pack', 'Vehicle Vent Mount'] },
    { label: 'Wireless Standard', values: ['Qi2 25W Certified', 'Qi2 25W Multi-Rail', 'Qi2 25W + 30W USB-C', 'Qi2 25W Turbo'] },
    { label: 'Simultaneous Devices', values: ['1 Device', '3 Devices (Phone, Watch, Buds)', '2 Devices (Wireless + USB-C)', '1 Device'] },
    { label: 'Primary Material', values: ['Grade 5 Titanium', 'Anodized Billet Aluminum', 'Sandblasted Graphite Alloy', 'Aviation Aluminum + Polycarbonate'] },
    { label: 'Magnetic Clamping Force', values: ['16N Rare Earth', '16N Rare Earth', '14N High Grip', '18N Heavy Duty'] },
    { label: 'Cooling Technology', values: ['CryoFlow Passive Vapor', 'Convection Thermal Base', 'Heat-Spread Graphene', 'Active 4,200 RPM Whisper Fan'] },
    { label: 'StandBy Mode Support', values: [true, true, true, true] },
    { label: 'Carry-On Friendly', values: [true, true, true, true] },
    { label: 'Pricing', values: ['$79.00', '$139.00', '$89.00', '$69.00'] },
  ];

  return (
    <section id="compare" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0F13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.2em] text-[#C7CBD1] uppercase">
              09 / LINEUP MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Side-by-Side <span className="titanium-gradient-text">Comparison.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C7CBD1]/75">
            Identify the precise UGREEN MagFlow configuration engineered for your daily routine.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#16181D]/80 shadow-2xl backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-6 text-xs font-mono-tech uppercase text-[#C7CBD1]/50 w-1/5">
                  Specification
                </th>
                {PRODUCTS.map((p) => (
                  <th key={p.id} className="p-6 text-center w-1/5">
                    <span className="text-sm font-bold text-white block mb-1">{p.name}</span>
                    <span className="text-xs font-mono-tech text-[#8AB4FF]">{p.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-medium text-[#C7CBD1] font-mono-tech text-xs">
                    {row.label}
                  </td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="p-5 text-center text-white/90">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check className="w-4 h-4 text-[#8AB4FF] mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-white/20 mx-auto" />
                        )
                      ) : (
                        <span>{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6 font-medium text-[#C7CBD1] font-mono-tech text-xs">Explore</td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} className="p-6 text-center">
                    <button
                      onClick={() => onSelectProduct(p)}
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#8AB4FF] text-white hover:text-[#08090B] border border-white/10 text-xs font-semibold transition-all duration-200"
                    >
                      Inspect Specs
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-[#C7CBD1]/50">
          <span className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#8AB4FF]" />
            Specifications verified under standard 20°C ambient test conditions.
          </span>
          <span>COMPLIANCE: QI2, FCC, CE, ROHS</span>
        </div>
      </div>
    </section>
  );
};
