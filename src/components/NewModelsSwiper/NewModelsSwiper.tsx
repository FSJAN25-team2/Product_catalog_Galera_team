import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { ProductCard } from '../ProductCard/ProductCard';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/pagination';
import './NewModelsSwiper.scss';

interface Props {
  products: Product[];
}

export const NewModelsSwiper: React.FC<Props> = ({ products }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h2>Brand new models</h2>
        <div className="swiper-buttons">
          <button onClick={slidePrev} className="swiper-button">
            <ArrowBackIosNew sx={{ fontSize: 18 }} />
          </button>
          <button onClick={slideNext} className="swiper-button">
            <ArrowForwardIos sx={{ fontSize: 18 }} />
          </button>
        </div>
      </div>
      <div className="swiper-controls">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={16}
          grabCursor={true}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper"
          wrapperClass="swiper-wrapper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.itemId}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}; 