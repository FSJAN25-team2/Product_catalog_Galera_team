import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartProductsReducer from './features/cartProducts';
import { localStorageMiddleware } from './middleware/cartMiddleware';

export const store = configureStore({
  reducer: {
    cartProduct: cartProductsReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
