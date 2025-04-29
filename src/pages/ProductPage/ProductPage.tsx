import { useLocation, useParams } from 'react-router-dom';
import { PictureSlider } from './PictureSlider';
import { ColorPicker } from './ColorPicker';
import { SelectCapacity } from './SelectCapacity';
import { PriceBlock } from './PriceBlock';
import {
  getAccessoryById,
  getPhoneById,
  getProducts,
  getShortProduct,
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
import { Loader } from './Loader';
import { getSpecs } from '../../utils/helpers';

export const ProductPage = () => {
  const [product, setProduct] = useState<FullProduct | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<
    ShortProduct[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<ShortProduct | null>(null);

  const { tabId } = useParams();
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  // const currentProduct = location.state.product;

  console.log(currentProduct);

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

    getShortProduct(tabId).then(res => setCurrentProduct(res));

    return () => {
      setProduct(null);
    }
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
    }).finally(() => {
      setIsLoading(false);
    })
  }, [tabId]);

  if (!product) {
    return (
      <div className="product">
        <Breadcrumbs className="product__breadcrumbs" />
        <ButtonBack className="product__button-back" />
        <Loader />
      </div>
    );
  }

  const detailProduct = {...currentProduct, ...getSpecs(product)}
  // console.log(detailProduct)
  console.log(currentProduct);

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
          current={color}
          category={category}
          id={namespaceId}
          tabId={tabId as string}
          currentProduct={currentProduct as ShortProduct}
        />

        <SelectCapacity
          capacityAvailable={capacityAvailable}
          current={capacity}
          category={category}
          tabId={tabId as string}
          currentProduct={currentProduct as ShortProduct}
        />

        <PriceBlock
          priceDiscount={priceDiscount}
          priceRegular={priceRegular}
          year={currentProduct?.year as number}
        />

        <PageButtons product={currentProduct as ShortProduct} detailProduct={detailProduct} />

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
        <SwiperPhone title="You may also like" isLoading={isLoading}>
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SwiperPhone>
      </div>
    </div>
  );
};
