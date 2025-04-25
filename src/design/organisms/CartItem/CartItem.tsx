import React, { useState } from 'react';
import './CartItem.scss';
import { ShortProduct } from '../../../types/ShortProduct';
import { useAppDispatch } from '../../../store/hooks';
import * as CartAction from '../../../store/features/cartProducts';

interface CartItemProps {
  product: ShortProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { name, price, image, year, fullPrice, itemId } = product;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleQuantityIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleRemove = () => {
    dispatch(CartAction.removeFromCart(itemId));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__content">
        <button
          className="cart-item__remove-button"
          onClick={handleRemove}
          aria-label="Remove item"
        >
          ×
        </button>

        <div className="cart-item__image-container">
          <img src={image} alt={name} className="cart-item__image" />
        </div>

        <div className="cart-item__info">
          <h3 className="cart-item__name">{name}</h3>
        </div>
      </div>

      <div className="cart-item__controls">
        <div className="cart-item__quantity">
          <button
            className="cart-item__quantity-button cart-item__quantity-button--decrease"
            onClick={handleQuantityDecrease}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            –
          </button>

          <span className="cart-item__quantity-value">{quantity}</span>

          <button
            className="cart-item__quantity-button cart-item__quantity-button--increase"
            onClick={handleQuantityIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="cart-item__price">
          ${year < 2022 ? price : fullPrice}
        </div>
      </div>
    </div>
  );
};
