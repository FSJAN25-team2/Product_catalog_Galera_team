import React from 'react';
import './Price.scss';

interface PriceProps {
  price: number;
  fullPrice?: number;
}

export const Price: React.FC<PriceProps> = ({ price, fullPrice }) => {
  return (
    <div className="product-card__price-block">
      <span className="product-card__price">${price}</span>
      {fullPrice && fullPrice > price && (
        <span className="product-card__full-price">${fullPrice}</span>
      )}
    </div>
  );
}; 