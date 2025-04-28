import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useRef, useEffect } from 'react';

interface Props {
  images: string[];
}

export const PictureSlider = ({ images }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const WIDTH_FOR_SWIPER = 767;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider__outer-container">
      <Slider
        asNavFor={sliderRef2.current ?? undefined}
        ref={sliderRef1}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slider__swiper-thumbnails"
        arrows={false}
        infinite={false}
        vertical={width > WIDTH_FOR_SWIPER}
      >
        {images.map(image => (
          <div>
            <img src={image} alt="" className="slider__image--thumbnail" />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={sliderRef1.current ?? undefined}
        ref={sliderRef2}
        className="slider__swiper-preview"
        arrows={false}
        infinite={false}
        slidesToShow={1}
        vertical={width > WIDTH_FOR_SWIPER}
        verticalSwiping={width > WIDTH_FOR_SWIPER}
        swipe={width < WIDTH_FOR_SWIPER}
        swipeToSlide={width < WIDTH_FOR_SWIPER}
      >
        {images.map(image => (
          <div>
            <img src={image} alt="" className="slider__image--preview" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
