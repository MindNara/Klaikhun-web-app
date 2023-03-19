import React from 'react'

const HotelSearch = () => (
    <nav className="booking container mx-auto mt-10 relative">
        <div className="bg-white rounded-xl shadow-lg h-40 flex flex-row items-center justify-between p-5 space-x-5">
            {/* <!-- Destination --> */}
            <div className="box bg-white border border-gray-5 rounded-xl flex flex-col justify-center px-8 w-2/5"
                >
                <span className="text-gray-1 text-sm">DESTINATION</span>
                <span className="text-black text-3xl font-semibold">Bangkok</span>
            </div>

            {/* <!-- Check-In & Check-Out --> */}
            <div className="box bg-white border border-gray-5 rounded-xl flex items-center justify-between px-8 w-full"
                >
                <div className="checkIn">
                    <span className="text-gray-1 text-sm">CHECK-IN</span>
                    <div>
                        <span className="text-black text-3xl font-semibold mr-8">Sat, Feb 11</span>
                        <i className="fas fa-calendar-alt fa-2x"></i>
                    </div>
                </div>
                <div className="checkOut">
                    <span className="text-gray-1 text-sm">CHECK-OUT</span>
                    <div>
                        <span className="text-black text-3xl font-semibold mr-8">Sun, Feb 12</span>
                        <i className="fas fa-calendar-alt fa-2x"></i>
                    </div>
                </div>
            </div>

            {/* <!-- Room & Guests --> */}
            <div className="box bg-white border border-gray-5 rounded-xl flex flex-col justify-center px-8 w-full"
                >
                <span className="text-gray-1 text-sm">ROOM AND GUESTS</span>
                <div>
                    <span className="text-black text-3xl font-semibold mr-6">1 Room, 2 Adults, 1 Child</span>
                    <i className="fas fas fa-angle-down fa-2x"></i>
                </div>
            </div>
            {/* <!-- Search btn --> */}
        </div>
            <button className="bg-black h-16 w-56 rounded-xl right-4 justify-center flex items-center ml-[1040px] mt-[-10px]">
                <span className="text-white font-light mr-5">Search Hotels</span>
                <i className="fas fa-angle-right text-white"></i>
            </button>
    </nav>
)


export default HotelSearch