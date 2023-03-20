import React from "react";

const ExploreHotelCard = () => {
  return (
    <div className="relative bg-gray-3 w-[32%] h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-lg">
      <div className="absolute bg-white w-full h-2/5 rounded-3xl bottom-0 flex flex-col justify-center px-8">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-medium mr-3">
            Hotel Name
          </a>
          <h1 className="text-sm">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </h1>
        </div>

        <h1 className="mt-2 text-gray-1 text-sm font-light">
          <i class="fa-solid fa-location-dot mr-2"></i>location
        </h1>
      </div>
    </div>
  );
};

export default ExploreHotelCard;
