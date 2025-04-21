import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';
import { useCallback, useState } from 'react';

export const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleResize = useCallback(() => setWidth(window.innerWidth), []);

  window.addEventListener('resize', handleResize);

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__left__container">
          <NavLink to="/" className="nav__logo">
            <img
              src="/img/logos/logo.png"
              alt="Nice Gadgets Logo"
              className="nav__logo-image"
            />
          </NavLink>

          {width > 639 && (
            <nav className="nav__menu">
              <NavLink to="/" className="nav__menu-link link__effects">
                home
              </NavLink>
              <NavLink to="/phones" className="nav__menu-link link__effects">
                phones
              </NavLink>
              <NavLink to="/tablets" className="nav__menu-link link__effects">
                tablets
              </NavLink>
              <NavLink
                to="/accessories"
                className="nav__menu-link link__effects"
              >
                accessories
              </NavLink>
            </nav>
          )}
        </div>

        <div className="nav__icons">
          {width > 639 && (
            <>
              <NavLink
                to="/favourites"
                className="nav__icon-link link__effects"
              >
                <img
                  src="/icons/favourites-icon.svg"
                  alt="Favourites"
                  className="nav__icon"
                />
              </NavLink>
              <NavLink to="/cart" className="nav__icon-link link__effects">
                <img
                  src="/icons/cart-icon.svg"
                  alt="Cart"
                  className="nav__icon"
                />
              </NavLink>
            </>
          )}

          {width < 640 && (
            <Link to="#" className="nav__icon-link--mobile link__effects">
              <img
                src="/icons/burger-menu.svg"
                alt="burger menu"
                className="nav__icon"
                onClick={handleToggleMobileMenu}
              />
            </Link>
          )}
        </div>

        <aside
          className={isMobileMenuActive ? 'nav--mobile active' : 'nav--mobile'}
        >
          <div className="top-bar">
            <Link to="/" className="nav__logo">
              <img
                src="/img/logos/logo.png"
                alt="Nice Gadgets Logo"
                className="nav__logo-image"
              />
            </Link>

            <Link to="#" className="nav__icon-link">
              <img
                src="/icons/icon-close.svg"
                alt="close button"
                className="nav__icon"
                onClick={handleToggleMobileMenu}
              />
            </Link>
          </div>

          <nav className="nav__menu--mobile">
            <ul
              className="nav__menu--mobile-links"
              onClick={handleToggleMobileMenu}
            >
              <li className="nav__menu--mobile--li">
                <NavLink
                  to="/"
                  className="nav__menu-link--mobile link__effects"
                >
                  home
                </NavLink>
              </li>
              <li className="nav__menu--mobile--li">
                <NavLink
                  to="/phones"
                  className="nav__menu-link--mobile link__effects"
                >
                  phones
                </NavLink>
              </li>
              <li className="nav__menu--mobile--li">
                <NavLink
                  to="/tablets"
                  className="nav__menu-link--mobile link__effects"
                >
                  tablets
                </NavLink>
              </li>
              <li className="nav__menu--mobile--li">
                <NavLink
                  to="/accessories"
                  className="nav__menu-link--mobile link__effects"
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="bottom-bar" onClick={handleToggleMobileMenu}>
            <NavLink to="/favourites" className="bottom-bar__link link__effects">
              <img
                src="/icons/favourites-icon.svg"
                alt="Favourites"
                className="nav__icon"
              />
            </NavLink>
            <NavLink to="/cart" className="bottom-bar__link link__effects">
              <img
                src="/icons/cart-icon.svg"
                alt="Cart"
                className="nav__icon"
              />
            </NavLink>
          </div>
        </aside>
      </div>
    </nav>
  );
};
