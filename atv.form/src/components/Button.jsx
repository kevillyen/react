import "./Button.css";

const Button = ({ text, onClick, disabled, variant = "primary" }) => {
  return (
    <button
      type="button"
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;