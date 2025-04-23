import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductLight } from '../../types/Product';

const initialState: ProductLight[] = JSON.parse(
  localStorage.getItem('cartProducts') || '[]',
);

export const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductLight>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(stateItem => stateItem.itemId !== action.payload);
    },
  },
});

export default cartProductsSlice.reducer;
export const { addToCart, removeFromCart } =
  cartProductsSlice.actions;
