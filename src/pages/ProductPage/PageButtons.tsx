import { FavouriteButton } from '../../design/atoms/FavouriteButton/FavouriteButton';
import { PrimaryButton } from '../../design/atoms/PrimaryButton/PrimaryButton';
import { ShortProduct } from '../../types/ShortProduct';
import { useActionButtons } from '../../utils/hooks/useActionButtons';

export const PageButtons = ({product}: { product: ShortProduct }) => {
  const { isInCart, isInFav, handleAddToCart, handleAddToFavourites } =
    useActionButtons(product);

  return (
    <div className='buttons'>
      <PrimaryButton
        onClick={handleAddToCart}
        isInCart={isInCart}
      >
        Add to cart
      </PrimaryButton>
      <FavouriteButton
        isInFavourites={isInFav}
        onClick={handleAddToFavourites}
      ></FavouriteButton>
    </div>
  );
};
