import React from "react";
import { hotelList } from "../constants/hotelList";

const HotelSearch = () => (
  <div className="bg-white rounded-2xl shadow-lg h-44 flex flex-row items-center justify-between p-8 space-x-5 absolute w-full">
    {/* <!-- Destination --> */}
    <div className="bg-white border border-gray-2 rounded-2xl flex flex-col justify-center px-8 w-3/5 h-full">
      <span className="text-gray-1 text-sm">DESTINATION</span>
      <select className="text-black text-3xl font-semibold rounded-xl cursor-pointer" name="destination" id="destination">
        {hotelList.map((item) => (
          <option className="text-xl" value={item.id}>{item.location}</option>
        ))}
      </select>
    </div>

    {/* <!-- Check-In & Check-Out --> */}
    <div className="border border-gray-2 rounded-2xl flex items-center justify-between px-8 w-full h-full">
      <div className="checkIn">
        <span className="text-gray-1 text-sm">CHECK-IN</span>
        <div>
          <input type="date" className="text-black text-3xl font-semibold mr-4 cursor-pointer" name="check-in" />
        </div>
      </div>
      <div className="checkOut">
        <span className="text-gray-1 text-sm">CHECK-OUT</span>
        <div>
          <input type="date" className="text-black text-3xl font-semibold mr-4 cursor-pointer" name="check-out" />
        </div>
      </div>
      {/* <!-- Search btn --> */}
    </div>

    {/* <!-- Room & Guests --> */}
    <div className="bg-white border border-gray-2 rounded-2xl flex flex-col justify-center w-3/5 px-8 h-full">
      <span className="text-gray-1 text-sm">GUESTS</span>
      <div className="flex">
        <input
          className="text-black text-3xl font-semibold w-[15%] max-2xl:w-[20%]"
          type="number"
          name="guests"
          value="01"
        />
        <span className="text-black text-3xl font-semibold">Persons</span>
      </div>
    </div>
    {/* <!-- Search btn --> */}
    <button className="bg-black border h-16 w-56 rounded-2xl absolute -bottom-10 right-8 z-30 ml-[1040px] mt-[20px]">
      <span className="text-white font-light mr-5">Search Hotels</span>
      <i className="fas fa-angle-right text-white"></i>
    </button>
  </div>
);

export default HotelSearch;