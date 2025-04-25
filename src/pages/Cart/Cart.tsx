import './Cart.scss';
import { CartItem } from '../../design/organisms/CartItem/CartItem';
import { H1 } from '../../design/atoms/Typography/H1/H1';
import { useAppSelector } from '../../store/hooks';

export const Cart = () => {
  const cartProducts = useAppSelector(state => state.cartProducts);
  console.log(cartProducts);

  return (
    <section className="cart">
      <H1 className="cart__title">Cart</H1>

      <div className="cart__items">
        {cartProducts.map(cart => {
          return <CartItem product={cart} />;
        })}
      </div>
    </section>
  );
};
