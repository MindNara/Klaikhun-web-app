import React from "react";
import { HotelSearch } from "../components/index";

const Hotel = () => {
  return (
    <>
      <div className="flex">
        <HotelSearch />
      </div>
      {/* filter */}
      <div className="flex w-auto">
        <div className="flex justify-between">
          <h1>filter</h1>
          <button className="bg-gray-3">Reset Filter</button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
