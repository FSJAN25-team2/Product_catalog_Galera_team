import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
}

export const IconLink = ({ to, src, alt, className = '', onClick }: Props) => (
  <NavLink 
      to={to} 
      className={cn('link__effects', className || 'nav__icon-link')}
      onClick={onClick}
    >
    <img src={src} alt={alt} className="nav__icon" />
  </NavLink>
);