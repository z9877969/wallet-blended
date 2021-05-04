const Button = ({ type = "button", title, cbOnClick }) => {
  return cbOnClick ? (
    <button type={type} onClick={cbOnClick}>
      {title}
    </button>
  ) : (
    <button type={type}>{title}</button>
  );
};

export default Button;
