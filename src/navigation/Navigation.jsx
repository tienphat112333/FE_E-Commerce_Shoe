import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="flex border-b-2 border-solid border-b-gray-200 justify-around items-center p-[20px] ml-[2rem] z-[999]">
      <div>
        <input
          type="text"
          placeholder="Enter your search"
          className=" bg-gray-100 p-[10px] border-none outline-none mr-[20px] rounded-[6px] w-[16rem] relative"
        />
      </div>
      <div className="flex">
        <a href="#" className="no-underline color text-gray-900">
          <FiHeart className="h-6 w-6 mr-4" />
        </a>
        <a href="#" className="no-underline color text-gray-900">
          <AiOutlineShoppingCart className="h-6 w-6 mr-4" />
        </a>
        <a href="#" className="no-underline color text-gray-900">
          <AiOutlineUserAdd className="h-6 w-6 mr-4" />
        </a>
      </div>
    </nav>
  );
};
export default Navigation;
