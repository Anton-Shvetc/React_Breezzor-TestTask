// import styles from "./Button.module.scss";
import "./Button.scss";
import { useState, useEffect } from "react";

import { handleRegionClick } from "../../App/testFunc";
function Button(props) {
  return (
    <>
      <button
        //   className= {styles.btn}
        className={props.className}
        onClick={() => {
          //   console.log(props.name);
          handleRegionClick(props.name);
        }}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
