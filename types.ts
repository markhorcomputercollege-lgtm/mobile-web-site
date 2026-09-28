export interface ProductSpec {
  label: string;
  value: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'pad' | 'stand' | 'powerbank' | 'car';
  price: string;
  powerOutput: string;
  efficiency: string;
  materials: string;
  dimensions: string;
  weight: string;
  compatibility: string[];
  inTheBox: string[];
  image: string;
  badge?: string;
  description: string;
  specs: ProductSpec[];
  features: string[];
  colorOptions: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface LifestyleScene {
  id: string;
  title: string;
  environment: string;
  description: string;
  features: string[];
  image: string;
}
