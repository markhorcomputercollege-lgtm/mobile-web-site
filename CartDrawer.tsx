import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.product.price.replace('$', '')) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  const handleSimulateCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleFinishCheckout = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Slide-over Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#0D0F13] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#8AB4FF]" />
                  <h3 className="text-lg font-bold tracking-tight uppercase">
                    Your Atelier Bag ({cartItems.reduce((s, i) => s + i.quantity, 0)})
                  </h3>
                </div>
                <button
                  id="close-cart-btn"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/5 text-[#C7CBD1] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body: Cart Items */}
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {checkoutComplete ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold">Order Reserved</h4>
                    <p className="text-xs text-[#C7CBD1]/70 leading-relaxed max-w-xs mx-auto">
                      Thank you for experiencing MagFlow. Your luxury parcel reservation has been
                      logged with complimentary tracked courier dispatch.
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tech text-[#8AB4FF]">
                      RESERVATION REFERENCE: #MF-{(Math.random() * 899999 + 100000).toFixed(0)}
                    </div>
                    <button
                      onClick={handleFinishCheckout}
                      className="mt-6 px-6 py-3 rounded-full bg-[#8AB4FF] text-[#08090B] font-semibold text-xs tracking-wider uppercase"
                    >
                      Return to Showcase
                    </button>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="text-center py-20 text-[#C7CBD1]/50 space-y-3">
                    <ShoppingBag className="w-10 h-10 mx-auto text-[#C7CBD1]/30" />
                    <p className="text-sm">Your shopping bag is empty.</p>
                    <button
                      onClick={onClose}
                      className="text-xs text-[#8AB4FF] underline underline-offset-4 hover:text-white"
                    >
                      Explore the 25W Lineup
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 rounded-2xl bg-[#16181D] border border-white/5 flex gap-4 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover bg-black/40 border border-white/10 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold truncate text-white">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-mono-tech text-[#8AB4FF]">
                          {item.product.price}
                        </span>
                        <div className="text-[10px] text-[#C7CBD1]/50 uppercase font-mono-tech mt-0.5">
                          Finish: {item.selectedColor}
                        </div>

                        {/* Quantity adjust */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono-tech px-2">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 text-white/30 hover:text-rose-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer: Subtotal & Checkout */}
              {!checkoutComplete && cartItems.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="space-y-1.5 text-xs text-[#C7CBD1]/70 font-mono-tech">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Courier Shipping</span>
                      <span className="text-emerald-400">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-sm text-white font-bold pt-2 border-t border-white/5">
                      <span>Estimated Total</span>
                      <span className="text-[#8AB4FF] text-base">${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    id="checkout-btn"
                    onClick={handleSimulateCheckout}
                    className="w-full py-3.5 rounded-full bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(138,180,255,0.4)] transition-all"
                  >
                    <span>Proceed to Atelier Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#C7CBD1]/50 font-mono-tech">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8AB4FF]" />
                    <span>256-Bit Encrypted Atelier Reservation</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
