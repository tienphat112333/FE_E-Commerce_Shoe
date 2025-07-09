import Input from "../../components/Input";

const Price = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="text-2xl">Price</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="test2"
          />
          <label></label>All
        </label>
        <Input
          handleChange={handleRadioChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={handleRadioChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={handleRadioChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={handleRadioChange}
          value={200}
          title="$150 - $200k"
          name="test2"
        />
      </div>
    </div>
  );
};
export default Price;
