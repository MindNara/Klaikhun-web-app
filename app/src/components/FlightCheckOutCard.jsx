import { React, useContext, useState, useEffect } from "react";
import { statusContext } from "./status";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function FlightCheckOutCard() {

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
    const [flightCheck, setFlightCheck] = useState([]);
    const [loading, setLoading] = useState(true);

    function getHotelCheck() {
        axios.get(`http://localhost:3000/flightCheck/` + routeParams.flightId)
            .then((response) => {
                setFlightCheck(response.data.flightCheck[0]);
                console.log(response.data.flightCheck[0]);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getHotelCheck();
    }, []);

    const [passengerAmount, setPassengerAmount] = useState(1);

    function handlePassengerAmountChange(event) {
        setPassengerAmount(event.target.value);
    }

    const ticketPrice = flightCheck.ticket_price;
    const discount = (ticketPrice * 0.2).toFixed(2);
    const priceTotel = ticketPrice - discount;

    return (
        <div className="border border-gray-2 rounded-[40px] h-full px-10 py-14 m-16 max-2xl:w-[30rem] w-[35rem]">
            <div className="flex w-full justify-between items-center gap-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">From</h1>
                    <div className=" bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" name="from">{flightCheck.flight_beginning}</div>
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">To</h1>
                    <div className=" bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" name="to">{flightCheck.flight_destination}</div>
                </div>
            </div>

            <div className="flex w-full justify-between items-center mt-10 gap-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Class</h1>
                    <div className=" bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" name="class">Economy</div>
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Passenger</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="number"
                        name="passenger"
                        value={passengerAmount}
                        onChange={handlePassengerAmountChange}
                    />
                </div>
            </div>

            <div className="flex w-full items-center mt-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">Discount Code</h1>
                    <input
                        className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                        type="text"
                        name="discountcode"
                        value="flight20"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mt-10 gap-10">
                <div>
                    <h1 className="text-gray-1 text-xl">Price</h1>
                    <div className="w-full bg-gray-3 py-6 px-10 mt-4 rounded-2xl">
                        <div className="text-gray-1 flex justify-between">
                            <span>1 Passenger</span>
                            <span>THB {numberWithCommas(ticketPrice)}</span>
                        </div>
                        <div className="text-gray-1 flex justify-between">
                            <span>Discount 20%</span>
                            <span>- THB {numberWithCommas(discount)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-between mt-10">
                <h1 className="text-xl">Total Payment</h1>
                <h1 className="text-2xl">THB {numberWithCommas(priceTotel)}</h1>
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
