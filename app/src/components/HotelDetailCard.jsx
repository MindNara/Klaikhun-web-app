import React from "react";

const HotelDetailCard = () => {
    return (
        <div className="border border-gray-2 rounded-[40px] h-full px-10 py-14">
            <h1 className="text-3xl font-medium">THB 1,200<span className="text-xl text-gray-1 font-light">/night</span></h1>
            <hr className="text-gray-2 my-8" />

            <div className="flex w-full justify-between items-center mt-10 gap-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Check-In</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="date"
                        name="checkIn"
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Check-Out</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="date"
                        name="checkPut"
                    />
                </div>
            </div>

            <div className="flex w-full justify-between items-center mt-10 gap-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Room</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="number"
                        name="room"
                        value="1"
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Guest</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="number"
                        name="guest"
                        value="1"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mt-10 gap-10">
                <div>
                    <h1 className="text-gray-1 text-xl">Price</h1>
                    <div className="w-full bg-gray-3 py-6 px-10 mt-4 rounded-2xl">
                        <div className="text-gray-1 flex justify-between">
                            <span>1 Night, 2 Room</span>
                            <div className="flex gap-6">
                                <span>x2</span>
                                <span>THB 1,200</span>
                            </div>
                        </div>
                        <div className="flex justify-end w-full mt-2">
                            <h1 className="text-lg font-medium">THB 2,400</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 gap-10">
                <a href="#" className="flex justify-center w-full bg-black text-white font-light rounded-2xl py-4">Book Now</a>
            </div>
        </div>
    );
};

export default HotelDetailCard;
