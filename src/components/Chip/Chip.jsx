import styles from "./Chip.module.scss";
import { useState } from "react";
// import {handleRegionClick} from '../../App/testFunc'

function Chip(props) {

  function handleRegionClick(id) {
    console.log(id);
    setActive(id);
    
  }
  const [state, setActive] = useState("Пляжи");

  const [color, setStyle] = useState();

  // <button onClick={() => this.setState({activeBtnId: 'button2'})} className={this.state.activeBtnId === 'button2' ? 'active' : null}/>

  return (
    <>
      {/* <a href="#" className={styles.chip} >
      {props.name}
    </a> */}
      <button
        className={styles.chip}
        state = {state}
        onClick={() => {
        
          handleRegionClick(props.name)
         
        }}

        // onClick={() => {
        //   if (props.active === "active") {
        //     console.log(12);
        //     setStyle("var(--chips-bg)");
        //   } else {
        //     setStyle("var(--chips-bg-active)");
        //   }

        //   // console.log(props)
        // }}
        // style={{ background: `${color}` }}
      >
        {props.name}
      </button>
      <input type="text"  placeholder={props.name}/>
    </>
  );
}

export default Chip;
