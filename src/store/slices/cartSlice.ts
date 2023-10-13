import { IPhone } from "@/Interfaces";
import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICart {
  item: IPhone;
  quantity: number;
}

interface IState {
  cardItems: ICart[];
}

const initialState: IState = {
  cardItems: [],
};

export const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const items: ICart[] = [...state.cardItems];
      const index = items.findIndex((x: any) => x.id === action.payload.id);
      if (index > -1) {
        items[index].quantity += 1;
      } else items.push(action.payload);
      state.cardItems = items;
      return state;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      let items: ICart[] = [...state.cardItems];
      const index = items.findIndex((x) => x.item.id === id);
      items.splice(index, 1);
      state.cardItems = items;
      return state;
    },
    increment: (state, action) => {
      const items: ICart[] = [...current(state.cardItems)];
      const index = items.findIndex((x: any) => x?.id === action.payload);
      if (index > -1) {
        let quantity = items[index].quantity;
        quantity += 1;
        state.cardItems[index].quantity = quantity;
      }
    },
    decrement: (state, action) => {
      const items: ICart[] = [...current(state.cardItems)];
      const index = items.findIndex((x: any) => x?.id === action.payload);
      if (index > -1) {
        let quantity = items[index].quantity;
        if (quantity > 1) {
          quantity -= 1;
          state.cardItems[index].quantity = quantity;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
