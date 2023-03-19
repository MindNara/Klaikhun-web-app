import React from "react";
import Navbar from "../components/Navbar";
import { FlightSearch } from "../components/index";

const Flight = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto mt-10 relative">
        <FlightSearch />
      </div>

      <div className="container mx-auto flex gap-10 mt-20">
        {/* ------------------- filter ------------------- */}

        <div className="flex flex-col w-[300px]">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-2xl font-medium">Filters</h1>
            <button className="bg-gray-3 text-gray-1 p-2 px-3 rounded-xl">
              Reset filters
            </button>
          </div>

          {/* ---------------- price filter --------------- */}

          <div className="flex w-full justify-between items-center mt-8 gap-3">
            <div>
              <h1 className="text-gray-1 text-xl">Min Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="minP"
                value="0"
              />
            </div>
            <div>
              <h1 className="text-gray-1 text-xl">Max Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="maxP"
                value="10000"
              />
            </div>
          </div>

          {/* --------------- star rating ---------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Airline</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="bkka" />
                <label className="ml-2 text-gray-1" for="bkkAir">
                  Bangkok Airways
                </label>
              </div>
              <div>
                <input type="checkbox" name="nokAir" />
                <label className="ml-2 text-gray-1" for="nokAir">
                  Nok Air
                </label>
              </div>
              <div>
                <input type="checkbox" name="thaiAir" />
                <label className="ml-2 text-gray-1" for="thaiAir">
                  Thai AirAsia
                </label>
              </div>
              <div>
                <input type="checkbox" name="thaiSmile" />
                <label className="ml-2 text-gray-1" for="thaiSmile">
                  THAI Smile
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-col">
          <h1 className="text-xl">Showing 119 search results</h1>
        </div>
      </div>
    </>
  );
};

export default Flight;
