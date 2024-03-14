import { createSlice } from "@reduxjs/toolkit";
import { type StoreItem } from "../utils/http";

type CounterSlice = {
  items: StoreItem[];
  totalPrice: number;
  totalItems: number;
};

const initialState: CounterSlice = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartCounterSlice = createSlice({
  name: "cartContent",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalItems++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity!++;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalItems--;
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity!--;
      }
    },
    removeAllItems(state, action) {
      const { id, quantity } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalItems -= quantity;
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;
