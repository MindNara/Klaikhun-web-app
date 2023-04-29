import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const HotelDetailCard = ({ hotelDetail }) => {

    const numberWithCommas = (x) => {
        if (x === undefined) {
            return "";
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const routeParams = useParams();

    function putHotelCheckout() {
        const checkIn = document.getElementsByName("checkIn")[0].value;
        const checkOut = document.getElementsByName("checkOut")[0].value;
        const room = document.getElementsByName("room")[0].value;
        const guest = document.getElementsByName("guest")[0].value;
        console.log(checkIn)

        axios.post('http://localhost:3000/hotels/' + routeParams.hotelId, {
            checkIn: checkIn,
            checkOut: checkOut,
            room: room,
            guest: guest,
        })
            .then((response) => {
                console.log("checkoutSuccess");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const [guestAmount, setGuestAmount] = useState(1);
    const [roomAmount, setRoomAmount] = useState(1);

    function handleGuestAmountChange(event) {
        setGuestAmount(event.target.value);
    }

    function handleRoomAmountChange(event) {
        setRoomAmount(event.target.value);
        setRoomGuest(event.target.value);
    }

    return (
        <div className="border border-gray-2 rounded-[40px] h-full px-10 py-14">
            <h1 className="text-3xl font-medium">THB {numberWithCommas(hotelDetail.room_price)}<span className="text-xl text-gray-1 font-light">/night</span></h1>
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
                        name="checkOut"
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
                        value={roomAmount}
                        onChange={handleRoomAmountChange}
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Guest</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="number"
                        name="guest"
                        value={guestAmount}
                        onChange={handleGuestAmountChange}
                    />
                </div>
            </div>

            {/* <div className="flex flex-col w-full mt-10 gap-10">
                <div>
                    <h1 className="text-gray-1 text-xl">Price</h1>
                    <div className="w-full bg-gray-3 py-6 px-10 mt-4 rounded-2xl">
                        <div className="text-gray-1 flex justify-between">
                            <span>1 Room</span>
                            <div className="flex gap-6">
                                <span>x2</span>
                                <span>THB 1,200</span>
                            </div>
                        </div>
                        <div className="flex justify-end w-full mt-2">
                            <h1 className="text-lg font-medium">THB {numberWithCommas(hotelDetail.room_price)}</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="w-full mt-10 gap-10">
                <a href={"/hotelCheck/" + hotelDetail.hotel_id} onClick={putHotelCheckout} className="flex justify-center w-full bg-black text-white font-light rounded-2xl py-4">Book Now</a>
            </div>
        </div >
    );
};

export default HotelDetailCard;
