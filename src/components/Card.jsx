import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <section className="border-2 border-gray-100 p-[1rem] cursor-pointer mr-10 mb-10">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
        className="w-[13rem] mb-[1rem]"
      />
      <div className="pl-2">
        <h3>Shoe</h3>
        <section className="flex text-amber-400 items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span>4</span>
        </section>
        <section className="flex justify-around items-center">
          <div>
            <del>300K VND</del>200K VND
          </div>
          <div>
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
};
export default Card;
