import React from 'react';
import './ProductActions.scss';

export const ProductActions: React.FC = () => {
  return (
    <div className="product-card__buttons">
      <button className="product-card__add-to-cart">
        Add to cart
      </button>
      <button className="product-card__favorite">
        <img 
          src="/icons/favourites-icon.svg" 
          alt="Add to favorites" 
          className="product-card__favorite-icon"
        />
      </button>
    </div>
  );
}; 