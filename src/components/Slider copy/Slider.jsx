import './Slider.scss'

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";


import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider() {
    const slides = [
        { id: 1, name: "Сент Винсент и Гренадины" },
        { id: 2, name: "Португалия" },
        { id: 3, name: "Саудовская Аравия" },
        { id: 4, name: "Испания" },
        { id: 5, name: "Франция" },
      ];
    return (  
        <>
        <div className="title_wrapper">
        <div className="title_">Сент Винсент и Гренадины</div>
      </div>

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
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {slides.map((i, el) => {
          console.log(i.name);

          return (
            <div key={i.id}>
              <SwiperSlide>{i.name}</SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <h4>Мир Brezzor огромный, исследуй его!</h4>

</>
    );
}

export default Slider;