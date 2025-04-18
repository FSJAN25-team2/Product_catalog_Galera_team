import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <Link to=".." className="logo__link"><img src="public/img/logos/logo.png" alt="Nice Gadgets Logo" className="logo__image"/></Link>

            <div className="navigation">
                <ul className="navigation__list">
                    <Link to=".."><li className="navigation__link_item">home</li></Link>
                    <Link to="/phones"><li className="navigation__link_item">phone</li></Link>
                    <Link to="/tablets"><li className="navigation__link_item">tablets</li></Link>
                    <Link to="/accessories"><li className="navigation__link_item">accessories</li></Link>
                </ul>
            </div>
        </div>
    );
}
