import { useEffect, useState } from 'react';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="nav">
      <div className="nav__container">
        {width > 639 && <HeaderDesktop />}
        {width <= 639 && <HeaderMobile />}
      </div>
    </div>
  );
};
