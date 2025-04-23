import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as cartActions from '../../store/features/cartProducts';
import { ProductLight } from '../../types/Product';

export const useCartToggle = (product: ProductLight) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector(state =>
    state.cartProducts.some(p => p.itemId === product.itemId),
  );

  const toggleCart = () => {
    dispatch(
      isInCart
        ? cartActions.removeFromCart(product.itemId)
        : cartActions.addToCart(product),
    );
  };

  return { isInCart, toggleCart };
};
