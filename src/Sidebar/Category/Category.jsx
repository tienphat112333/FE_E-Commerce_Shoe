import Input from "../../components/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="text-2xl">Category</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="test"
          />
          <label></label>All
        </label>
        <Input
          handleChange={handleRadioChange}
          name="test"
          value="sneakers"
          title="Sneakers"
        />
        <Input
          handleChange={handleRadioChange}
          name="test"
          value="flats"
          title="FLats"
        />
        <Input
          handleChange={handleRadioChange}
          name="test"
          value="sandals"
          title="Sandals"
        />
        <Input
          handleChange={handleRadioChange}
          name="test"
          value="heels"
          title="Heels"
        />
      </div>
    </div>
  );
};
export default Category;
