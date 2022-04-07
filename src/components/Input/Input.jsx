import styles from "./Input.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'

function Input(props) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.input}
      />
           <FontAwesomeIcon icon={faSliders} className={styles.icon}/>
      
    </div>
  );
}

export default Input;
