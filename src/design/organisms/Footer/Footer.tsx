import { Logo } from '../../atoms/Logo/Logo';

export const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <a href="https://github.com/FSJAN25-team2/Product_catalog_Galera_team" rel="noreferrer">
        github
      </a>
      <a href="#" className="footer_link">
        contacts
      </a>
      <a href="#" className="footer_link">
        rights
      </a>
    </div>
  );
};
