// import styles from "./Button.module.scss";
import "./Button.scss";

function Button(props) {
  console.log(props);
  return (
    <>
      <button
        //   className= {styles.btn}
        className={props.className}
        onClick={() => {
          console.log(props.name);
        }}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
