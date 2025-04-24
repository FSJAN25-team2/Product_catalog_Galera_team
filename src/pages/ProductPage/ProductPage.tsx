import { Link } from 'react-router-dom';
import { P_Small } from '../../design/atoms/Typography/P_Small/P_Small';
import ImageSlider from './PictureSlider';

export const ProductPage = () => {
  return (
    <>
      <div className="product__breadcrumbs">
        <Link to="/">
          <img src="/icons/home-icon.svg" alt="Home" />
        </Link>
        <img src="/icons/arrow-right.svg" alt="Home" />
        <P_Small className="product__breadcrumbs--item-category">
          Phones
        </P_Small>
        <img src="/icons/arrow-right.svg" alt="Home" />
        <P_Small className="product__breadcrumbs--item-title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </P_Small>
      </div>

      <Link to=".." className="product__button-back">
        <img src="/icons/arrow-left.svg" alt="Home" />
        <P_Small>Back</P_Small>
      </Link>

      <ImageSlider />
    </>
  );
};
