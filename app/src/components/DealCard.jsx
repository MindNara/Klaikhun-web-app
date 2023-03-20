import React from "react";

const DealCard = () => {
  return (
    <div className="bg-gray-3 w-[32%] h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-xl relative">
      <div className="bg-white w-full h-1/2 rounded-3xl absolute bottom-0">
        <div className="h-full flex flex-col justify-center mx-8 gap-5">
          <span className="text-2xl font-medium">7% OFF</span>
          <div className="bg-black p-3 flex items-center justify-center rounded-2xl">
            <span className="text-white text-2xl font-medium tracking-wider">
              #000007
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
