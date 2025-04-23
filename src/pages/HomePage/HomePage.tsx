import './HomePage.scss';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import SwiperBanner from '../../design/organisms/SwiperBanner/SwiperBanner';
import { ShopByCategory } from '../../design/organisms/ShopByCategory';
import { H1 } from '../../design/atoms/Typography/H1/H1';
// import SwiperPhone from '../../design/organisms/SwiperPhone/SwiperPhone';

const testProduct = {
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
  return (
    <>
      <H1 className="home-page__title">Welcome to Nice Gadgets store</H1>
      <SwiperBanner />
      <ShopByCategory />

      {/* <SwiperPhone /> */}
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
      <ProductCard product={testProduct} />
    </>
  );
};
