import React, { useState } from 'react';
import { Search, X, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.materials.toLowerCase().includes(q) ||
      p.powerOutput.toLowerCase().includes(q)
    );
  });

  const popularKeywords = ['Titanium Pad', '3-in-1 Stand', '10,000mAh', 'AirVent Car', 'Qi2 25W', 'CryoFlow'];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-start justify-center pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-[#0D0F13] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 text-white p-6"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <Search className="w-5 h-5 text-[#8AB4FF]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search MagFlow models, specifications, materials..."
              autoFocus
              className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-white/40 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/5 text-[#C7CBD1]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Suggested Keyword Chips */}
          <div className="py-4 flex flex-wrap items-center gap-2 border-b border-white/5">
            <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 mr-1">
              Suggested:
            </span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#C7CBD1] hover:text-white border border-white/5 transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Search Results */}
          <div className="py-4 space-y-3 max-h-80 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-10 text-xs text-[#C7CBD1]/50">
                No matching MagFlow products found for "{query}".
              </div>
            ) : (
              filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl bg-[#16181D]/80 hover:bg-[#1E222B] border border-white/5 hover:border-[#8AB4FF]/30 cursor-pointer flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover bg-black/40 border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#8AB4FF] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-xs text-[#C7CBD1]/60 line-clamp-1">{p.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <span className="text-xs font-mono-tech text-[#8AB4FF] font-bold">
                      {p.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#8AB4FF] transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
