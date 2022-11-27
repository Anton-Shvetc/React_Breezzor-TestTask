import "./Button.scss";

function Button({ className, name, onClick }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </>
  );
}

export default Button;
