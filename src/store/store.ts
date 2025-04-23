import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartLocStorMiddleware } from './middleware/cartMiddleware';
import cartReducer from './features/cartProducts';
import favouritesReducer from './features/favouriteProducts';
import { favouritesLocStorMiddleWare } from './middleware/favouritesMiddleware';

export const store = configureStore({
  reducer: {
    cartProducts: cartReducer,
    favouriteProducts: favouritesReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      cartLocStorMiddleware,
      favouritesLocStorMiddleWare,
    );
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
