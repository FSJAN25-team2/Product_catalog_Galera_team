import { ProductCard } from '../ProductCard/ProductCard';
import SwiperPhone from '../SwiperPhone/SwiperPhone';
import './HomePage.scss';

const testProduct = {
  name: 'Apple iPhone 14 Pro',
  fullPrice: 1199,
  price: 1099,
  screen: "6.1' OLED",
  capacity: '256GB',
  ram: '6GB',
  image: 'https://example.com/iphone.jpg',
  itemId: '1',
  category: 'phones',
};

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store
      </h1>
      
      <div className="home-page__content">
        <SwiperPhone />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
      </div>
    </div>
  );
};
