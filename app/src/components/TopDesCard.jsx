import React from "react";

const TopDesCard = () => {
  return (
    <div className="relative bg-gray-3 w-1/4 h-64 rounded-3xl shadow-lg">
      <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0 flex flex-col justify-center px-8">
        <span className="text-2xl font-medium">Bangkok</span>
        <span className="text-lg font-light">50 accommodations</span>
      </div>
    </div>
  );
};

export default TopDesCard;
