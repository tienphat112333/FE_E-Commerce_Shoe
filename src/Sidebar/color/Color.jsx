const Color = () => {
  return (
    <div>
      <h2 className="text-2xl">Color</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>All
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>Black
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>Blue
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>Red
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>Green
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>White
        </label>
      </div>
    </div>
  );
};
export default Color;
