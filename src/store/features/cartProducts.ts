import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//temporary
interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState: [] as CartProduct[],
  reducers: {
    add: (state, action: PayloadAction<CartProduct>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(stateItem => stateItem.id = action.payload)
    }
  },
})

export default cartProductsSlice.reducer;
export const {add, remove} = cartProductsSlice.actions;
