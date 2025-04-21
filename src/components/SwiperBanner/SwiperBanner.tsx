import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './SwiperBanner.scss';

const SwiperBanner: React.FC = () => {
  const bannerItems: { image: string; path: string }[] = [
    { image: 'banner-phones', path: '/phones' },
    { image: 'banner-tablets', path: '/tablets' },
    { image: 'banner-accessories', path: '/accessories' },
  ];

  return (
    <div className="banner-outer-container">
      <button
        className="custom-nav-button prev-button"
        aria-label="Previous slide"
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 0.75L1.25 5L5.5 9.25"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="swiper-container">
        <Swiper
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (_: number, className: string) =>
              `<span class="${className}"></span>`,
          }}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          simulateTouch={false}
        >
          {bannerItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.path} className="swiper-image-wrapper">
                <img
                  src={`/img/${item.image}.png`}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  className="slide-image"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="custom-nav-button next-button" aria-label="Next slide">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.75L4.75 5L0.5 9.25"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="custom-pagination"></div>
    </div>
  );
};

export default SwiperBanner;
