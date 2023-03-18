import React from 'react'

const FlightSearch = () => (
  <nav className="booking container mx-auto mt-10 relative">
    <div className="bg-white border rounded-xl shadow-lg h-48 flex flex-col p-5 space-y-3">
        <div className="flex">
            <span className=" mr-3">01 Passengers</span>
            <a href="#"><i className="fas fa-sort-down"></i></a>
        </div>

        <div className="flex flex-row justify-between space-x-5" styles="height: 100%;">
            {/* <!-- From --> */}
            <div className="box bg-white border border-gray-300 rounded-xl flex flex-col justify-center px-8 py-6"
                styles="width: 30%;">
                <span className="text-gray-500 text-sm font-medium">FROM</span>
                <span className="text-black text-3xl font-bold">Bangkok, Thailand</span>
            </div>

            {/* <!-- To --> */}
            <div className="box bg-white border border-gray-300 rounded-xl flex flex-col justify-center px-8 py-6"
                styles="width: 30%;">
                <span className="text-gray-500 text-sm font-medium">TO</span>
                <span className="text-black text-3xl font-bold">Chiang Mai (CNX)</span>
            </div>

            {/* <!-- Room & Guests --> */}
            <div className="box bg-white border border-gray-300 rounded-xl flex items-center justify-between px-8 py-6"
                styles="width: 40%;">
                <div className="checkIn">
                    <span className="text-gray-500 text-sm font-medium">DEPARTURE</span>
                    <div>
                        <span className="text-black text-3xl font-bold mr-8">Sat, Feb 11</span>
                        <i className="fas fa-calendar-alt fa-2x"></i>
                    </div>
                </div>
                <div className="checkOut">
                    <span className="text-gray-500 text-sm font-medium">RETURN</span>
                    <div>
                        <span className="text-black text-3xl font-bold mr-8">Sun, Feb 12</span>
                        <i className="fas fa-calendar-alt fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* <!-- Search btn --> */}
      <button className="bg-black h-16 w-56 rounded-xl right-4 justify-center flex items-center ml-[1040px] mt-[20px]">
          <span className="text-white font-light mr-5">Search Flights</span>
          <i className="fas fa-angle-right text-white"></i>
      </button>

  </nav>
)

export default FlightSearch