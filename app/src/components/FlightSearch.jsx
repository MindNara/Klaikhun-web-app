import React from "react";

const FlightSearch = () => (
  <>
    <div className="bg-white rounded-xl shadow-lg h-48 flex flex-col px-8 py-5 space-y-3">
      <div className="flex">
        <span className=" mr-3">01 Passengers</span>
        <a href="#">
          <i className="fas fa-sort-down"></i>
        </a>
      </div>

      <div className="flex flex-row justify-between space-x-5 h-full">
        {/* <!-- From --> */}
        <div className="box bg-white border border-gray-2 rounded-xl flex flex-col justify-center px-8 py-6 w-2/6">
          <span className="text-gray-1 text-sm font-medium">FROM</span>
          <span className="text-black text-3xl font-bold">
            Bangkok, Thailand
          </span>
        </div>

        {/* <!-- To --> */}
        <div className="box bg-white border border-gray-2 rounded-xl flex flex-col justify-center px-8 py-6 w-2/6">
          <span className="text-gray-1 text-sm font-medium">TO</span>
          <span className="text-black text-3xl font-bold">
            Chiang Mai (CNX)
          </span>
        </div>

        {/* <!-- Room & Guests --> */}
        <div className="box bg-white border border-gray-2 rounded-xl flex items-center justify-between px-8 py-6 w-2/5">
          <div className="checkIn">
            <span className="text-gray-1 text-sm font-medium">DEPARTURE</span>
            <div>
              <span className="text-black text-3xl font-bold mr-8">
                Sat, Feb 11
              </span>
              <i className="fas fa-calendar-alt fa-2x"></i>
            </div>
          </div>
          <div className="checkOut">
            <span className="text-gray-1 text-sm font-medium">RETURN</span>
            <div>
              <span className="text-black text-3xl font-bold mr-8">
                Sun, Feb 12
              </span>
              <i className="fas fa-calendar-alt fa-2x"></i>
            </div>
          </div>
        </div>

        {/* <!-- Search btn --> */}
        <button className="bg-black h-16 w-56 rounded-xl absolute right-8 top-44">
          <span className="text-white font-light mr-5">Search Flights</span>
          <i className="fas fa-angle-right text-white"></i>
        </button>
      </div>
    </div>
  </>
);

export default FlightSearch;
