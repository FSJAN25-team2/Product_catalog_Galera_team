import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductLight } from '../../types/Product';

const initialState: ProductLight[] = JSON.parse(
  localStorage.getItem('favouriteProducts') || '[]',
);

export const FavouritesProductsSlice = createSlice({
  name: 'favouriteProducts',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<ProductLight>) => {
      state.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<string>) => {
      return state.filter(stateItem => stateItem.itemId !== action.payload);
    },
  },
});

export default FavouritesProductsSlice.reducer;
export const { addToFav, removeFromFav } =
FavouritesProductsSlice.actions;