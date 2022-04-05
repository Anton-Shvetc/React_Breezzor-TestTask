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

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider() {
  const [count, setCount] = useState(0);

  const slides = [
    { id: 1, name: "Сент Винсент и Гренадины" },
    { id: 2, name: "Португалия" },
    { id: 3, name: "Саудовская Аравия" },
    { id: 4, name: "Испания" },
    { id: 5, name: "Франция" },
  ];

  return (
    <div className="slider">
      <h1 className="slider_title">{slides[count].name}</h1>
      <Swiper
        navigation={true}
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
        pagination={{
          clickable: true,
        }}
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
            <div key={i.id}>
              <SwiperSlide>{i.name}</SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <h4>Мир Brezzor огромный, исследуй его!</h4>
    </div>
  );
}
export default Slider;
