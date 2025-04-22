import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MenuLink = ({ to, children, className = '', onClick }: Props) => (
  <NavLink 
    to={to} 
    className={cn('link__effects', className || 'nav__menu-link')} 
    onClick={onClick}
  >
    {children}
  </NavLink>
);