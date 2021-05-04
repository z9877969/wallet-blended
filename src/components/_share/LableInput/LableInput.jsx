const LableInput = ({
  title,
  type = "text",
  cbOnChange,
  cbOnClick,
  name,
  value,
  placeholder = "",
}) => {
  return (
    <label>
      <span>{title}</span>
      {cbOnChange && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={cbOnChange}
          placeholder={placeholder}
        />
      )}
      {cbOnClick && (
        <input type={type} name={name} value={value} onClick={cbOnClick} />
      )}
    </label>
  );
};

export default LableInput;
