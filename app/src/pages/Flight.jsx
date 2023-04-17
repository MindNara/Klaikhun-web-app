import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FlightSearch, FlightCard } from "../components/index";
import axios from 'axios';

const Flight = () => {

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({})
  const [minP, setMinP] = useState(0)
  const [maxP, setMaxP] = useState(99999)

  function getFlights() {
    axios.get('http://localhost:3000/flights', { params })
      .then((response) => {
        setFlights(response.data.flights);
        console.log(response.data.flights);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleMinPriceChange = e => {
    setMinP(e.target.value)
    setParams({...params, "minP": e.target.value})
  }

  const handleMaxPriceChange = e => {
    setMaxP(e.target.value)
    setParams({...params, "maxP": e.target.value})
  }

  const handleBkkAirChange = e => {
    const isChecked = e.target.checked
    setParams({...params, "bkkAir": isChecked})
  }

  const handleNokAirChange = e => {
    const isChecked = e.target.checked
    setParams({...params, "nokAir": isChecked})
  }

  const handleAirAsiaChange = e => {
    const isChecked = e.target.checked
    setParams({...params, "airAsia": isChecked})
  }
  
  const handleThSmileChange = e => {
    const isChecked = e.target.checked
    setParams({...params, "thSmile": isChecked})
  }

  const handelClearFilter = e => {
    setParams({})
    window.location.reload(false)
  }

  useEffect(() => {
    getFlights();
  }, [params]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto flex flex-row justify-center items-center mt-[130px] relative">
        <FlightSearch />
      </div>

      <div className="container mx-auto flex gap-10 mt-40">
        {/* ------------------- filter ------------------- */}

        <div className="flex flex-col w-[25%] max-2xl:w-[20rem]">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-2xl font-medium">Filters</h1>
            <button className="bg-gray-3 text-gray-1 p-2 px-3 rounded-xl" onClick={ handelClearFilter }>
              Reset filters
            </button>
          </div>

          {/* ---------------- price filter --------------- */}

          <div className="flex w-full justify-between items-center mt-8 gap-3">
            <div>
              <h1 className="text-gray-1 text-xl">Min Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="minP"
                value={minP}
                onChange={ handleMinPriceChange }
              />
            </div>
            <div>
              <h1 className="text-gray-1 text-xl">Max Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="maxP"
                value={maxP}
                onChange={ handleMaxPriceChange }
              />
            </div>
          </div>

          {/* --------------- Airline Filter ---------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Airline</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="bkka" onChange={ handleBkkAirChange } />
                <label className="ml-2 text-gray-1" for="bkkAir">
                  Bangkok Airways
                </label>
              </div>
              <div>
                <input type="checkbox" name="nokAir" onChange={ handleNokAirChange } />
                <label className="ml-2 text-gray-1" for="nokAir">
                  Nok Air
                </label>
              </div>
              <div>
                <input type="checkbox" name="thaiAir" onChange={ handleAirAsiaChange } />
                <label className="ml-2 text-gray-1" for="thaiAir">
                  Thai AirAsia
                </label>
              </div>
              <div>
                <input type="checkbox" name="thaiSmile" onChange={ handleThSmileChange } />
                <label className="ml-2 text-gray-1" for="thaiSmile">
                  THAI Smile
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-col w-full">
          <h1 className="text-xl">Showing {flights.length} search results</h1>
          {flights.map((item) => (
            <FlightCard key={item.flight_id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Flight;
