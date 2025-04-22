import { useState } from 'react';
import { Logo } from '../../atoms/Logo/Logo';
import { MenuLink } from '../../atoms/MenuLink/MenuLink';
import { MenuToggleIcon } from '../../atoms/MenuToggleIconMobile/MenuToggleIcon';
import { IconLink } from '../../atoms/IconLink/IconLink';

export const HeaderMobile = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <Logo />

      <MenuToggleIcon
        src={'/icons/burger-menu.svg'}
        alt={'Menu'}
        onClick={handleToggleMobileMenu}
      />

      <aside
        className={isMobileMenuActive ? 'nav--mobile active' : 'nav--mobile'}
      >
        <div className="top-bar">
          <Logo />

          <MenuToggleIcon
            src={'/icons/icon-close.svg'}
            alt={'Close'}
            onClick={handleToggleMobileMenu}
          />
        </div>

        <nav className="nav__menu--mobile">
          <ul
            className="nav__menu--mobile-links"
            onClick={handleToggleMobileMenu}
          >
            <li className="nav__menu--mobile--li">
              <MenuLink to="/" className="nav__menu-link--mobile">
                home
              </MenuLink>
            </li>
            <li className="nav__menu--mobile--li">
              <MenuLink to="/phones" className="nav__menu-link--mobile">
                phones
              </MenuLink>
            </li>
            <li className="nav__menu--mobile--li">
              <MenuLink to="/tablets" className="nav__menu-link--mobile">
                tablets
              </MenuLink>
            </li>
            <li className="nav__menu--mobile--li">
              <MenuLink to="/accessories" className="nav__menu-link--mobile">
                accessories
              </MenuLink>
            </li>
          </ul>
        </nav>

        <div className="bottom-bar" onClick={handleToggleMobileMenu}>
          <IconLink to="/favourites" src="/icons/favourites-icon.svg" alt="Favourites" className="bottom-bar__link" />
          <IconLink to="/cart" src="/icons/cart-icon.svg" alt="Cart" className="bottom-bar__link" />
        </div>
      </aside>
    </>
  );
};
