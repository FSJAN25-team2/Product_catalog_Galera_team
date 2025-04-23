import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as cartActions from '../../store/features/cartProducts';
import { ProductLight } from '../../types/Product';

export const useCartToggle = (product: ProductLight) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector(state =>
    state.cartProduct.some(p => p.itemId === product.itemId),
  );

  const toggle = () => {
    dispatch(
      isInCart
        ? cartActions.removeFromCart(product.itemId)
        : cartActions.addToCart(product),
    );
  };

  return { isInCart, toggle };
};
