// import styles from "./Button.module.scss";
import "./Button.scss";

import { handleRegionClick } from "../../App/testFunc";
function Button(props) {
  return (
    <>
      <button
        className={props.className}
        onClick={() => {
          
          handleRegionClick(props.name);
        }}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
