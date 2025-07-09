const Input = ({ handleChange, value, name, color, title }) => {
  return (
    <label className="pb-2">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};
export default Input;
