import { useLocation, useParams } from 'react-router-dom';
import { PictureSlider } from './PictureSlider';
import { ColorPicker } from './ColorPicker';
import { SelectCapacity } from './SelectCapacity';
import { PriceBlock } from './PriceBlock';
import {
  getAccessoryById,
  getPhoneById,
  getProducts,
  getTabletById,
} from '../../services/api/allProductsAPI';
import { useEffect, useState } from 'react';
import { FullProduct } from '../../types/FullProduct';
import { ShortProduct } from '../../types/ShortProduct';
import { Specs } from '../../design/molecules/Specs/Specs';
import { H2 } from '../../design/atoms/Typography/H2/H2';
import { About } from './About';
import { SwiperPhone } from '../../design/organisms/SwiperPhone/SwiperPhone';
import { PageButtons } from './PageButtons';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import { H3 } from '../../design/atoms/Typography/H3/H3';
import { Breadcrumbs } from '../../design/atoms/Breadcrumbs';
import { ButtonBack } from '../../design/atoms/ButtonBack/ButtonBack';
import { Category } from '../../types/Category';
import { Sorting } from '../../types/Sorting';
import { getRandomProducts } from './Utils/Ulitls';


export const ProductPage = () => {
  const [product, setProduct] = useState<FullProduct | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<ShortProduct[]>([]);

  const { tabId } = useParams();
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const currentProduct = location.state?.product;

  useEffect(() => {
    if (!tabId) return;

    let productPromise;

    switch (category) {
      case 'phones':
        productPromise = getPhoneById(tabId);
        break;
      case 'tablets':
        productPromise = getTabletById(tabId);
        break;
      case 'accessories':
        productPromise = getAccessoryById(tabId);
        break;
      default:
        return;
    }

    productPromise.then(result => {
      setProduct(result);
    });
  }, [category, tabId]);

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

  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    camera,
    capacity,
    capacityAvailable,
    cell,
    color,
    colorsAvailable,
    description,
    images,
    name,
    namespaceId,
    priceDiscount,
    priceRegular,
    processor,
    ram,
    resolution,
    screen,
    zoom,
  } = product;

  return (
    <div className="product">
      <Breadcrumbs className="product__breadcrumbs" />
      <ButtonBack className="product__button-back" />

      <H2 className="product__title">{name}</H2>

      <PictureSlider images={images} />

      <div className="product__top-details">
        <ColorPicker
          colorsAvailable={colorsAvailable}
          color={color}
          id={namespaceId}
        />

        <SelectCapacity
          capacityAvailable={capacityAvailable}
          capacity={capacity}
          category={category}
        />

        <PriceBlock
          priceDiscount={priceDiscount}
          priceRegular={priceRegular}
          year={currentProduct?.year}
        />

        <PageButtons product={currentProduct} />

        <Specs
          specs={{ screen, resolution, processor, ram }}
          className="product__specs"
        />
      </div>

      <About description={description} />

      <div className="product__tech-specs section">
        <H3 className="section__title">Tech specs</H3>

        <Specs
          specs={{
            screen,
            resolution,
            processor,
            ram,
            capacity,
            camera,
            zoom,
            cell,
          }}
          className="product__specs"
        />
      </div>

      <div className="product__swiper">
        <SwiperPhone title="You may also like">
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SwiperPhone>
      </div>
    </div>
  );
};
