import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Specs } from '../../molecules/Specs/Specs';
import { H4 } from '../../atoms/Typography/H4/H4';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { FavouriteButton } from '../../atoms/FavouriteButton/FavouriteButton';
import { H3 } from '../../atoms/Typography/H3/H3';
import { ShortProduct } from '../../../types/ShortProduct';

interface ProductCard {
  //should be required
  color?: string;
  id: number;
  year?: number;

  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  itemId: string;
  category: string;
}


export const ProductCard: React.FC<{product: ShortProduct}> = ({ product }) => {
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
    id,
    year,
    color,
  } = product;
  const [triggerCart, setTriggerCart] = useState(false);
  const [triggerFavourite, setTriggerFavourite] = useState(false);

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setTriggerCart(!triggerCart);
  };

  const handleAddToFavourites = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setTriggerFavourite(!triggerFavourite);
  };

  return (
    <div className="product-card">
      <Link
        to={`/${category}/${itemId}`}
        state={{ productDetails: { id, year, color }}}
        className="product-card__link"
      >
        <div className="product-card__image-container">
          <img src={image} alt={name} className="product-card__image" />
        </div>

        <H4 className="product-card__title">{name}</H4>

        <div className="product-card__price-block">
          <H3>${price}</H3>
          {
            // year < 2022 && (
            <span className="product-card__full-price">${fullPrice}</span> // )
          }
        </div>

        <div className="product-card__divider" />

        <Specs specs={{ screen, capacity, ram }} />

        <div className="product-card__buttons">
          <PrimaryButton
            isInCart={triggerCart}
            onClick={handleAddToCart}
          >
            Add to cart
          </PrimaryButton>
          <FavouriteButton
            isInFavourites={triggerFavourite}
            onClick={handleAddToFavourites}
          />
        </div>
      </Link>
    </div>
  );
};
