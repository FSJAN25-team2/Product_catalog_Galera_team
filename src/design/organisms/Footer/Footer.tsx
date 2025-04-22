import { Logo } from '../../atoms/Logo/Logo';
import { BackToTop } from '../../molecules/BackToTop/BackToTop';

export const Footer = () => {
  return (
    <div className="footer">
      <Logo linkClass="footer__logo-link" imgClass="footer__logo-image" />

      <div className="footer__links">
        <a
          href="https://github.com/FSJAN25-team2/Product_catalog_Galera_team"
          rel="noreferrer"
          className="footer__link"
        >
          github
        </a>
        <a href="#" rel="noreferrer" className="footer__link">
          contacts
        </a>
        <a href="#" rel="noreferrer" className="footer__link">
          rights
        </a>
      </div>

      <BackToTop />
    </div>
  );
};
