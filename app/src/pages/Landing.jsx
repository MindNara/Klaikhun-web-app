import React from "react";
import Navbar from "../components/NavbarLanding";
import ImgLanding from "../assets/ImgLanding.png";
import { HotelSearch, FlightSearch } from "../components/index";

const Landing = () => (
  <div>
    <div className="flex justify-center items-center">
      <Navbar />
    </div>
    <div className="container mx-auto mt-10 relative h-[70vh]">
      <div className="absolute flex bottom-[100px]">
        {/* <!-- Hotels --> */}
        <button className="h-16 w-56 rounded-tl-3xl bg-white">
          <i className="fa-sharp fa-solid fa-hotel text-black mr-3"></i>
          <span className="text-black text-lg font-medium">Hotels</span>
        </button>

        {/* <!-- Flights --> */}
        <button className="h-16 w-56 rounded-tr-3xl bg-black opacity-90">
          <i className="fa-solid fa-plane-departure text-white mr-3"></i>
          <span className="text-white text-lg">Flights</span>
        </button>
      </div>

      <div className="absolute bottom-28 w-full">
        <HotelSearch />
        {/* <FlightSearch /> */}
      </div>
    </div>

    <div className="container mx-auto space-y-16 mt-[160px]">
      {/* <!-- Promotions --> */}
      <div className="promotions">
        <span className="font-medium text-4xl flex justify-center">
          Accommodation Promotions
        </span>
        <div className="flex justify-between space-x-5 py-10">
          <div className="bg-gray-3 w-1/3 h-52 rounded-3xl"></div>
          <div className="bg-black w-1/3 h-52 rounded-3xl"></div>
          <div className="bg-gray-3 w-1/3 h-52 rounded-3xl"></div>
        </div>
      </div>

      {/* <!-- Images --> */}
      <section className="relative w-full h-72">
        <img src={ImgLanding} alt="ImgLanding" className="absolute rounded-3xl h-full"/>
        <div className="relative flex flex-col items-end justify-center px-20 h-full">
          <span class="text-5xl font-medium">Enjoy Your</span>
          <span class="text-5xl font-light">Dream Vacation</span>
        </div>
      </section>

      <div className="topdestinations">
        <span className="font-medium text-3xl">
          Top destinations in Thailand
        </span>
        <div className="flex justify-between space-x-5 py-10">
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
        </div>
      </div>

      {/* <!-- Featured Properties --> */}
      <div className="properties">
        <span className="font-medium text-3xl">Featured Properties</span>
        <div className="flex justify-between space-x-5 py-10">
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
          <div className="relative bg-gray-3 w-1/3 h-64 rounded-3xl shadow-lg">
            <div className="absolute bg-white w-full h-24 rounded-3xl bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
