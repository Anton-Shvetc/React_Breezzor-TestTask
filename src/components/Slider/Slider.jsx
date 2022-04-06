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

import {useCallback, useRef} from 'react'
import { Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

function Slider() {
  const [count, setCount] = useState(0);

  const slides = [
    { id: 1, name: "Сент Винсент и Гренадины" },
    { id: 2, name: "Португалия" },
    { id: 3, name: "Саудовская Аравия" },
    { id: 4, name: "Испания" },
    { id: 5, name: "Франция" },
  ];

  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay]); // don't need navigation anymore

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div className="slider">
      <h1 className="slider_title">{slides[count].name}</h1>
      <div className="left-floating-el" onClick={prevSlide}>
       prev
      </div>
       <div className="right-floating-el" onClick={nextSlide}>
       next
      </div>
      <Swiper
        navigation={true}
        ref={swiperRef}
        // effect={"coverflow"}
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
        // pagination={{
        //   clickable: true,
        // }}
        onSlideChange={(swiperCore) => {
          const { activeIndex, snapIndex, previousIndex, realIndex } =
            swiperCore;
          setCount(realIndex);
          console.log(realIndex);
          // console.log({ activeIndex, snapIndex, previousIndex, realIndex });
          // console.log(swiperCore.realIndex)

          // return (test)
        }}
        className="mySwiper"
      >
       
        {/* <SwiperSlide>
   e
        </SwiperSlide>
        <SwiperSlide>
        res
        </SwiperSlide>
        <SwiperSlide>
        res
        </SwiperSlide>
        <SwiperSlide>
        res
        </SwiperSlide>
        <SwiperSlide>
        res
        </SwiperSlide>
        <SwiperSlide>
        res
        </SwiperSlide> */}



        {slides.map((i, el) => {
          return (
            <div key={i.id} >
              <SwiperSlide> {i.name}</SwiperSlide>
            </div>
          );
        })}

      </Swiper>

  
   
      {/* <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
      </Swiper> */}
     

      <h4 className="slider_text">Мир Brezzor огромный, исследуй его!</h4>
    </div>
  );
}
export default Slider;
