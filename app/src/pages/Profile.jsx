import React, { useState, useEffect } from "react";
import { Navbar, CheckOutHotelCard, CheckOutFlightCard } from "../components/index";
import axios from 'axios';

const Profile = () => {
    const [showCard, setShowCard] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    const clickHotel = () => {
        setShowCard(false);
    };

    const clickFlight = () => {
        setShowCard(true);
    };

    const [bookHotel, setBookHotel] = useState([]);
    const [bookFilght, setBookFilght] = useState([]);
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(true);

    function getProfile() {
        axios.get('http://localhost:3000/profile')
            .then((response) => {
                setBookHotel(response.data.checkOutHotel);
                // console.log(response.data.checkOutHotel);

                setBookFilght(response.data.checkOutFlight);
                // console.log(response.data.checkOutFlight);

                setMember(response.data.member);
                // console.log(response.data.member);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getProfile();
    }, []);

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
                                <span className="text-xl font-medium">{member.mem_username}</span>
                            </div>
                        </div>

                        <div className="bg-gray-3 px-5 py-3 rounded-xl" name="email">
                            <div className="flex flex-col">
                                <span>Email</span>
                                <span className="font-light">{member.mem_email}</span>
                            </div>
                        </div>

                        <div className="bg-gray-3 px-5 py-3 rounded-xl" name="phone">
                            <div className="flex flex-col">
                                <span>Phone Number</span>
                                <span className="font-light">{member.mem_phone}</span>
                            </div>
                        </div>

                        {/* <div className="bg-gray-3 px-5 py-3 rounded-xl" name="password">
                            <div className="flex flex-col">
                                <span>Password</span>
                                <span className="font-light">XXXXXX</span>
                            </div>
                        </div> */}
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

                    <div name="myBooking">
                        {showCard ?
                            bookFilght.map((item) => (
                                <CheckOutFlightCard key={item.ticket_id} {...item} />
                            )) :
                            bookHotel.map((item) => (
                                <div className="mt-8 w-full">
                                    <CheckOutHotelCard key={item.hotel_id} {...item} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
