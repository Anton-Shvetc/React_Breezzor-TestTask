import Button from "../components/Button/Button";
import Chips from "../components/Chips/Chips";
import "./Home.scss";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <div className="section">
      <div className="container">

        <Slider />

        <Chips />

        <div className="buttons">
          <Button name="На карте" className="btn-white" />
          <Button name="Все пляжи страны" className="btn-blue" />
        </div>
      </div>
    </div>
  );
}
