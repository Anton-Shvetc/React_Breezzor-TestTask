import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "./Home.scss";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import Button from "../components/Button/Button";
import Chips from "../components/Chips/Chips";
import Input from "../components/Input/Input";
import { useState } from "react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Home() {
  const slides = [
    { id: 1, name: "Сент Винсент и Гренадины" },
    { id: 2, name: "Португалия" },
    { id: 3, name: "Саудовская Аравия" },
    { id: 4, name: "Испания" },
    { id: 5, name: "Франция" },
  ];

  return (
      <div className="section">
    <div className="container">
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

      <div>
        <a href="#"> Пляжи </a>
        <a href="#"> Breezzor Pass </a>
        <a href="#"> Впечатления </a>
        <a href="#"> Маршруты </a>
      </div>

      <Input placeholder="hello" />
      <Chips />

      <Button name="На карте"  className="btn" onClick={() => {
       console.log(122)
        }} />
      <Button name="Все пляжи страны" className="btn-beach" num={12} />
    </div>
    </div>
  );
}
