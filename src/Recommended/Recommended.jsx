const Recommended = () => {
  return (
    <div className="pl-[20rem]">
      <h2 class="text-2xl font-bold">Recommended!</h2>
      <div className="flex">
        <button className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer">
          All Product
        </button>
        <button className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer">
          Nike
        </button>
        <button className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer">
          Adidas
        </button>
        <button className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer">
          Puma
        </button>
        <button className="mr-2 border-[2px] border-gray-200 pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-md cursor-pointer">
          Vans
        </button>
      </div>
    </div>
  );
};
export default Recommended;
