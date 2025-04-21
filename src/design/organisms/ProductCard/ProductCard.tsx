import React from 'react';
import { Link } from 'react-router-dom';
import { Price } from '../../atoms/Price/Price';
import { ProductSpecs } from '../../molecules/ProductSpecs/ProductSpecs';
import { ProductActions } from '../../molecules/ProductActions/ProductActions';
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

interface Product {
  product: ProductCardProps;
}

export const ProductCard: React.FC<Product> = ({ product }) => {
  const { 
    capacity, 
    category, 
    fullPrice, 
    image, 
    itemId, 
    name, 
    price, 
    ram, 
    screen 
  } = product;

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

        <Price price={price} fullPrice={fullPrice} />

        <div className="product-card__divider" />

        <ProductSpecs screen={screen} capacity={capacity} ram={ram} />

        <ProductActions />
      </Link>
    </div>
  );
}; 
