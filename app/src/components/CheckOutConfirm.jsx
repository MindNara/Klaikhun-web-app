import React from "react";

const CheckOutConfirm = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold">Booking Confirmed!</h1>
            <h1 className="text-2xl mt-8">Thank you for booking with us.</h1>
            <h1 className="text-2xl">Enjoy your trip.</h1>
            <div className="flex flex-row justify-center items-center gap-10 mt-12 w-full px-96">
                <a href="/profile" className="flex justify-center w-full bg-black text-white font-light rounded-xl px-4 py-2">See your booked</a>
                <a href="/" className="flex justify-center w-full bg-black text-white font-light rounded-xl px-4 py-2">Back to Home</a>
            </div>
        </div>
    )
}

export default CheckOutConfirm