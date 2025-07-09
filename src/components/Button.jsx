const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer"
    >
      {title}
    </button>
  );
};
export default Button;
