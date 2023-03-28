import { React, useState } from "react";
import { hotelList } from "../constants/hotelList";
import { Navbar, HotelCard, FlightCard } from "../components/index";

const Profile = () => {
    const [showCard, setShowCard] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    const clickHotel = () => {
        setShowCard(false);
    };

    const clickFlight = () => {
        setShowCard(true);
    };

    const clickCompleted = () => {
        setShowStatus(false);
    };

    const clickCanceled = () => {
        setShowStatus(true);
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <Navbar />
            </div>

            <div className="container mx-auto flex gap-10 mt-40">

                {/*       User details       */}
                <div className="w-[25%]">
                    <h1 className="text-2xl font-medium mb-10">User details</h1>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 items-center" name="profile">
                            <div className="bg-black w-20 h-20 rounded-xl"></div>
                            <div className="flex flex-col">
                                <span>Name</span>
                                <span className="text-xl font-medium">Username</span>
                            </div>
                        </div>

                        <div className="bg-gray-3 px-5 py-3 rounded-xl" name="email">
                            <div className="flex flex-col">
                                <span>Email</span>
                                <span className="font-light">username@gmail.com</span>
                            </div>
                        </div>

                        <div className="bg-gray-3 px-5 py-3 rounded-xl" name="phone">
                            <div className="flex flex-col">
                                <span>Phone Number</span>
                                <span className="font-light">098-9999999</span>
                            </div>
                        </div>

                        <div className="bg-gray-3 px-5 py-3 rounded-xl" name="password">
                            <div className="flex flex-col">
                                <span>Password</span>
                                <span className="font-light">xxxxxx</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*       My Bookings       */}
                <div className="w-[75%]">
                    <div className="flex justify-between mb-8">
                        <h1 className="text-2xl font-medium">My Bookings</h1>
                        <div>
                            <button onClick={clickHotel} className={`${showCard ? "text-black bg-gray-3 font-normal" : "text-white bg-black"} px-8 py-3 max-2xl:py-2 max-2xl:px-6 rounded-l-xl font-light`}>Hotels</button>
                            <button onClick={clickFlight} className={`${showCard ? "text-white bg-black" : "text-black bg-gray-3 font-normal"} px-8 py-3 max-2xl:py-2 max-2xl:px-6 rounded-r-xl font-light`}>Flights</button>
                        </div>
                    </div>

                    <div className="w-full">
                        <button onClick={clickCompleted} className={`${showStatus ? "text-black bg-gray-3 font-normal" : "text-white bg-black"} w-1/2 h-14 px-8 py-3 max-2xl:py-2 max-2xl:px-6 rounded-l-xl font-light text-xl`}>Completed</button>
                        <button onClick={clickCanceled} className={`${showStatus ? "text-white bg-black" : "text-black bg-gray-3 font-normal"} w-1/2 h-14 px-8 py-3 max-2xl:py-2 max-2xl:px-6 rounded-r-xl font-light text-xl`}>Canceled</button>
                    </div>

                    <div className={`${showStatus ? "hidden" : "block"}`}>
                        <div className="mt-10 max-2xl:mt-12" name="Completed">
                            {showCard ? 
                                <FlightCard /> :
                                hotelList.map((item) => (
                                    <div className="mt-8 w-full">
                                      <HotelCard key={item.id} {...item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
