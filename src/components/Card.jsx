import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (
    <section className="border-2 border-gray-100 p-[1rem] cursor-pointer mr-10 mb-10 w-[16rem] flex flex-col justify-center-safe">
      <img
        src={img}
        alt={title}
        className="w-[13rem]  bg-cover bg-center mb-[1rem]"
      />
      <div className="pl-2">
        <h3 className="mb-2">{title}</h3>
        <section className="flex text-amber-400 items-center mb-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span>{reviews}</span>
        </section>
        <section className="flex justify-between items-center">
          <div>
            <del>{prevPrice}</del>
            {newPrice}
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
