import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="pl-[20rem] pt-2">
      <h2 className="text-2xl font-bold">Recommended!</h2>
      <div className="flex">
        <Button onClickHandler={handleClick} value="" title="All Product" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />

        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};
export default Recommended;
