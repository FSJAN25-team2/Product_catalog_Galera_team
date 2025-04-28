// import { Switch } from '@mui/material';
import { IconLink } from '../../atoms/IconLink/IconLink';
import { Logo } from '../../atoms/Logo/Logo';
import { MenuLink } from '../../atoms/MenuLink/MenuLink';
import { Switcher } from '../../atoms/Switcher/Switcher';

interface Props {
  cartProducts: number;
  favProducts: number;
}

export const HeaderDesktop: React.FC<Props> = ({ cartProducts, favProducts }) => {
  return (
    <>
      <div className="nav__left__container">
        <Logo linkClass={"nav__logo"} imgClass={"nav__logo-image"} />

        <nav className="nav__menu">
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/phones">phones</MenuLink>
        <MenuLink to="/tablets">tablets</MenuLink>
        <MenuLink to="/accessories">accessories</MenuLink>
        </nav>
      </div>
      <Switcher />
      <div className="nav__icons">
        <IconLink
          to="/favourites"
          src="/icons/favourites-icon.svg"
          alt="Favourites"
          quantity={favProducts}
        />
        <IconLink
          to="/cart"
          src="/icons/cart-icon.svg"
          alt="Cart"
          quantity={cartProducts}
        />
      </div>
    </>
  );
};
