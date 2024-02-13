import { create } from "zustand";

type CartItems = {
  items: number;
  add: () => void;
  remove: () => void;
};

export const useCartItemsStore = create<CartItems>()((set) => ({
  items: 0,
  add: () => set((state) => ({ items: state.items + 1 })),
  remove: () => set((state) => ({ items: state.items - 1 })),
}));
