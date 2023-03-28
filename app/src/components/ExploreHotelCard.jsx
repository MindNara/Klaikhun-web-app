import React from "react";
import { StarRating } from '../components'

const ExploreHotelCard = ({ id, name, hotel_class, location, hotel_image1 }) => {

  return (
    <div className="relative bg-gray-3 w-[32%] h-[25rem] max-2xl:h-[20rem] rounded-3xl shadow-lg">
      <a href={'hotels/' + id}>
        <img src={hotel_image1} className="object-cover w-full h-full rounded-3xl" />
      </a>
      <div className="absolute bg-white w-full h-2/5 rounded-3xl bottom-0 flex flex-col justify-center px-8">
        <div className="flex flex-col">
          <a href={'hotels/' + id} className="w-full text-2xl max-2xl:text-xl font-medium mr-3 whitespace-nowrap text-ellipsis overflow-hidden hover:underline">
            {name}
          </a>
          <h1 className="text-sm">
            <StarRating rating={hotel_class} />
          </h1>
        </div>

        <h1 className="mt-2 text-gray-1 text-sm font-light">
          <i class="fa-solid fa-location-dot mr-2"></i>{location}
        </h1>
      </div>
    </div>
  );
};

export default ExploreHotelCard;
