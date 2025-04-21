import React from 'react';
import { SpecItem } from '../../atoms/SpecItem/SpecItem';
import './ProductSpecs.scss';

interface ProductSpecsProps {
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ 
  screen, 
  capacity, 
  ram 
}) => {
  return (
    <div className="product-card__specs">
      <SpecItem name="Screen" value={screen} />
      <SpecItem name="Capacity" value={capacity} />
      <SpecItem name="RAM" value={ram} />
    </div>
  );
}; 