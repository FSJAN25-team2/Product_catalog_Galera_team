import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className="nav__logo">
    <img
      src="/img/logos/logo.png"
      alt="Nice Gadgets Logo"
      className="nav__logo-image"
    />
  </Link>
);