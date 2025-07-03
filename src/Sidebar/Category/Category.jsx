const Category = () => {
  return (
    <div>
      <h2 className="text-2xl">Category</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input type="radio" name="test" />
          <span></span> All
        </label>
        <label className="pb-2">
          <input type="radio" name="test" />
          <span></span> Sneakers
        </label>
        <label className="pb-2">
          <input type="radio" name="test" />
          <span></span> Flats
        </label>
        <label className="pb-2">
          <input type="radio" name="test" />
          <span></span> Sandals
        </label>
        <label className="pb-2">
          <input type="radio" name="test" />
          <span></span> Heels
        </label>
      </div>
    </div>
  );
};
export default Category;
