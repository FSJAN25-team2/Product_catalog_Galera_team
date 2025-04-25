import { useState, useEffect } from 'react';
import './Cart.scss';
import { CartItem } from '../../design/organisms/CartItem/CartItem';
import { H1 } from '../../design/atoms/Typography/H1/H1';
import { useAppSelector } from '../../store/hooks';
import { ButtonBack } from '../../design/atoms/ButtonBack/ButtonBack';

export const Cart = () => {
  const cartProducts = useAppSelector(state => state.cartProducts);
  const [itemQuantities, setItemQuantities] = useState<
    Record<string, { quantity: number; price: number }>
  >({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleQuantityChange = (
    id: string,
    quantity: number,
    price: number,
  ) => {
    setItemQuantities(prev => ({
      ...prev,
      [id]: { quantity, price },
    }));
  };

  useEffect(() => {
    let newTotalPrice = 0;
    let newTotalItems = 0;

    Object.values(itemQuantities).forEach(({ quantity, price }) => {
      newTotalPrice += quantity * price;
      newTotalItems += quantity;
    });

    setTotalPrice(newTotalPrice);
    setTotalItems(newTotalItems);
  }, [itemQuantities]);


  return (
    <section className="cart">
      <ButtonBack />

      <H1 className="cart__title">Cart</H1>

      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map(product => (
            <CartItem
              key={product.itemId}
              product={product}
              onQuantityChange={handleQuantityChange}
            />
          ))}

          <div className="cart__checkout-container">
            <div className="cart__total">
              <span className="cart__total-price">
                $
                {totalPrice % 1 === 0
                  ? totalPrice.toFixed(0)
                  : totalPrice.toFixed(2)}
              </span>

              <span className="cart__total-description">
                Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button className="cart__checkout-button" type="button">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <H1 className="cart__empty-message">
          No items have been added to your basket
        </H1>
      )}
    </section>
  );
};
