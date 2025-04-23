import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProductLight } from '../../types/Product';
import * as favouriteProducts from '../../store/features/favouriteProducts';

export const useFavToggle = (product: ProductLight) => {
  const dispatch = useAppDispatch();
  const isInFav = useAppSelector(state =>
    state.favouriteProducts.some(favProduct => favProduct.itemId === product.itemId),
  );

  const toggleFav = () => {
    dispatch(
      isInFav
        ? favouriteProducts.removeFromFav(product.itemId)
        : favouriteProducts.addToFav(product),
    );
  };

  return { isInFav, toggleFav };
};
