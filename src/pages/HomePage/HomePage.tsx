import { useEffect, useState } from 'react';
import { getHotPricedProducts, getProducts } from '../../services/api/allProductsAPI';
import { ShortProduct } from '../../types/ShortProduct';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import { SwiperPhone } from '../../design/organisms/SwiperPhone/SwiperPhone';
import SwiperBanner from '../../design/organisms/SwiperBanner/SwiperBanner';
import { ShopByCategory } from '../../design/organisms/ShopByCategory';
import { H1 } from '../../design/atoms/Typography/H1/H1';
import { Category } from '../../types/Category';
import { Sorting } from '../../types/Sorting';

export const HomePage = () => {
  const [hotProducts, setHotProducts] = useState<ShortProduct[]>([]);
  const [newProducts, setNewProducts] = useState<ShortProduct[]>([]);

  useEffect(() => {
    getHotPricedProducts().then(setHotProducts);
  }, []);

  useEffect(() => {
    getProducts({
      limit: 10,
      page: 1,
      category: Category.Phones,
      sortBy: Sorting.Newest,
    }).then(res => {
      setNewProducts(res.products);
    });
  }, []);

  return (
    <>
      <H1 className="home-page__title">Welcome to Nice Gadgets store</H1>
      <SwiperBanner />

      <div className="home-page__content">
        <SwiperPhone title="Brand new models">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SwiperPhone>
      </div>

      <ShopByCategory />

      <div className="home-page__content">
        <SwiperPhone title="Hot prices">
          {hotProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SwiperPhone>
      </div>
    </>
  );
};
