import React from "react";
import flights from "../constants/flights.json";

const FlightSearch = () => (
  <div className="bg-white rounded-2xl shadow-lg h-44 flex flex-col p-8 space-y-3 w-full absolute">

    <div className="flex flex-row justify-between space-x-5 h-full">
      {/* <!-- From --> */}
      <div className="box bg-white border border-gray-2 rounded-2xl flex flex-col justify-center px-8 w-1/4">
        <span className="text-gray-1 text-sm font-medium">FROM</span>
        {/* <span className="text-black text-3xl max-2xl:text-2xl font-bold">Bangkok, Thailand</span> */}
        <select className="text-black text-3xl max-2xl:text-2xl font-bold cursor-pointer" name="from" id="from">
          {flights.map((item, index) => (
            <option className="text-xl" value={index}>{item.flight_beginning}</option>
          ))}
        </select>
      </div>

      {/* <!-- To --> */}
      <div className="box bg-white border border-gray-2 rounded-2xl flex flex-col justify-center px-8 w-1/4">
        <span className="text-gray-1 text-sm font-medium">TO</span>
        {/* <span className="text-black text-3xl max-2xl:text-2xl font-bold">Chiang Mai (CNX)</span> */}
        <select className="text-black text-3xl max-2xl:text-2xl font-bold cursor-pointer" name="to" id="to">
          {flights.map((item, index) => (
            <option className="text-xl" value={index + 1}>{item.flight_destination}</option>
          ))}
        </select>
      </div>

      {/* <!-- Room & Guests --> */}
      <div className="box bg-white border border-gray-2 rounded-2xl flex items-center justify-between px-8 w-3/6">
        <div className="checkIn">
          <span className="text-gray-1 text-sm font-medium">DEPARTURE</span>
          <div>
            <input type="date" className="text-black text-3xl font-semibold mr-4 cursor-pointer" name="departure" />
          </div>
        </div>
        <div className="checkOut">
          <span className="text-gray-1 text-sm font-medium">RETURN</span>
          <div>
            <input type="date" className="text-black text-3xl font-semibold mr-4 cursor-pointer" name="return" />
          </div>
        </div>
      </div>

      {/* <!-- Search btn --> */}
      <button className="bg-black border h-16 w-56 rounded-2xl absolute -bottom-10 right-8 z-30 ml-[1040px] mt-[20px]">
        <span className="text-white font-light mr-5">Search Flights</span>
        <i className="fas fa-angle-right text-white"></i>
      </button>
    </div>
  </div>
);

export default FlightSearch;
