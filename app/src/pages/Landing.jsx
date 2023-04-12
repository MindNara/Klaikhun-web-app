import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarLanding";
import ImgLanding from "../assets/ImgLanding.png";
import {
  HotelSearch,
  FlightSearch,
  TopDesCard,
  ExploreHotelCard,
  DealCard,
} from "../components/index";
import topDes from "../constants/topDes.json";
import axios from 'axios';

const Landing = () => {

  const [showHotel, setShowHotel] = useState(true);

  const handleClick1 = () => {
    setShowHotel(false);
  };

  const handleClick2 = () => {
    setShowHotel(true);
  };

  const [deals, setDeals] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  function getData() {
    axios.get('http://localhost:3000/')
      .then((response) => {
        setDeals(response.data.deals);
        // console.log(response.data.deals);

        setHotels(response.data.hotels);
        // console.log(response.data.hotels);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const topDest = [];
  for (let i = 0; i < 3; i++) {
    topDest.push(<TopDesCard des={topDes[i]} />);
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
          <h1 className="font-medium text-4xl flex justify-center">
            Accommodation Promotions
          </h1>
          <div className="grid grid-cols-3 w-full gap-8 py-10">
            {deals.slice(0, 3).map((prop) => {
              return <DealCard pro={prop} />;
            })}
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
          <h1 className="font-medium text-3xl">
            Top destinations in Thailand
          </h1>
          <div className="flex flex-wrap space-x-7 max-2xl:space-x-6 py-10">
            {topDest}
          </div>
        </div>

        {/* <!-- Explore hotels --> */}
        <div className="exploreHotels">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-3xl">
              Explore more travel vacation hotels
            </h1>
            <a href="/hotels" className="bg-gray-3 px-3 py-2 rounded-lg text-gray-1 text-sm hover:text-black hover:underline"><span>Viwes All</span></a>
          </div>

          <div className="flex flex-wrap space-x-7 max-2xl:space-x-6 py-10">
            {hotels.slice(0, 3).map((prop) => {
              return <ExploreHotelCard hotel={prop} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
