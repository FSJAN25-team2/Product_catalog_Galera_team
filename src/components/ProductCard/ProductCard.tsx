import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface ProductCardProps {
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

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  image,
  itemId,
  category,
}) => {
  return (
    <div className="product-card">
      <Link to={`/${category}/${itemId}`} className="product-card__link">
        <div className="product-card__image-container">
          <img 
            src={image} 
            alt={name} 
            className="product-card__image"
          />
        </div>

        <h3 className="product-card__title">{name}</h3>

        <div className="product-card__price-block">
          <span className="product-card__price">${price}</span>
          {fullPrice > price && (
            <span className="product-card__full-price">${fullPrice}</span>
          )}
        </div>

        <div className="product-card__divider" />

        <div className="product-card__specs">
          <div className="product-card__spec-item">
            <span className="product-card__spec-name">Screen</span>
            <span className="product-card__spec-value">{screen}</span>
          </div>

          <div className="product-card__spec-item">
            <span className="product-card__spec-name">Capacity</span>
            <span className="product-card__spec-value">{capacity}</span>
          </div>

          <div className="product-card__spec-item">
            <span className="product-card__spec-name">RAM</span>
            <span className="product-card__spec-value">{ram}</span>
          </div>
        </div>

        <div className="product-card__buttons">
          <button className="product-card__add-to-cart">
            Add to cart
          </button>
          <button className="product-card__favorite">
            <img 
              src="/logos/favourites-icon.svg" 
              alt="Add to favorites" 
              className="product-card__favorite-icon"
            />
          </button>
        </div>
      </Link>
    </div>
  );
}; 