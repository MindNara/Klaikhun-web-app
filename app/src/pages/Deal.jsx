import React from "react";
import { Navbar } from "../components";
import { DealCard } from "../components/index";

const Deal = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto my-24 mt-[180px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-medium mb-16">Today's Top Deals</h1>
        <div className="flex flex-nowrap w-full gap-8">
          <DealCard></DealCard>
        </div>
      </div>
    </>
  );
};

export default Deal;
