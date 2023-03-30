import React from "react";

const DealCard = ({ pro }) => {

  function copy() {
    navigator.clipboard.writeText(pro.code);
  }

  return (
    <div className="bg-gray-3 w-full h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-xl relative">
      <img src={pro.img_location} className="object-cover w-full h-full rounded-3xl" />
      <div className="bg-white w-full h-1/2 rounded-3xl absolute bottom-0">
        <div className="h-full flex flex-col justify-center mx-8 gap-5">
          <div className="flex justify-between">
            <span className="text-2xl text-gray-1">{pro.promotion_name}</span>
            <span className="text-2xl font-medium">{parseInt(pro.discount * 100)}% OFF</span>
          </div>
          <button onClick={copy} className="tooltip bg-black p-3 flex items-center justify-center rounded-2xl">
            <span className="text-white text-2xl font-medium tracking-wider">
              {pro.code}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
