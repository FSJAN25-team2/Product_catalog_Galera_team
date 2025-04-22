import { IconLink } from '../../atoms/IconLink/IconLink';
import { Logo } from '../../atoms/Logo/Logo';
import { MenuLink } from '../../atoms/MenuLink/MenuLink';

export const HeaderDesktop = () => {
  return (
    <>
      <div className="nav__left__container">
        <Logo />

        <nav className="nav__menu">
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/phones">phones</MenuLink>
        <MenuLink to="/tablets">tablets</MenuLink>
        <MenuLink to="/accessories">accessories</MenuLink>
        </nav>
      </div>

      <div className="nav__icons">
        <IconLink
          to="/favourites"
          src="/icons/favourites-icon.svg"
          alt="Favourites"
        />
        <IconLink to="/cart" src="/icons/cart-icon.svg" alt="Cart" />
      </div>
    </>
  );
};
