import "./Chips.scss";
import Input from "../Input/Input";
import { useState } from "react";
import { chipsData } from "../../data/data";
import Button from "../Button/Button";

function Chips() {
  const [state, setState] = useState("названию пляжа");
  const [active, setActive] = useState(0);
  const handleChange = (name, index) => {
    setState(name);
    setActive(index);
  };

  return (
    <>
      <div className="navigation">
        {chipsData.map((chip, index) => {
          return (
            <Button
              onClick={() => {
                handleChange(chip.input, index);
              }}
              name={chip.name}
              className={`chip ${index === active ? "active" : " "}`}
            />
          );
        })}
      </div>
      <Input placeholder={`Поиск по стране, региону, городу, ${state}`} />
    </>
  );
}

export default Chips;
