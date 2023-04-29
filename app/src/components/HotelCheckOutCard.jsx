import { React, useContext, useState, useEffect } from "react";
import { statusContext } from "./status";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function HotelCheckOutCard() {

  const numberWithCommas = (x) => {
    if (x === undefined) {
      return "";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [status, setStatus] = useContext(statusContext);

  const updateStatus = () => {
    setStatus(1);
  };

  const routeParams = useParams();
  const [hotelCheck, setHotelCheck] = useState([]);
  const [loading, setLoading] = useState(true);

  function getHotelCheck() {
    axios.get('http://localhost:3000/hotelCheck/' + routeParams.hotelId)
      .then((response) => {
        setHotelCheck(response.data.hotelCheck[0]);
        console.log(response.data.hotelCheck[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getHotelCheck();
  }, []);

  const roomAmount = hotelCheck.booking_room_amount;
  const roomPrice = hotelCheck.room_price;

  const checkIn = new Date(hotelCheck.booking_check_in_date);
  const checkOut = new Date(hotelCheck.booking_check_out_date);
  const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
  const nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
  // console.log(nightCount);
  const roomPriceTotal = (roomPrice * roomAmount * nightCount);
  const discount = roomPriceTotal * 0.5;

  return (
    <div className="border border-gray-2 rounded-[40px] h-full px-10 py-14 m-16 max-2xl:w-[30rem] w-[35rem]">
      <div className="flex w-full justify-between items-center gap-10">
        <div className="w-full">
          <h1 className="text-gray-1 text-xl">Check-In</h1>
          <div
            className="bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
            type="date"
            name="checkIn"
          >
            {new Date(hotelCheck.booking_check_in_date).toLocaleDateString('en-GB')}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-gray-1 text-xl">Check-Out</h1>
          <div
            className="bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
            type="date"
            name="checkIn"
          >
            {new Date(hotelCheck.booking_check_out_date).toLocaleDateString('en-GB')}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between items-center mt-10 gap-10">
        <div className="w-full">
          <h1 className="text-gray-1 text-xl">Room</h1>
          <div
            className="bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
            type="number"
            name="room"
          >
            {hotelCheck.booking_room_amount}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-gray-1 text-xl">Guest</h1>
          <div
            className="bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
            type="number"
            name="guest"
          >
            {hotelCheck.booking_guest_amount}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center mt-10">
        <div className="w-full">
          <h1 className="text-gray-1 text-xl">Discount Code</h1>
          <input
            className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
            type="text"
            name="discountcode"
            value="welcome50"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mt-10 gap-10">
        <div>
          <div className="flex justify-between">
            <h1 className="text-gray-1 text-xl">Price</h1>
            <span className="text-gray-1">{numberWithCommas(roomPrice)} THB / Night</span>
          </div>
          <div className="w-full bg-gray-3 py-6 px-10 mt-4 rounded-2xl">
            <div className="text-gray-1 flex justify-between">
              <span>{roomAmount} Room, {nightCount} Nights</span>
              <span>THB {numberWithCommas(roomPrice * roomAmount * nightCount)}</span>
            </div>
            <div className="text-gray-1 flex justify-between">
              <span>Discount 50%</span>
              <span>- THB {numberWithCommas(discount)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between mt-10">
        <h1 className="text-xl">Total Payment</h1>
        <h1 className="text-2xl">THB {numberWithCommas(roomPriceTotal - discount)}</h1>
      </div>

      <div className="w-full mt-10 gap-10">
        {status === 0 && (
          <button
            onClick={updateStatus}
            className="flex justify-center w-full bg-black text-white font-light rounded-2xl py-4"
          >
            Check Out
          </button>
        )}
        {status === 1 && (
          <a
            href="/confirmed"
            className="flex justify-center w-full bg-black text-white font-light rounded-2xl py-4"
          >
            Book Now!
          </a>
        )}
      </div>
    </div>
  );
}
