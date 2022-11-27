import Chips from "../Chips/Chips";
import Slider from "../Slider/Slider";
import Button from "../Button/Button";

export function Search() {
  return (
    <>
      <div className="container">
        <Slider />
        <Chips />
        <div className="buttons">
          <Button name="На карте" className="btn-white" />
          <Button name="Все пляжи страны" className="btn-blue" />
        </div>
      </div>
    </>
  );
}
