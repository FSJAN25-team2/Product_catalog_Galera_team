import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { P_Small } from '../Typography/P_Small/P_Small';

interface Props {
  to: string;
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  quantity: number;
}

export const IconLink = ({ to, src, alt, className = '', onClick, quantity }: Props) => {
  return (
    <NavLink
      to={to}
      className={cn('link__effects', className || 'nav__icon-link')}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="nav__icon"/>
      {quantity > 0 && 
        (<div className='nav__icon-link-quantity'>
        <P_Small className='nav__icon-link-quantity--text'>{quantity}</P_Small>
        </div>)
      }
    </NavLink>
  );
};
