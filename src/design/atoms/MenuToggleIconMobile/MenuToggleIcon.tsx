import { Link } from 'react-router-dom';

interface Props {
  src: string;
  alt: string;
  onClick: () => void;
}

export const MenuToggleIcon = ({src, alt, onClick}: Props) => {
  return (
    <div className='nav__icons'>
      <Link to="#" className='nav__icon-link link__effects'>
        <img
          src={src}
          alt={alt}
          className='nav__icon'
          onClick={onClick}
        />
      </Link>
    </div>
  );
};
