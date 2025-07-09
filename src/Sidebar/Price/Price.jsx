import Input from "../../components/Input";

const Price = () => {
  return (
    <div>
      <h2 className="text-2xl">Price</h2>
      <div className="flex flex-col items-baseline mt-[1rem]">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};
export default Price;
