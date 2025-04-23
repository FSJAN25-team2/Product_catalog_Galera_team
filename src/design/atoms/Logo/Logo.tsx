import { Link } from 'react-router-dom';

interface Props {
  linkClass: string;
  imgClass: string;
}

export const Logo = ({ linkClass, imgClass }: Props) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <Link to="/" className={linkClass} onClick={handleScrollToTop}>
      <img
        src="/img/logos/logo.svg"
        alt="Nice Gadgets Logo"
        className={imgClass}
      />
    </Link>
  );
};
