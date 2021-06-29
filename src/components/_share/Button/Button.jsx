const Button = ({ type = "button", title, cbOnClick, cbArgs }) => {
  return cbOnClick ? (
    <button
      type={type}
      onClick={cbArgs ? () => cbOnClick(...cbArgs) : cbOnClick}
    >
      {title}
    </button>
  ) : (
    <button type={type}>{title}</button>
  );
};

export default Button;
