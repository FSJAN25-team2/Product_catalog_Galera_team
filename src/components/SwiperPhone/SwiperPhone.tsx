import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import './SwiperPhone.scss';

export default function SwiperPhone() {
  const swiperRef = useRef<SwiperType | null>(null);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h2>Brand new models</h2>
        <div className="swiper-buttons">
          <button onClick={slidePrev} className="swiper-button">
            ←
          </button>
          <button onClick={slideNext} className="swiper-button">
            →
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
          {Array.from({ length: 12 }, (_, i) => (
            <SwiperSlide key={i}>
              <div className="card">Slide {i + 1}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}