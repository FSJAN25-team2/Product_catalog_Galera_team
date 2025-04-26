import { Breadcrumbs } from '../../design/atoms/Breadcrumbs';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api/allProductsAPI';
import { ShortProduct } from '../../types/ShortProduct';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import { Category } from '../../types/Category';
import { Sorting } from '../../types/Sorting';
import { SwiperPhone } from '../../design/organisms/SwiperPhone/SwiperPhone';
import { H1 } from '../../design/atoms/Typography/H1/H1';

function getRandomProducts(
  products: ShortProduct[],
  count: number,
): ShortProduct[] {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const ItemCard = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<
    ShortProduct[]
  >([]);

  useEffect(() => {
    getProducts({
      limit: 50,
      page: 1,
      category: Category.Phones,
      sortBy: Sorting.Newest,
    }).then(res => {
      const products = res.products;
      const randomProducts = getRandomProducts(products, 8);
      setRecommendedProducts(randomProducts);
    });
  }, []);
  return (
    <>
      <Breadcrumbs style={{ gridColumn: '1/-1' }} />
    <H1 className="item-card__title">Item card content</H1>

    <div className="item-card__slider">
      <SwiperPhone title="You may also like">
        {recommendedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SwiperPhone>
    </div>
  </>
  )
};

