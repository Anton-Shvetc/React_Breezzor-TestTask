import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss/effect-coverflow";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./Slider.scss";
import { useState } from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef } from "react";
import { Autoplay } from "swiper";
import {countries} from "../../data/data"

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

function Slider() {
  const [count, setCount] = useState(0);
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div className="slider">
      <h1 className="slider_title">{countries[count].name}</h1>
      <div className="arrow-prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </div>
      <div className="arrow-next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
      <Swiper
        navigation={true}
        watchSlidesVisibility={true}
        ref={swiperRef}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          setCount(realIndex);
        }}
        className="mySwiper"
      >
        {countries.map((slide, el) => {
          return (
            <div key={slide.id}>
              <SwiperSlide> {slide.name}</SwiperSlide>
            </div>
          );
        })}
      </Swiper>

      <h4 className="slider_text">Мир Brezzor огромный, исследуй его!</h4>
    </div>
  );
}
export default Slider;
