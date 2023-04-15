import React from "react";

const FlightCard = ({ flight_id, flight_beginning, flight_destination, time_departure, time_arriving, airline_name, airline_logo, ticket_price }) => {

  function numberWithCommas(x) {
    if (x === undefined) {
      return "";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const provinces = [
    { name: 'กรุงเทพฯ', abbreviation: 'BKK' },
    { name: 'พังงา', abbreviation: 'PNA' },
    { name: 'ขอนแก่น', abbreviation: 'KKN' },
    { name: 'อุดรธานี', abbreviation: 'UDN' },
    { name: 'เชียงใหม่', abbreviation: 'CMI' },
    { name: 'จาร์กาตาร์', abbreviation: 'JKT' },
    { name: 'เชียงราย', abbreviation: 'CRI' },
    { name: 'ภูเก็ต', abbreviation: 'PKT' },
    { name: 'หาดใหญ่', abbreviation: 'SKA' },
    { name: 'น่าน', abbreviation: 'NAN' },
    { name: 'กระบี่', abbreviation: 'KBI' },
    { name: 'ญี่ปุ่น', abbreviation: 'JPN' },
  ]

  function getProvinceAbbreviation(provinceName) {
    const province = provinces.find(p => p.name === provinceName);
    return province ? province.abbreviation : '';
  }

  function getTravelTimes(time_departure, time_arriving) {

    const departureDate = new Date(time_departure);
    const arrivalDate = new Date(time_arriving);
    const travelTime = arrivalDate.getTime() - departureDate.getTime();

    const hours = Math.floor(travelTime / 1000 / 60 / 60);
    const minutes = Math.floor((travelTime / 1000 / 60) % 60);

    if (minutes != 0) {
      return `${hours.toString().padStart(1)}h ${minutes.toString().padStart(2, "0")}m`;
    }
    return `${hours.toString().padStart(1)}h`;

  }

  const formattedDepartureTime = time_departure.substring(11, 16);
  const formattedArrivalTime = time_arriving.substring(11, 16);

  function getFormattedTime(formatTime) {

    if (parseInt(formatTime) < 12) {
      return `${formatTime} AM`
    }
    return `${formatTime} PM`

  }

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl w-full h-[240px] flex justify-center items-center mt-8">
      <div className="flex flex-row h-full py-[40px] w-full justify-between px-10">
        <div className="flex flex-col justify-center items-center">
          <img className="rounded-2xl w-[100px] h-auto mb-2" src={airline_logo} />
          <div className="text-center text-black font-medium">
            {airline_name}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pl-10">
          <h1 className="text-black font-bold text-4xl">
            {getProvinceAbbreviation(flight_beginning)}
          </h1>
          <h3 className="text-gray-1 font-medium">{getFormattedTime(formattedDepartureTime)}</h3>
        </div>
        <div className="w-[400px] justify-center items-center py-5">
          <div className="w-full h-[100px] items-center justify-center flex flex-row mt-2">
            <i className="fa-solid fa-circle text-gray-2" />
            <div className="w-[120px] h-1 bg-gray-2" />
            <i class="fa fa-plane px-5 text-3xl text-gray-2" />
            <div className="w-[120px] h-1 bg-gray-2" />
            <i className="fa-solid fa-circle text-gray-2" />
          </div>
          <div className="text-gray-1 text-center">{getTravelTimes(time_departure, time_arriving)} (Direct)</div>
        </div>
        <div className="flex flex-col justify-center items-center pr-10">
          <h1 className="text-black font-bold text-4xl">
            {getProvinceAbbreviation(flight_destination)}
          </h1>
          <h3 className="text-gray-1 font-medium">{getFormattedTime(formattedArrivalTime)}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-black font-bold text-center text-2xl mb-1">
            THB {numberWithCommas(ticket_price)}
          </div>
          <a href={"/flightCheck/" + flight_id} className="bg-black rounded-lg py-3 px-8">
            <h4 className="text-center text-white font-medium text-lg">Book</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
