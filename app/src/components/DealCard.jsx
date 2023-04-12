import React from "react";

const DealCard = ({ pro }) => {

  function copy() {
    navigator.clipboard.writeText(pro.pro_code);
  }

  return (
    <div className="bg-gray-3 w-full h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-xl relative">
      <img src={pro.pro_image} className="object-cover w-full h-full rounded-3xl" />
      <div className="bg-white w-full h-1/2 rounded-3xl absolute bottom-0">
        <div className="h-full flex flex-col justify-center mx-8 gap-5">
          <div className="flex justify-between">
            <span className="text-2xl text-gray-1">{pro.pro_name}</span>
            <span className="text-2xl font-medium">{parseInt(pro.pro_discount * 100)}% OFF</span>
          </div>
          {/* <p className="text-gray-1">{pro.pro_detail}</p> */}
          <button onClick={copy} className="tooltip bg-black p-2 flex items-center justify-center rounded-xl">
            <span className="text-white text-2xl font-medium tracking-wider">
              {pro.pro_code}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
