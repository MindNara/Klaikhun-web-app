import React from "react";
import { useState } from "react";
import Navbar from "../components/NavbarLanding";
import ImgLanding from "../assets/ImgLanding.png";
import { hotelList } from "../constants/hotelList";
import { HotelSearch, FlightSearch, TopDesCard, ExploreHotelCard, DealCard } from "../components/index";

const Landing = () => {
  const [showHotel, setShowHotel] = useState(true);

  const handleClick1 = () => {
    setShowHotel(false);
  };

  const handleClick2 = () => {
    setShowHotel(true);
  };

  const hotels = [];
  for (let i = 0; i < 3; i++) {
    hotels.push(<ExploreHotelCard key={hotelList[i].id} {...hotelList[i]} />);
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto relative ">
        <div className="flex mt-[550px]">
          <div className="relative bottom-[90px]">
            {/* <!-- Hotels --> */}
            <button
              onClick={handleClick2}
              className={`h-16 w-56 rounded-tl-3xl  ${showHotel ? "bg-white" : "bg-black"
                }`}
            >
              <i
                class={`fa-sharp fa-solid fa-hotel mr-3 ${showHotel ? "text-black" : "text-white"
                  }`}
              ></i>
              <span
                className={`${showHotel ? "text-black" : "text-white"
                  } text-lg font-medium`}
              >
                Hotels
              </span>
            </button>

            {/* <!-- Flights --> */}
            <button
              onClick={handleClick1}
              className={`h-16 w-56 rounded-tr-3xl ${showHotel ? "bg-black" : "bg-white"
                }`}
            >
              <i
                class={`fa-solid fa-plane-departure mr-3 ${showHotel ? "text-white" : "text-black"
                  }`}
              ></i>
              <span
                className={`${showHotel ? "text-white" : "text-black"
                  } text-lg font-medium`}
              >
                Flights
              </span>
            </button>
          </div>
        </div>

        <div className="relative bottom-24 w-full">
          {/* Selection between <HotelSearch/> and <FlightSearch /> */}
          {showHotel ? <HotelSearch /> : <FlightSearch />}
        </div>
      </div>

      <div className="container mx-auto space-y-16 mt-[160px]">
        {/* <!-- Promotions --> */}
        <div className="promotions">
          <span className="font-medium text-4xl flex justify-center">
            Accommodation Promotions
          </span>
          <div className="flex flex-wrap space-x-5 py-10">
            <DealCard />
          </div>
        </div>

        {/* <!-- Images --> */}
        <section className="relative w-full h-72">
          <img
            src={ImgLanding}
            alt="ImgLanding"
            className="absolute rounded-3xl h-full"
          />
          <div className="relative flex flex-col items-end justify-center px-20 h-full">
            <span className="text-5xl font-medium">Enjoy Your</span>
            <span className="text-5xl font-light">Dream Vacation</span>
          </div>
        </section>

        {/* <!-- Top destinations --> */}
        <div className="topDestinations">
          <span className="font-medium text-3xl">
            Top destinations in Thailand
          </span>
          <div className="flex flex-wrap space-x-5 py-10">
            <TopDesCard></TopDesCard>
          </div>
        </div>

        {/* <!-- Explore hotels --> */}
        <div className="exploreHotels">
          <span className="font-medium text-3xl">
            Explore more travel vacation hotels
          </span>
          <div className="flex flex-wrap space-x-5 py-10">
            {hotels}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
