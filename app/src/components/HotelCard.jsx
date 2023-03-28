import React from "react";
import { StarRating } from '../components'

const HotelCard = ({ id, name, description, hotel_class, review_score, price, location, hotel_image1 }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl w-full h-[240px] flex">
      <a href={'hotels/' + id}>
        <div className="bg-gray-3 h-full aspect-square rounded-2xl"><img src={hotel_image1} className="object-cover w-full h-full rounded-2xl" /></div>
      </a>
      <div className="mx-3 px-5 py-4">
        <div className="flex justify-between">
          <div className="flex items-center w-full">
            <a href={'hotels/' + id} className="text-2xl truncate hover:underline">
              {name}
            </a>
            <span className="ml-5 text-sm w-1/4">
              <StarRating rating={hotel_class} />
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col justify-end items-end w-20">
              <span className="text-sm">Very good</span>
              <span className="text-gray-1 text-sm font-light">100+ reviews</span>
            </div>
            <div className="bg-black text-white text-xl aspect-square rounded-lg h-10 flex items-center justify-center ml-4">
              {review_score}
            </div>
          </div>
        </div>
        <h1 className="mt-1 text-gray-1 text-sm font-light">
          <i class="fa-solid fa-location-dot mr-2"></i>{location}
        </h1>
        <div className="flex justify-between mt-3 w-full h-[65%]">
          <div className="w-4/5 h-full bg-gradient-to-r from-gray-3 to-white-0% rounded-lg p-5">
            <p className="text-gray-1 font-light h-full break-words text-ellipsis overflow-hidden">{description}</p>
          </div>
          <div className="w-40 mt-8 flex flex-col">
            <h1 className="text-2xl font-semibold flex justify-end">
              THB {numberWithCommas(price)}
            </h1>
            <button className="bg-black text-white text-lg rounded-xl p-2 px-5 mt-2">
              <a href="/hotels/detail" >Reserve Room</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
