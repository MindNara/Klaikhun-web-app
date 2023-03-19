import React from "react";
import Navbar from "../components/NavbarLanding";
import { HotelSearch, FlightSearch } from "../components/index";

const Landing = () => (
  <div>
    <div className="flex justify-center items-center">
      <Navbar />
    </div>
    <div className="container mx-auto mt-10 relative h-[60vh]">
      <div class="absolute flex bottom-1">
        {/* <!-- Hotels --> */}
        <button class="h-16 w-56 rounded-tl-3xl bg-white">
          <i class="fa-sharp fa-solid fa-hotel text-black mr-3"></i>
          <span class="text-black text-lg font-medium">Hotels</span>
        </button>

        {/* <!-- Flights --> */}
        <button class="h-16 w-56 rounded-tr-3xl bg-black opacity-90">
          <i class="fa-solid fa-plane-departure text-white mr-3"></i>
          <span class="text-white text-lg">Flights</span>
        </button>
      </div>

      <div className="absolute bottom-3 w-full">
        <HotelSearch />
      </div>
    </div>

    {/* <FlightSearch /> */}
  </div>
);

export default Landing;
