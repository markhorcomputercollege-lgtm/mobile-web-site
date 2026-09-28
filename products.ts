import { Product, LifestyleScene } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'magflow-ultra-pad-25w',
    name: 'MagFlow 25W Ultra Pad',
    tagline: 'Pure desktop magnetism with aerospace titanium unibody.',
    category: 'pad',
    price: '$79.00',
    powerOutput: '25W Max (Qi2 Standard Certified Protocol)',
    efficiency: 'Up to 88% Magnetic Induction Efficiency',
    materials: 'Grade 5 Titanium Rim, Frosted Borosilicate Glass, Braided Kevlar Cable',
    dimensions: '60 mm × 60 mm × 5.8 mm (Ultra-Slim)',
    weight: '62 grams',
    badge: 'Flagship Edition',
    description: 'Designed for seamless alignment and minimal desk footprint. Engineered with an array of 16 precision N52 neodymium magnets and high-efficiency dual copper coils for sustained 25W Qi2 wireless output without thermal throttling.',
    compatibility: [
      'iPhone 16 / 16 Pro / 16 Pro Max',
      'iPhone 15 / 15 Pro / 15 Pro Max',
      'iPhone 14 / 13 / 12 series with MagSafe',
      'Qi2 enabled smartphones & accessories',
      'AirPods Pro (2nd Gen / 3rd Gen with MagSafe case)'
    ],
    inTheBox: [
      'MagFlow 25W Ultra Pad with integrated 1.5m braided cable',
      'Titanium cable organizer clip',
      'Product authentication card & setup manual'
    ],
    image: '/src/assets/images/magflow_hero_pad_1790064716297.jpg',
    specs: [
      { label: 'Wireless Protocol', value: 'Qi2 Official Spec / MagSafe Compatible', verified: true },
      { label: 'Max Power Output', value: '25W High-Speed Output', verified: true },
      { label: 'Input Port', value: 'USB-C (9V/3A, 12V/2.5A recommended)', verified: true },
      { label: 'Magnetic Attraction', value: '16N Industrial Grip Rating', verified: false },
      { label: 'Thermal Architecture', value: 'CryoFlow Aluminum Heat Dissipator', verified: true },
      { label: 'Cable Length', value: '1.5m (4.9 ft) Braided Ultra-Flex', verified: true }
    ],
    features: [
      'Concentric 16-element neodymium magnetic lock',
      'Precision CNC-machined titanium chamfered edge',
      'Zero-glare matte frosted surface reduces micro-scratches',
      'Integrated MCU intelligent temperature regulation'
    ],
    colorOptions: [
      { name: 'Obsidian Black', hex: '#121418' },
      { name: 'Titanium Slate', hex: '#6C727F' },
      { name: 'Frosted Silver', hex: '#D6D9DF' }
    ]
  },
  {
    id: 'magflow-3in1-stand',
    name: 'MagFlow 3-in-1 Foldable Stand',
    tagline: 'The architectural centerpiece for your bedside and desk.',
    category: 'stand',
    price: '$139.00',
    powerOutput: '25W Phone + 5W Watch + 5W Audio (Simultaneous)',
    efficiency: 'Independent Multi-Channel Power Management',
    materials: 'Anodized Space-Grade Aluminum, Silicone Friction Pads, Stainless Steel Hinge',
    dimensions: '142 mm × 82 mm × 22 mm (Folded Flat)',
    weight: '248 grams',
    badge: 'All-In-One Power',
    description: 'Elevate your entire Apple or Qi2 ecosystem. Features an adjustable floating magnetic phone plate with landscape standby mode, a dedicated fast-charge smartwatch disc, and a recessed base for wireless audio cases.',
    compatibility: [
      'iPhone 12 through 16 models',
      'Apple Watch Ultra 2, Series 10, SE, and all watch models',
      'Wireless earbuds with Qi charging cases',
      'Qi2 Android devices with magnetic cases'
    ],
    inTheBox: [
      'MagFlow 3-in-1 Foldable Stand',
      '1.8m High-Wattage Braided USB-C to USB-C Cable',
      'Travel Velvet Storage Pouch',
      'User Guide'
    ],
    image: '/src/assets/images/magflow_stand_3in1_1790064733527.jpg',
    specs: [
      { label: 'Simultaneous Charging', value: '3 Devices Simultaneously', verified: true },
      { label: 'Phone Magnetic Output', value: '25W Peak Output', verified: true },
      { label: 'Smartwatch Output', value: '5W Fast Charge Disc', verified: true },
      { label: 'Base Audio Pad', value: '5W Inductive Recessed Pad', verified: true },
      { label: 'Hinge Mechanism', value: 'Dual-Axis Friction Tested 15,000 Folds', verified: false },
      { label: 'Orientation', value: 'Portrait & Landscape StandBy Support', verified: true }
    ],
    features: [
      'Folds flat to 22mm for effortless luxury travel',
      'Dual-axis stepless tilt (0° to 75° viewing angle)',
      'Subtle bottom ambient glow light for nighttime docking',
      'Weighted anti-slip base with silicone micro-suction'
    ],
    colorOptions: [
      { name: 'Space Black', hex: '#16181D' },
      { name: 'Natural Titanium', hex: '#A2A7AF' }
    ]
  },
  {
    id: 'magflow-powerbank-10k',
    name: 'MagFlow PowerBank 10,000mAh',
    tagline: 'Uninterrupted power on the move. Tactile, slim, and secure.',
    category: 'powerbank',
    price: '$89.00',
    powerOutput: '25W Wireless + 30W Bi-directional USB-C PD',
    efficiency: 'High-Density Graphene Lithium-Polymer Cells',
    materials: 'Sandblasted Graphite Aluminum Shell, Soft-Touch Silicone Pad',
    dimensions: '104 mm × 68 mm × 14.8 mm',
    weight: '184 grams',
    badge: 'Mobile Essential',
    description: 'Pocket-sized endurance with full 25W magnetic speed. Built with high-density aerospace cells, an integrated zinc alloy fold-out kickstand, and a hidden LED dot-matrix battery indicator that disappears when inactive.',
    compatibility: [
      'iPhone 12-16 series direct magnetic snap',
      'Qi2 enabled phones & Android magnetic cases',
      'iPad, Steam Deck, & USB-C accessories via 30W cable'
    ],
    inTheBox: [
      'MagFlow 10,000mAh Magnetic PowerBank',
      '30cm USB-C to USB-C Silicone Cable',
      'Documentation & 2-Year Warranty'
    ],
    image: '/src/assets/images/magflow_powerbank_1790064763230.jpg',
    specs: [
      { label: 'Battery Capacity', value: '10,000mAh / 38.5Wh Airline Safe', verified: true },
      { label: 'Wireless Speed', value: '25W Max Fast Induction', verified: true },
      { label: 'Wired USB-C Port', value: '30W Power Delivery (In/Out)', verified: true },
      { label: 'Recharge Time', value: '48 minutes to 80% with 30W+ adapter', verified: false },
      { label: 'Kickstand', value: 'Stepless Zinc Alloy 0-60° Stand', verified: true }
    ],
    features: [
      'Pass-through charging: power phone and powerbank together',
      'Stealth micro-perforated LED battery meter',
      'Foreign object detection (FOD) prevents unwanted heating',
      'Curved ergonomic perimeter conforms naturally to grip'
    ],
    colorOptions: [
      { name: 'Graphite Shadow', hex: '#1D2026' },
      { name: 'Frosted White', hex: '#ECEEF2' }
    ]
  },
  {
    id: 'magflow-airvent-pro',
    name: 'MagFlow AirVent Pro Vehicle Mount',
    tagline: 'High-G road stability paired with active thermoelectric cooling.',
    category: 'car',
    price: '$69.00',
    powerOutput: '25W Continuous Wireless in Vehicle',
    efficiency: 'Cryo-Fan Active Cooling Engine',
    materials: 'Aviation Aluminum, Stainless Steel Steel-Hook Clamp, Polycarbonate',
    dimensions: '74 mm × 74 mm × 46 mm',
    weight: '112 grams',
    badge: 'Automotive Precision',
    description: 'Designed for the road. Features an active silent cooling fan that blows cool air onto the rear of your phone, preventing navigation overheat shutdowns even during direct summer sunlight on the dashboard.',
    compatibility: [
      'Compatible with horizontal and vertical vehicle air vents',
      'Compatible with all MagSafe and Qi2 devices',
      'Supports MagSafe cases up to 3mm thickness'
    ],
    inTheBox: [
      'MagFlow AirVent Pro Charger Unit',
      'Mechanical Steel Hook Vent Clip with stabilizer foot',
      '1.2m Braided Right-Angle USB-C Cable',
      'Cable management clips'
    ],
    image: '/src/assets/images/magflow_car_mount_1790065583323.jpg',
    specs: [
      { label: 'Clamping Mechanism', value: 'Dual-Lock Steel Core Hook', verified: true },
      { label: 'Cooling System', value: 'Active 4,200 RPM Whisper Fan (<22dB)', verified: true },
      { label: 'Magnetic Strength', value: 'Tested to 2.4G Lateral Vehicle Acceleration', verified: false },
      { label: 'Ball Joint', value: '360° Omnidirectional Stainless Pivot', verified: true }
    ],
    features: [
      'Active cooling keeps battery 14°C cooler under navigation',
      'Universal twist-lock clamp fits 99% of vehicle air vents',
      'Ambient LED rim illuminates alignment target at night',
      'One-handed magnetic mount and release'
    ],
    colorOptions: [
      { name: 'Matte Stealth', hex: '#101216' }
    ]
  }
];

export const LIFESTYLE_SCENES: LifestyleScene[] = [
  {
    id: 'minimal-workspace',
    title: 'Minimalist Workspace',
    environment: 'Modern Executive Studio',
    description: 'A distraction-free sanctuary where technology harmonizes with architectural clarity. MagFlow preserves your desk flow with zero wire tangle.',
    features: ['Zero desktop clutter', 'StandBy landscape mode for widgets', 'Whisper-quiet thermals'],
    image: '/src/assets/images/magflow_lifestyle_desk_1790064748032.jpg'
  },
  {
    id: 'nightstand-sanctuary',
    title: 'Bedside Sanctuary',
    environment: 'Curated Bedroom Architecture',
    description: 'Gentle night light guidance without blinding glare. Dock your phone by feel with confident magnetic snap even in pitch darkness.',
    features: ['Low-intensity blue glow indicator', 'One-handed lift off without tipping', 'Silent inductive charging cycle'],
    image: '/src/assets/images/magflow_stand_3in1_1790064733527.jpg'
  },
  {
    id: 'travel-suite',
    title: 'Executive Travel',
    environment: 'International First-Class Lounge',
    description: 'Fold flat, pack light, and command your charging setup in luxury hotels, airport lounges, and remote boardrooms across timezones.',
    features: ['22mm slim fold design', 'TSA carry-on compliant battery pack', 'Universal 100-240V adapter compatibility'],
    image: '/src/assets/images/magflow_powerbank_1790064763230.jpg'
  }
];

export const TECH_FEATURES = [
  {
    id: 'magnetic-core',
    title: 'N52 Neodymium Magnetic Array',
    headline: '16 precision-oriented magnets create an unbreakable flux circuit.',
    description: 'Custom polarized NdFeB ring aligns with sub-millimeter precision to induction coils, maximizing energy transfer and eliminating offset thermal loss.',
    stat: '16N',
    statLabel: 'Clamping Force'
  },
  {
    id: 'qi2-protocol',
    title: 'Qi2 25W High-Speed Standard',
    headline: 'Next-gen wireless velocity certified for modern flagships.',
    description: 'Dynamic handshake protocol constantly monitors coil resistance and battery thermal state to push safe 25W bursts into your device up to 2x faster than 7.5W legacy pads.',
    stat: '25W',
    statLabel: 'Peak Delivery'
  },
  {
    id: 'cryo-dissipation',
    title: 'CryoFlow Dual Vapor Chamber',
    headline: 'Aerospace heat sink architecture prevents phone degradation.',
    description: 'Integrated graphitic carbon layer and solid titanium casing act as a thermal chimney, drawing heat away from your phone battery for prolonged cell health.',
    stat: '-12°C',
    statLabel: 'Cooler Operation'
  },
  {
    id: 'smart-mcu',
    title: 'Intelligent MCU Pulse Guard',
    headline: 'Millisecond sensor loop shielding against power surges.',
    description: 'Foreign object detection scans for metallic keys or coins within 2mm, shutting off inductive transfer within 8 milliseconds to protect foreign items.',
    stat: '8ms',
    statLabel: 'FOD Cutoff'
  }
];
