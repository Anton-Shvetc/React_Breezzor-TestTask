import styles from "./Input.module.scss";

function Input(props) {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
