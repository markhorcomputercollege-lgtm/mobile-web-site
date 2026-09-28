import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialIntro } from './components/EditorialIntro';
import { TechShowcase } from './components/TechShowcase';
import { ProductLineup } from './components/ProductLineup';
import { ExplodedView } from './components/ExplodedView';
import { InteractiveMagneticSim } from './components/InteractiveMagneticSim';
import { ThermalComparison } from './components/ThermalComparison';
import { MacroInspection } from './components/MacroInspection';
import { StandBySimulator } from './components/StandBySimulator';
import { DeviceCompatibilityChecker } from './components/DeviceCompatibilityChecker';
import { WhyMagFlow } from './components/WhyMagFlow';
import { LifestyleSection } from './components/LifestyleSection';
import { ChargingCalculator } from './components/ChargingCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { ProductDetailsAccordion } from './components/ProductDetailsAccordion';
import { PremiumCTA } from './components/PremiumCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { ClientPitchModal } from './components/ClientPitchModal';
import { ShareModal } from './components/ShareModal';
import { FloatingShareWidget } from './components/FloatingShareWidget';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { audioFX } from './utils/audio';

export const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Obsidian Black',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareTargetName, setShareTargetName] = useState<string>('MAGFLOW 25W — Luxury Magnetic Charging Lineup');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  const handleOpenShare = (name?: string) => {
    if (name) {
      setShareTargetName(`MAGFLOW 25W — ${name}`);
    } else {
      setShareTargetName('MAGFLOW 25W — Luxury Magnetic Charging Lineup');
    }
    setIsShareOpen(true);
  };

  const handleAddToCart = (product: Product, color?: string) => {
    audioFX.playTick();
    const chosenColor = color || product.colorOptions[0]?.name || 'Standard';
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.selectedColor === chosenColor
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.selectedColor === chosenColor
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1, selectedColor: chosenColor }];
    });
    showToast(`${product.name} added to your Atelier Bag`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    audioFX.playTick();
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    audioFX.playTick();
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
    showToast('Item removed from Atelier Bag');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    audioFX.playTick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F5F7] selection:bg-[#8AB4FF]/30 selection:text-white relative">
      {/* Navigation */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenOrder={() => setIsCartOpen(true)}
        onOpenPitch={() => setIsPitchOpen(true)}
        onOpenShare={() => handleOpenShare()}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => scrollToSection('introduction')}
        onLineupClick={() => scrollToSection('lineup')}
        onOpenPitch={() => setIsPitchOpen(true)}
      />

      {/* 01: Editorial Philosophy */}
      <EditorialIntro />

      {/* 02: Magnetic Technology Section */}
      <TechShowcase />

      {/* 03: Product Lineup */}
      <ProductLineup
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p) => handleAddToCart(p)}
      />

      {/* 04: Internal Architecture / Exploded View */}
      <ExplodedView onOpenProductModal={() => setSelectedProduct(PRODUCTS[0])} />

      {/* 05: Thermal Imaging Lab (CryoFlow vs Thermal Throttling) */}
      <ThermalComparison />

      {/* 06: Interactive Apple iOS StandBy Mode Simulator */}
      <StandBySimulator />

      {/* 07: Device Compatibility & Velocity Diagnostic */}
      <DeviceCompatibilityChecker
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p) => handleAddToCart(p)}
      />

      {/* 08: Interactive Magnetic Alignment & Snap Lab */}
      <InteractiveMagneticSim />

      {/* 09: Microscopic Precision & Macro Titanium Loupe */}
      <MacroInspection />

      {/* 10: Why MagFlow - Feature Grid */}
      <WhyMagFlow />

      {/* 11: Curated Architectural Spaces & Lifestyle */}
      <LifestyleSection />

      {/* 12: Velocity Benchmark & Efficiency Calculator */}
      <ChargingCalculator />

      {/* 13: Lineup Specification Matrix */}
      <ComparisonTable onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 14: Technical Documentation Accordion */}
      <ProductDetailsAccordion />

      {/* 15: Call to Action */}
      <PremiumCTA
        onExploreProducts={() => scrollToSection('lineup')}
        onOpenOrder={() => setIsCartOpen(true)}
      />

      {/* 16: Multi-Column Footer with Share Links */}
      <Footer onOpenShare={() => handleOpenShare()} />

      {/* Floating Quick Share Badge */}
      <FloatingShareWidget onOpenShareModal={() => handleOpenShare()} />

      {/* Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, color) => handleAddToCart(p, color)}
        onShare={(productName) => handleOpenShare(productName)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Executive Client Deck & OEM Customizer Modal */}
      <ClientPitchModal
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
      />

      {/* Multi-Channel Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        productName={shareTargetName}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};
