import Button from "../components/Button/Button";
import Chips from "../components/Chips/Chips";
// import Input from "../components/Input/Input";

import { useState, useEffect } from "react";
import "./Home.scss";
import Slider from "../components/Slider/Slider";

import Input from "../components/Input/Input";
import { handleRegionClick } from "../../src/App/testFunc";

// import "swiper/swiper.min.css";

export default function Home() {
  //   const slides = [
  //     { id: 1, name: "Сент Винсент и Гренадины" },
  //     { id: 2, name: "Португалия" },
  //     { id: 3, name: "Саудовская Аравия" },
  //     { id: 4, name: "Испания" },
  //     { id: 5, name: "Франция" },
  //   ];

  //   const [state, setState] = useState("Пляжи");

  return (
    <div className="section">
      <div className="container">
        {/* <div className="title_wrapper">
          <div className="title_">Сент Винсент и Гренадины</div>
        </div> */}

        <Slider />

        <Chips />

        <div className="buttons">
          {/* <button
          onClick={() => {
            setCount("Впечатления")
            Help();
          }}
          className="test2"
        ></button> */}
          <Button name="На карте" className="btn-white" />
          <Button name="Все пляжи страны" className="btn-blue" />
        </div>

        <button
          onClick={() => {
            handleRegionClick(12);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}
