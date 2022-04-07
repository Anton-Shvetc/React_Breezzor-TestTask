// import styles from "./Chips.module.scss";
import "./Chips.scss";
// import Chip from "../Chip/Chip";
import Input from "../Input/Input";

import { useState, useEffect } from "react";

function Chips() {
  let chips = [
    { id: 1, name: "Пляжи", input: "названию пляжа" , active: true},
    { id: 2, name: "Breezzor Pass", input: "названию отеля", active: false },
    { id: 3, name: "Впечатления", input: "названию впечатления" , active: false },
    { id: 4, name: "Маршруты", input: "названию маршрута", active: false  },
  ];

  const [state, setState] = useState("названию пляжа");

  const [ active, setActive ] = useState(0);

  const openTab = e => setActive(e);

  // const handleClick = () => {
  //   setTheme('chip2');
  // }

  return (
    <>
      {/* <div className={styles.navigation}> */}
        <div className="navigation">
        {chips.map((item, index) => {

return (
            
  <button
    // className={styles.chip}
    className={`chip ${index === active ? 'active' : ' '}`}
    onClick={() => {
      setState(item.input);
      console.log(`${item.name}`);
      console.log(active)
      console.log(index);
  openTab(index)

    }
  
  }
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
