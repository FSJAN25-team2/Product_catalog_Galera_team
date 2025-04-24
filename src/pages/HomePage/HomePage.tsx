import './HomePage.scss';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import SwiperBanner from '../../design/organisms/SwiperBanner/SwiperBanner';
import { ShopByCategory } from '../../design/organisms/ShopByCategory';
import { H1 } from '../../design/atoms/Typography/H1/H1';
import { SwiperPhone } from '../../design/organisms/SwiperPhone/SwiperPhone';

const testProduct = {
  id: 1,
  color: 'red',
  year: 2022,
  name: 'Apple iPhone 14 Pro',
  fullPrice: 1199,
  price: 1099,
  screen: "6.1' OLED",
  capacity: '256GB',
  ram: '6GB',
  image: 'https://placehold.co/600x900',
  itemId: '1',
  category: 'phones',
};

export const HomePage = () => {
  const productCards = Array.from({ length: 12 }, (_, i) => (
    <ProductCard key={i} product={testProduct} />
  ));
  return (
    <>
      <H1 className="home-page__title">Welcome to Nice Gadgets store</H1>
      <SwiperBanner />

      <div className="home-page__content">
        <SwiperPhone title="Brand new models">{productCards}</SwiperPhone>
      </div>

      <ShopByCategory />

      <div className="home-page__content">
        <SwiperPhone title="Hot prices">{productCards}</SwiperPhone>
      </div>
    </>
  );
};
