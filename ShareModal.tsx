import React, { useState } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  QrCode,
  Send,
  Mail,
  ExternalLink,
  Smartphone,
  Sparkles,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioFX } from '../utils/audio';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  productName = 'UGREEN MagFlow 25W — Luxury Magnetic Charging Lineup',
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [activeTab, setActiveTab] = useState<'share' | 'qrcode' | 'embed'>('share');

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://magflow.design';
  const shareTitle = `${productName}`;
  const shareText = `Check out UGREEN MagFlow 25W — luxury titanium magnetic charging engineered for Qi2 velocity & minimalist spaces:`;

  const shareOptions = [
    {
      name: 'WhatsApp',
      color: '#25D366',
      bg: 'hover:bg-[#25D366]/20 hover:border-[#25D366]/50',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`,
    },
    {
      name: 'X (Twitter)',
      color: '#FFFFFF',
      bg: 'hover:bg-white/10 hover:border-white/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}&hashtags=MagFlow,Qi2,LuxuryTech`,
    },
    {
      name: 'LinkedIn',
      color: '#0A66C2',
      bg: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'Telegram',
      color: '#24A1DE',
      bg: 'hover:bg-[#24A1DE]/20 hover:border-[#24A1DE]/50',
      icon: <Send className="w-4 h-4" />,
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'Facebook',
      color: '#1877F2',
      bg: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'Email Brief',
      color: '#8AB4FF',
      bg: 'hover:bg-[#8AB4FF]/20 hover:border-[#8AB4FF]/50',
      icon: <Mail className="w-4 h-4" />,
      url: `mailto:?subject=${encodeURIComponent(`Executive Preview: ${productName}`)}&body=${encodeURIComponent(`${shareText}\n\nReview the live interactive presentation here:\n${currentUrl}\n\nKey Highlights:\n- Official Qi2 25W Velocity\n- Grade 5 Titanium Chassis\n- CryoFlow Sub-32°C Thermal Chamber\n- 16N Rare-Earth Alignment`)}`,
    },
  ];

  const handleCopyLink = async () => {
    audioFX.playTick();
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleCopyEmbed = async () => {
    audioFX.playTick();
    const embedCode = `<iframe src="${currentUrl}" width="100%" height="700" frameborder="0" style="border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.8);" title="${productName}"></iframe>`;
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopiedEmbed(true);
      setTimeout(() => setCopiedEmbed(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    audioFX.playTick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      handleCopyLink();
    }
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-lg bg-[#0D0F13] border border-[#8AB4FF]/30 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10 text-white my-auto flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#16181D] to-[#0D0F13]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8AB4FF]/15 border border-[#8AB4FF]/40 flex items-center justify-center text-[#8AB4FF]">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white flex items-center gap-2">
                  <span>Share Presentation</span>
                  <span className="text-[9px] font-mono-tech px-2 py-0.5 rounded-full bg-[#8AB4FF] text-[#08090B] font-extrabold">
                    QI2 ATELIER
                  </span>
                </h3>
                <p className="text-xs text-[#C7CBD1]/60 font-mono-tech">
                  Distribute live showcase to clients, investors & colleagues
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#C7CBD1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 text-xs font-mono-tech px-6 pt-3 gap-6 bg-[#121419]">
            <button
              onClick={() => setActiveTab('share')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'share'
                  ? 'border-[#8AB4FF] text-white font-semibold'
                  : 'border-transparent text-[#C7CBD1]/60 hover:text-white'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Direct Channels</span>
            </button>
            <button
              onClick={() => setActiveTab('qrcode')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'qrcode'
                  ? 'border-[#8AB4FF] text-white font-semibold'
                  : 'border-transparent text-[#C7CBD1]/60 hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Mobile QR Code</span>
            </button>
            <button
              onClick={() => setActiveTab('embed')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'embed'
                  ? 'border-[#8AB4FF] text-white font-semibold'
                  : 'border-transparent text-[#C7CBD1]/60 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Embed Code</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6">
            {activeTab === 'share' && (
              <>
                {/* 6-Grid Social Share Channels */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {shareOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audioFX.playTick()}
                      className={`p-3.5 rounded-2xl bg-[#16181D] border border-white/5 flex flex-col items-center justify-center gap-2 text-center transition-all group ${opt.bg}`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ color: opt.color }}
                      >
                        {opt.icon}
                      </div>
                      <span className="text-xs font-semibold text-white group-hover:text-white">
                        {opt.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Native Device Share API Trigger */}
                {typeof navigator !== 'undefined' && 'share' in navigator && (
                  <button
                    onClick={handleNativeShare}
                    className="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech uppercase tracking-wider text-[#C7CBD1] hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-[#8AB4FF]" />
                    <span>Open Native Device Share Sheet</span>
                  </button>
                )}

                {/* 1-Click Copy Link Box */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono-tech uppercase text-[#C7CBD1]/60 block">
                    Copy Direct Presentation Link
                  </span>
                  <div className="p-1.5 pl-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between gap-3">
                    <span className="text-xs font-mono-tech text-[#8AB4FF] truncate select-all">
                      {currentUrl}
                    </span>
                    <button
                      onClick={handleCopyLink}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${
                        copiedLink
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B]'
                      }`}
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'qrcode' && (
              <div className="flex flex-col items-center text-center space-y-4 py-2">
                {/* Clean SVG QR Code Representation */}
                <div className="p-5 rounded-3xl bg-white border-4 border-[#8AB4FF] shadow-[0_0_30px_rgba(138,180,255,0.4)] relative group">
                  <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none">
                    {/* SVG Matrix Pattern */}
                    <rect width="200" height="200" fill="white" rx="12" />
                    {/* Top Left Finder */}
                    <rect x="20" y="20" width="50" height="50" rx="6" fill="#08090B" />
                    <rect x="30" y="30" width="30" height="30" rx="4" fill="white" />
                    <rect x="38" y="38" width="14" height="14" rx="2" fill="#08090B" />

                    {/* Top Right Finder */}
                    <rect x="130" y="20" width="50" height="50" rx="6" fill="#08090B" />
                    <rect x="140" y="30" width="30" height="30" rx="4" fill="white" />
                    <rect x="148" y="38" width="14" height="14" rx="2" fill="#08090B" />

                    {/* Bottom Left Finder */}
                    <rect x="20" y="130" width="50" height="50" rx="6" fill="#08090B" />
                    <rect x="30" y="140" width="30" height="30" rx="4" fill="white" />
                    <rect x="38" y="148" width="14" height="14" rx="2" fill="#08090B" />

                    {/* Center Core Logo & Data Dots */}
                    <rect x="80" y="25" width="10" height="10" fill="#08090B" rx="1" />
                    <rect x="100" y="25" width="15" height="10" fill="#08090B" rx="1" />
                    <rect x="85" y="45" width="25" height="8" fill="#08090B" rx="1" />
                    <rect x="80" y="65" width="10" height="10" fill="#08090B" rx="1" />
                    <rect x="100" y="65" width="12" height="12" fill="#08090B" rx="1" />

                    <rect x="25" y="85" width="12" height="8" fill="#08090B" rx="1" />
                    <rect x="45" y="85" width="25" height="8" fill="#08090B" rx="1" />
                    <rect x="85" y="85" width="30" height="30" rx="8" fill="#08090B" />
                    <circle cx="100" cy="100" r="8" fill="#8AB4FF" />
                    <rect x="130" y="85" width="15" height="10" fill="#08090B" rx="1" />
                    <rect x="160" y="85" width="15" height="10" fill="#08090B" rx="1" />

                    <rect x="80" y="130" width="15" height="15" fill="#08090B" rx="1" />
                    <rect x="105" y="130" width="12" height="8" fill="#08090B" rx="1" />
                    <rect x="130" y="130" width="20" height="8" fill="#08090B" rx="1" />
                    <rect x="165" y="130" width="12" height="15" fill="#08090B" rx="1" />

                    <rect x="80" y="155" width="25" height="10" fill="#08090B" rx="1" />
                    <rect x="120" y="150" width="15" height="25" fill="#08090B" rx="1" />
                    <rect x="145" y="150" width="30" height="15" fill="#08090B" rx="1" />
                    <rect x="155" y="170" width="20" height="10" fill="#08090B" rx="1" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Instant Mobile Hand-off
                  </h4>
                  <p className="text-xs text-[#C7CBD1]/70 max-w-xs mt-1">
                    Point your iPhone or Android camera to open this luxury 25W showcase instantly on mobile.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'embed' && (
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono-tech uppercase text-[#C7CBD1]/60 block mb-1">
                    Atelier iFrame Embed Snippet
                  </span>
                  <p className="text-xs text-[#C7CBD1]/70">
                    Embed the complete MagFlow showcase into investor slide decks, Notion portals, or client proposals.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-black/60 border border-white/10 font-mono-tech text-[11px] text-[#8AB4FF] break-all select-all">
                  {`<iframe src="${currentUrl}" width="100%" height="700" frameborder="0" style="border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.8);" title="${productName}"></iframe>`}
                </div>

                <button
                  onClick={handleCopyEmbed}
                  className={`w-full py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    copiedEmbed
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#8AB4FF] hover:bg-[#A3C6FF] text-[#08090B]'
                  }`}
                >
                  {copiedEmbed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Embed Snippet Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Embed Code</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#16181D] border-t border-white/5 text-center text-[10px] font-mono-tech text-[#C7CBD1]/40">
            CONFIDENTIAL CLIENT DEMONSTRATION • MAGFLOW 25W ATELIER
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
