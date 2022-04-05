import styles from "./Chips.module.scss";
import Chip from "../Chip/Chip";
import Input from "../Input/Input";

import { useState, useEffect } from "react";

function Chips() {
  let chips = [
    { id: 1, name: "Пляжи" },
    { id: 2, name: "Breezzor Pass" },
    { id: 3, name: "Впечатления" },
    { id: 4, name: "Маршруты" },
  ];

  const [state, setState] = useState("Пляжи");

  return (
    <>
    <div className={styles.navigation}>
        {chips.map((item) => {
        console.log(item.id);

        return (
          <button
            className={styles.chip}
            onClick={() => {
              setState(item.name);
              console.log(item.name);
            }}
          >
            {item.name}
          </button>
        );
      })}
   
    </div>
    <Input placeholder ={state}/>
    </>
  );
}

export default Chips;
