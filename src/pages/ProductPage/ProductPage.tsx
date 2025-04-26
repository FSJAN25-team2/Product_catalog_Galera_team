import { useLocation, useParams } from 'react-router-dom';
import { PictureSlider } from './PictureSlider';
import { ColorPicker } from './ColorPicker';
import { SelectCapacity } from './SelectCapacity';
import { PriceBlock } from './PriceBlock';
import {
  getAccessoryById,
  getPhoneById,
  getTabletById,
} from '../../services/api/allProductsAPI';
import { useEffect, useState } from 'react';
import { FullProduct } from '../../types/FullProduct';
import { Specs } from '../../design/molecules/Specs/Specs';
import { H2 } from '../../design/atoms/Typography/H2/H2';
import { About } from './About';
import { SwiperPhone } from '../../design/organisms/SwiperPhone/SwiperPhone';
import { PageButtons } from './PageButtons';
import { ProductCard } from '../../design/organisms/ProductCard/ProductCard';
import { H3 } from '../../design/atoms/Typography/H3/H3';
import { Breadcrumbs } from '../../design/atoms/Breadcrumbs';
import { ButtonBack } from '../../design/atoms/ButtonBack/ButtonBack';

const data = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

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

export const ProductPage = () => {
  const [product, setProduct] = useState<FullProduct>(data);

  const { tabId } = useParams();
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const currentproduct = location.state.product;

  console.log(currentproduct);

  const {
    camera,
    capacity,
    capacityAvailable,
    cell,
    color,
    colorsAvailable,
    description,
    // id,
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

  const productCards = Array.from({ length: 12 }, (_, i) => (
    <ProductCard key={i} product={testProduct} />
  ));

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

    return () => {
      setProduct(data);
    };
  }, [category, tabId]);

  return (
    <div className='product'>
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
          year={currentproduct.year}
        />

        <PageButtons product={currentproduct} />

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
        <SwiperPhone title="You may also like">{productCards}</SwiperPhone>
      </div>
    </div>
  );
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

