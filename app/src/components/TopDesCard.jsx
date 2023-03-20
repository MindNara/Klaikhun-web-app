import React from "react";

const TopDesCard = () => {
  return (
    <div className="relative bg-gray-3 w-[32%] h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-lg">
      <div className="absolute bg-white w-full h-2/5 rounded-3xl bottom-0 flex flex-col justify-center px-8">
        <span className="text-3xl font-medium">Bangkok</span>
        <span className="text-xl font-light">50 accommodations</span>
      </div>
    </div>
  );
};

export default TopDesCard;
