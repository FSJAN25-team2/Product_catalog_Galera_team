import { Link } from "react-router-dom";
import '../../styles/NavBar.scss';

export const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <Link to="/" className="nav__logo">
                    <img 
                        src="/img/logos/logo.png" 
                        alt="Nice Gadgets Logo" 
                        className="nav__logo-image"
                    />
                </Link>

                <ul className="nav__menu">
                    <li>
                        <Link to="/" className="nav__menu-link">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/phones" className="nav__menu-link">
                            PHONES
                        </Link>
                    </li>
                    <li>
                        <Link to="/tablets" className="nav__menu-link">
                            TABLETS
                        </Link>
                    </li>
                    <li>
                        <Link to="/accessories" className="nav__menu-link">
                            ACCESSORIES
                        </Link>
                    </li>
                </ul>

                <div className="nav__icons">
                    <Link to="/favourites" className="nav__icon-link">
                        <img 
                            src="/logos/favourites-icon.svg" 
                            alt="Favourites" 
                            className="nav__icon"
                        />
                    </Link>
                    <Link to="/cart" className="nav__icon-link">
                        <img 
                            src="/logos/cart-icon.svg" 
                            alt="Cart" 
                            className="nav__icon"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
