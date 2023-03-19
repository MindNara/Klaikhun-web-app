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
    </>
  );
};

export default Flight;
