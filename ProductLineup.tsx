import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Eye, Zap, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface ProductLineupProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductLineup: React.FC<ProductLineupProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'pad', label: 'Ultra Pads' },
    { id: 'stand', label: 'Multi-Device Stands' },
    { id: 'powerbank', label: 'PowerBanks' },
    { id: 'car', label: 'Automotive' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (p: Product) => {
    onAddToCart(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="lineup" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8AB4FF] uppercase">
                03 / THE LINEUP
              </span>
              <div className="h-[1px] w-8 bg-[#8AB4FF]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              Meet the UGREEN MagFlow <span className="titanium-gradient-text">Lineup.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#C7CBD1]/70 max-w-xl">
              Engineered with UGREEN's singular aesthetic unity. Every device shares our signature chamfered
              titanium profile, N52 magnetic precision, and certified 25W Qi2 throughput.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#8AB4FF] text-[#08090B] shadow-[0_0_20px_rgba(138,180,255,0.4)]'
                    : 'bg-[#16181D] text-[#C7CBD1]/80 hover:text-white hover:bg-[#1E222A] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-[#16181D]/70 border border-white/10 hover:border-[#8AB4FF]/40 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(138,180,255,0.1)]"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[16/10] bg-[#0E1014] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-transparent to-transparent opacity-80" />

                {/* Badge if available */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech tracking-wider text-[#8AB4FF] uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#8AB4FF]" />
                    <span>{product.badge}</span>
                  </div>
                )}

                {/* Price pill */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-xs font-mono-tech text-white font-bold">
                  {product.price}
                </div>
              </div>

              {/* Product Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8AB4FF] mb-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{product.powerOutput}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8AB4FF] transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#C7CBD1]/75 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Spec snippet chips */}
                  <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                        Materials
                      </span>
                      <span className="text-white font-medium truncate block">
                        {product.materials.split(',')[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono-tech text-[#C7CBD1]/50 block">
                        Efficiency Rating
                      </span>
                      <span className="text-[#8AB4FF] font-medium truncate block">
                        {product.efficiency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions: View Details and Add to Bag */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <button
                    id={`view-details-${product.id}`}
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#8AB4FF]" />
                    <span>View Details</span>
                  </button>

                  <button
                    id={`add-bag-${product.id}`}
                    onClick={() => handleQuickAdd(product)}
                    className={`py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                      addedId === product.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] shadow-[0_0_15px_rgba(138,180,255,0.3)]'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
