import styles from "./Chips.module.scss";
import Chip from "../Chip/Chip";
import Input from "../Input/Input";

import { useState, useEffect } from "react";

function Chips() {
  let chips = [
    { id: 1, name: "Пляжи", input: "названию пляжа" },
    { id: 2, name: "Breezzor Pass" , input: "названию отеля"},
    { id: 3, name: "Впечатления" , input: "названию впечатления"},
    { id: 4, name: "Маршруты" , input: "названию маршрута"},
  ];

  const [state, setState] = useState("названию пляжа");

  return (
    <>
    <div className={styles.navigation}>
        {chips.map((item) => {
        console.log(item.id);

        return (
          <button
            className={styles.chip}
            onClick={() => {
              setState(item.input);
              console.log(item.name);
            }}
          >
            {item.name}
          </button>
        );
      })}
   
    </div>
    <Input placeholder ={ `Поиск по стране, региону, городу, ${state}`}/>
    </>
  );
}

export default Chips;
