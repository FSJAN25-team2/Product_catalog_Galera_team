import React from 'react';
import './SpecItem.scss';

interface SpecItemProps {
  name: string;
  value: string;
}

export const SpecItem: React.FC<SpecItemProps> = ({ name, value }) => {
  return (
    <div className="product-card__spec-item">
      <span className="product-card__spec-name">{name}</span>
      <span className="product-card__spec-value">{value}</span>
    </div>
  );
}; 