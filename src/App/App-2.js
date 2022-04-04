
import './App.scss';
// import Swiper core and required modules
import { Navigation, Controller} from 'swiper';
import { Virtual } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';

import React, { useState } from 'react';

import 'swiper/css/grid';


function App() {
  
  const slides = [
    {id: 1, name: "Португалия"},
    {id: 2, name: "Франция"},
    {id: 3, name: "Италия"},
  ]

  
  return (
    <>
    <h1> </h1>
    <Swiper
     onMomentumScrollEnd={(e, state, context) => this.setState({ showIndex: state.index })}
    modules={[Navigation, Controller]}
    loop={true}
    centeredSlides={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={(swiper) => console.log('slide change' + swiper.activeIndex)}
      // onSwiper={(swiper) => console.log(swiper.activeIndex)}
         
    >

{slides.map((i, el) => {

        return <SwiperSlide>
          <h1>{i.name}</h1>
          
          Slide {i.name}</SwiperSlide>;
      })}
      {/* <SwiperSlide>Испания</SwiperSlide>
      <SwiperSlide>Франция</SwiperSlide>
      <SwiperSlide>Сент Винсент и Гренадины</SwiperSlide>
      <SwiperSlide>Португалия</SwiperSlide>
      <SwiperSlide>Саудовская Аравия</SwiperSlide>
       */}
    </Swiper>

    <Swiper>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
</Swiper>


  </>
  
  );
}

export default App;
