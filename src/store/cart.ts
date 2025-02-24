import { create } from 'zustand';
import { CartStore } from '../types';

export const useCartStore = create<CartStore>((set) => ({
  items: 0,
  addToCart: () => set((state) => ({ items: state.items + 1 })),
}));