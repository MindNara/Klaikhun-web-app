import React from "react";

const FlightCard = ({ flight }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl w-full h-[240px] flex justify-center items-center mt-8">
      <div className="flex flex-row h-full py-[40px] w-full justify-between px-10">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black rounded-2xl w-[100px] h-[75px] mb-2">
            <img src={flight.airline_logo}/>
          </div>
          <div className="text-center text-black font-medium">
            {flight.airline_name}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pl-10">
          <h1 className="text-black font-bold text-4xl">
            {flight.flight_beginning}
          </h1>
          <h3 className="text-gray-1 font-medium">{flight.time_departure}</h3>
        </div>
        <div className="w-[400px] justify-center items-center py-5">
          <div className="w-full h-[100px] items-center justify-center flex flex-row mt-2">
            <i className="fa-solid fa-circle text-gray-2" />
            <div className="w-[120px] h-1 bg-gray-2" />
            <i class="fa fa-plane px-5 text-3xl text-gray-2" />
            <div className="w-[120px] h-1 bg-gray-2" />
            <i className="fa-solid fa-circle text-gray-2" />
          </div>
          <div className="text-gray-1 text-center">1h 15m (Direct)</div>
        </div>
        <div className="flex flex-col justify-center items-center pr-10">
          <h1 className="text-black font-bold text-4xl">
            {flight.flight_destination}
          </h1>
          <h3 className="text-gray-1 font-medium">{flight.time_arriving}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-black font-bold text-center text-2xl mb-1">
            THB {numberWithCommas(flight.ticket_price)}
          </div>
          <a href="/flightCheck" className="bg-black rounded-lg py-3 px-8">
            <h4 className="text-center text-white font-medium text-lg">Book</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
