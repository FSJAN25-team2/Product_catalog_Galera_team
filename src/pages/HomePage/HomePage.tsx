import './HomePage.scss';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import SwiperBanner from '../../design/organisms/SwiperBanner/SwiperBanner';
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
      <h1 className="home-page__title">Welcome to Nice Gadgets store</h1>
      <SwiperBanner />

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
