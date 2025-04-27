import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Specs } from '../../molecules/Specs/Specs';
import { H4 } from '../../atoms/Typography/H4/H4';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { FavouriteButton } from '../../atoms/FavouriteButton/FavouriteButton';
import { H3 } from '../../atoms/Typography/H3/H3';
import { ShortProduct } from '../../../types/ShortProduct';
import { useCartToggle } from '../../../utils/hooks/useCartToggle';
import { useFavToggle } from '../../../utils/hooks/useFavouriteToggle';
import { SkeletonCard } from '../SkeletonCard/SkeletonCard';

export const ProductCard: React.FC<{ product: ShortProduct }> = ({
  product,
}) => {
  const {
    capacity,
    category,
    fullPrice,
    image,
    itemId,
    name,
    price,
    ram,
    screen,
    year,
  } = product;

  const { toggleCart, isInCart } = useCartToggle(product);
  const { toggleFav, isInFav } = useFavToggle(product);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    toggleCart();
  };

  const handleAddToFavourites = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    toggleFav();
  };

  return (
    <div className="product-card">
      {loading ? (
        <SkeletonCard/>

      ) : (
        <Link
        to={`/${category}/${itemId}`}
        state={{ product }}
        className="product-card__link"
      >
        <div className="product-card__image-container">
          <img src={image} alt={name} className="product-card__image" />
        </div>

        <H4 className="product-card__title">{name}</H4>

        <div className="product-card__price-block">
          <H3> ${year < 2022 ? price : fullPrice}</H3>
          {year < 2022 && (
            <span className="product-card__full-price">${fullPrice}</span>
          )}
        </div>

        <div className="product-card__divider" />

        <Specs specs={{ screen, capacity, ram }} />

        <div className="product-card__buttons">
          <PrimaryButton isInCart={isInCart} onClick={handleAddToCart}>
            Add to cart
          </PrimaryButton>

          <FavouriteButton
            isInFavourites={isInFav}
            onClick={handleAddToFavourites}
          />
        </div>
      </Link>
      )}
      {/* <Link
        to={`/${category}/${itemId}`}
        state={{ product }}
        className="product-card__link"
      >
        <div className="product-card__image-container">
          <img src={image} alt={name} className="product-card__image" />
        </div>

        <H4 className="product-card__title">{name}</H4>

        <div className="product-card__price-block">
          <H3> ${year < 2022 ? price : fullPrice}</H3>
          {year < 2022 && (
            <span className="product-card__full-price">${fullPrice}</span>
          )}
        </div>

        <div className="product-card__divider" />

        <Specs specs={{ screen, capacity, ram }} />

        <div className="product-card__buttons">
          <PrimaryButton isInCart={isInCart} onClick={handleAddToCart}>
            Add to cart
          </PrimaryButton>

          <FavouriteButton
            isInFavourites={isInFav}
            onClick={handleAddToFavourites}
          />
        </div>
      </Link> */}
    </div>
  );
};
