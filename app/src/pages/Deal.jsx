import React from "react";
import { Navbar } from "../components";
import { DealCard } from "../components/index";
import promotion from "../constants/promotion.json";

const Deal = () => {
  // console.log(promotion)
  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto my-24 mt-[180px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-medium mb-5">Today's Top Deals</h1>
        <h1 className="text-xl mb-16 text-gray-1">use code in the black box for discount your booking</h1>
        <div className="grid grid-cols-3 w-full gap-8">
          {promotion.map((prop) => {
            return <DealCard pro={prop} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Deal;
