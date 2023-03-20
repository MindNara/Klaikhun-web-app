import React from "react";

const HotelCard = () => {
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl w-full h-[240px] flex">
      <div className="bg-gray-3 h-full aspect-square rounded-2xl"></div>
      <div className="mx-3 p-5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl">
              Hotel Name
            </a>
            <h1 className="ml-5 text-sm">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-end items-end">
              <div className="text-sm">Very good</div>
              <div className="text-gray-1 text-sm font-light">100+ reviews</div>
            </div>
            <div className="bg-black text-white text-xl aspect-square rounded-lg h-10 flex items-center justify-center ml-4">
                5
            </div>
          </div>
        </div>
        <h1 className="mt-1 text-gray-1 text-sm font-light">
          <i class="fa-solid fa-location-dot mr-2"></i>location
        </h1>
        <div className="flex justify-between mt-3">
          <div className="w-3/5 h-[125px] bg-gradient-to-r from-gray-3 to-white-0% rounded-lg p-5">
            <h1 className="text-gray-1">This is Description</h1>
          </div>
          <div className="w-fit mt-8">
            <h1 className="text-2xl font-semibold flex justify-end">
              THB 1,200
            </h1>
            <button className="bg-black text-white text-lg rounded-xl p-2 px-5 mt-2">
              Reserve Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
