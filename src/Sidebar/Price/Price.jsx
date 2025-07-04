const Price = () => {
  return (
    <div>
      <h2 className="text-2xl">Price</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>All
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>0 - 200k
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>200k - 500k
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>500k - 1.000k
        </label>
        <label className="pb-2">
          <input type="radio" name="test2" />
          <span></span>Over 1.000k
        </label>
      </div>
    </div>
  );
};
export default Price;
