import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Zap, Info, Package, Layers, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { audioFX } from '../utils/audio';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string) => void;
  onShare?: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onShare,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]?.name || 'Default');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
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
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl bg-[#0D0F13] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 text-white my-auto max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            id="close-product-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#08090B]/80 text-[#C7CBD1] hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto flex-1 p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Product Image Gallery */}
              <div className="md:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square bg-[#16181D] border border-white/10 relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#8AB4FF] uppercase">
                    {product.badge || 'Qi2 Certified'}
                  </div>
                </div>

                {/* Color swatches */}
                <div>
                  <span className="text-xs font-mono-tech uppercase text-[#C7CBD1]/60 block mb-2">
                    Finish: <span className="text-white font-semibold">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-3">
                    {product.colorOptions.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor === c.name
                            ? 'border-[#8AB4FF] scale-110 shadow-[0_0_10px_#8AB4FF]'
                            : 'border-white/20 hover:border-white/50'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* What's In The Box */}
                <div className="p-4 rounded-2xl bg-[#16181D] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-white font-semibold">
                    <Package className="w-4 h-4 text-[#8AB4FF]" />
                    <span>In The Atelier Box</span>
                  </div>
                  <ul className="text-xs text-[#C7CBD1]/70 space-y-1 pl-1">
                    {product.inTheBox.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#8AB4FF]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Spec details & Actions */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#8AB4FF] uppercase tracking-wider">
                      {product.powerOutput}
                    </span>
                    <span className="text-2xl font-bold font-mono-tech text-white">
                      {product.price}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#C7CBD1]/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Verified Specs Table */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech uppercase text-[#C7CBD1]/60 block">
                    Verified Specification Architecture
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-[#16181D]/60 divide-y divide-white/5 overflow-hidden text-xs font-mono-tech">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="p-3 flex items-center justify-between">
                        <span className="text-[#C7CBD1]/70">{spec.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{spec.value}</span>
                          {spec.verified ? (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                              Verified
                            </span>
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                              Lab Spec
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compatibility Highlights */}
                <div>
                  <span className="text-xs font-mono-tech uppercase text-[#C7CBD1]/60 block mb-2">
                    Verified Compatibility
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibility.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#C7CBD1]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add to Bag CTA & Share button */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    id="modal-add-to-bag-btn"
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                      added
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] shadow-[0_0_20px_rgba(138,180,255,0.4)]'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Your Atelier Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add {product.name} to Bag</span>
                      </>
                    )}
                  </button>

                  {onShare && (
                    <button
                      onClick={() => {
                        audioFX.playTick();
                        onShare(product.name);
                      }}
                      className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-[#8AB4FF] border border-white/10 transition-colors"
                      title="Share this model's specifications"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
