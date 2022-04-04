import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  const slides = [
    { id: 1, name: "Португалия" },
    { id: 2, name: "Франция" },
    { id: 3, name: "Италия" },
  ];

  return (
    <div className="container">
      <div className="title_wrapper">
            <div className="title_">
          <span>TEst</span>Swiper Slider
        </div>
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
        className="mySwiper"
      >
        {slides.map((i, el) => {
          return (
            <>
            <h1>{i.name}</h1>
              <SwiperSlide>Slide {i.name}</SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
