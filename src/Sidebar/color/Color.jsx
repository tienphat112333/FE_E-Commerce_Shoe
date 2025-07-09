import Input from "../../components/Input";

const Color = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="text-2xl">Color</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <label className="pb-2">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="test3"
          />
          <label></label>All
        </label>
        <Input
          handleChange={handleRadioChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleRadioChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleRadioChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleRadioChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />
        <Input
          handleChange={handleRadioChange}
          value="white"
          title="White"
          name="test3"
          color="white"
        />
      </div>
    </div>
  );
};
export default Color;
