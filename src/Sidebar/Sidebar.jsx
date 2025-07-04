import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./color/Color";

const Sidebar = () => {
  return (
    <div>
      <div className="border-r-[2px] w-[15%] items-center h-full border-gray-200 flex flex-col mb-[20px] z-100 fixed ">
        <h1 className="pt-[2rem] text-[1.5rem] ">🛒</h1>
        <div className="pt-[5rem]">
          <Category />
          <Price />
          <Color />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
