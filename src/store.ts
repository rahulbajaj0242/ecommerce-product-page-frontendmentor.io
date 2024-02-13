import { create } from "zustand";

type CartItems = {
  items: number;
  setItems: (items: number) => void;
};

export const useCartItemsStore = create<CartItems>()((set) => ({
  items: 0,
  setItems: (items) => set({ items }),
}));
