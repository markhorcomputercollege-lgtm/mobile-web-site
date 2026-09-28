import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Zap } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#16181D]/95 border border-[#8AB4FF]/40 text-white shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(138,180,255,0.2)] backdrop-blur-xl"
        >
          <div className="w-6 h-6 rounded-full bg-[#8AB4FF]/20 flex items-center justify-center text-[#8AB4FF]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
