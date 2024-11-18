import { Product } from '@/types/stores';
import { create } from 'zustand';

type State = {
  cart: Product[];
};

type Action = {
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
};

const useCartStore = create<State & Action>((set) => ({
  cart: [],
  addToCart: (item: Product) =>
    set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item: Product) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
