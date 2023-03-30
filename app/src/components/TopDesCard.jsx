import React from "react";

const TopDesCard = ({ des }) => {
  return (
    <div className="relative bg-gray-3 w-[32%] h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-lg">
      <a href="/hotels">
        <img
          src={des.img}
          className="object-cover w-full h-full rounded-3xl"
        />
        <div className="absolute bg-white w-full h-2/5 rounded-3xl bottom-0 flex flex-col justify-center px-8">
          <span className="text-3xl font-medium hover:underline">{des.name}</span>
          <span className="text-xl font-light">10+ accommodations</span>
        </div>
      </a>
    </div>
  );
};

export default TopDesCard;
