import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Zap, Volume2, VolumeX, Sparkles, ChevronRight, Share2 } from 'lucide-react';
import { audioFX } from '../utils/audio';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenOrder: () => void;
  onOpenPitch: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenOrder,
  onOpenPitch,
  onOpenShare,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioFX.enabled = next;
    if (next) audioFX.playTick();
  };

  const navLinks = [
    { label: 'Technology', href: '#technology' },
    { label: 'Lineup', href: '#lineup' },
    { label: 'Thermal Lab', href: '#thermal-lab' },
    { label: 'StandBy Lab', href: '#standby-lab' },
    { label: 'Compatibility', href: '#compatibility-checker' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Compare', href: '#compare' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090B]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => audioFX.playTick()}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#16181D] to-[#08090B] border border-white/20 flex items-center justify-center shadow-lg group-hover:border-[#8AB4FF] transition-colors">
            <div className="w-4 h-4 rounded-full border-2 border-[#8AB4FF] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono-tech tracking-[0.22em] text-[#8AB4FF] font-bold">
                UGREEN
              </span>
              <span className="text-white/20 text-xs">/</span>
              <span className="font-display font-extrabold text-base tracking-[0.18em] text-white group-hover:text-[#8AB4FF] transition-colors">
                MAGFLOW
              </span>
            </div>
            <span className="text-[9px] font-mono-tech tracking-[0.25em] text-[#C7CBD1]/60 -mt-0.5">
              OFFICIAL QI2 25W ATELIER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-mono-tech tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => audioFX.playTick()}
              className="text-[#C7CBD1] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8AB4FF] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 transition-colors"
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#8AB4FF]" /> : <VolumeX className="w-4 h-4 text-white/40" />}
          </button>

          {/* Search Trigger */}
          <button
            id="nav-search-btn"
            onClick={() => {
              audioFX.playTick();
              onOpenSearch();
            }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 transition-colors"
            title="Search products and specs"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Share Trigger Button */}
          <button
            id="nav-share-btn"
            onClick={() => {
              audioFX.playTick();
              onOpenShare();
            }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-[#8AB4FF] border border-white/10 transition-colors"
            title="Share presentation (WhatsApp, X, LinkedIn, QR)"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Client Pitch Presentation Mode button */}
          <button
            id="nav-pitch-btn"
            onClick={() => {
              audioFX.playTick();
              onOpenPitch();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8AB4FF]/10 hover:bg-[#8AB4FF]/20 text-[#8AB4FF] border border-[#8AB4FF]/40 text-xs font-mono-tech tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(138,180,255,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Deck</span>
          </button>

          {/* Shopping Bag Button */}
          <button
            id="nav-cart-btn"
            onClick={() => {
              audioFX.playTick();
              onOpenCart();
            }}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10 transition-colors"
            title="View Atelier Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8AB4FF] text-[#08090B] font-mono-tech font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C7CBD1] hover:text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0F13] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono-tech text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#C7CBD1] hover:text-[#8AB4FF] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShare();
              }}
              className="w-full py-2.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono-tech uppercase font-semibold flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-[#8AB4FF]" />
              <span>Share Presentation Channels</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitch();
              }}
              className="w-full py-2.5 rounded-xl bg-[#8AB4FF]/15 text-[#8AB4FF] border border-[#8AB4FF]/30 text-xs font-mono-tech uppercase font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Client Deck & Margins</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-2.5 rounded-xl bg-[#8AB4FF] text-[#08090B] font-bold text-xs uppercase"
            >
              Express Bag Reservation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
