import "./Chips.scss";
import Input from "../Input/Input";
import { useState } from "react";

function Chips() {
  let chips = [
    { id: 1, name: "Пляжи", input: "названию пляжа", active: true },
    { id: 2, name: "Breezzor Pass", input: "названию отеля", active: false },
    {
      id: 3,
      name: "Впечатления",
      input: "названию впечатления",
      active: false,
    },
    { id: 4, name: "Маршруты", input: "названию маршрута", active: false },
  ];

  const [state, setState] = useState("названию пляжа");
  const [active, setActive] = useState(0);
  const openChip = (e) => setActive(e);

  return (
    <>
      <div className="navigation">
        {chips.map((item, index) => {
          return (
            <button
              className={`chip ${index === active ? "active" : " "}`}
              onClick={() => {
                setState(item.input);
                openChip(index);
              }}
              data-index={index}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <Input placeholder={`Поиск по стране, региону, городу, ${state}`} />
    </>
  );
}

export default Chips;
