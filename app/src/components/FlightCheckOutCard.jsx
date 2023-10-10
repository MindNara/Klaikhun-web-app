import { React, useContext, useState } from "react";
import { statusContext } from "./status";

function FlightCheckOutCard({ flightData, deals }) {

    const numberWithCommas = (x) => {
        if (x === undefined) {
            return "";
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [status, setStatus] = useContext(statusContext);
    const [passenger, setPassenger] = useState(1)
    const [discount, setDiscount] = useState(0)

    const updatePassenger = (event) => {
        setPassenger(event.target.value)
    }
    const updateDiscount = (event) => {
        console.log(event.target.value)
        validateCode(event.target.value)
    }


    const validateCode = (code) => {
        for (let item = 0; item < deals.length; item++) {
            if (code == deals[item].pro_code) {
                setDiscount(deals[item].pro_discount)
                console.log(item)
                break
            }
            else {
                setDiscount(0)
            }
        }
    }
    const updateStatus = () => {
        setStatus(1);
    };

    return (
        <div className="border border-gray-2 rounded-[40px] h-full px-10 py-14 m-16 max-2xl:w-[30rem] w-[35rem]">
            <div className="flex w-full justify-between items-center gap-10">
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">From</h1>
                    <div className=" bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" name="from">{flightData.flight_beginning}</div>
                </div>
                <div className="w-full">
                    <h1 className="text-gray-1 text-xl">To</h1>
                    <div className=" bg-gray-3 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" name="to">{flightData.flight_destination}</div>
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
                        value={passenger}
                        name="passenger"
                        min="1"
                        onChange={updatePassenger}
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
                        onChange={updateDiscount}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mt-10 gap-10">
                <div>
                    <h1 className="text-gray-1 text-xl">Price</h1>
                    <div className="w-full bg-gray-3 py-6 px-10 mt-4 rounded-2xl">
                        <div className="text-gray-1 flex justify-between">
                            <span>{passenger} Passenger</span>
                            <span>{numberWithCommas(flightData.ticket_price * passenger)}</span>
                        </div>
                        <div className="text-gray-1 flex justify-between">
                            <span>Discount {discount * 100}%</span>
                            <span>- THB {numberWithCommas((flightData.ticket_price * passenger * discount).toFixed(2))}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-between mt-10">
                <h1 className="text-xl">Total Payment</h1>
                <h1 className="text-2xl">THB {numberWithCommas((flightData.ticket_price * passenger * (1 - discount)).toFixed(2))}</h1>
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

export default FlightCheckOutCard;
