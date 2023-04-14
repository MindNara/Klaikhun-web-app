import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
// import { hotelList } from "../constants/hotelList";
import { Navbar, HotelSearch, HotelCard } from "../components/index";
import axios from 'axios';

const Hotel = () => {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [guestRating, setGuestRating] = useState("0")
  const [minP , setMinP] = useState(0)
  const [maxP, setMaxP] = useState(99999)
  var params = {}
  var navigate = useNavigate()
  
  
  function getHotels() {
    axios.get('http://localhost:3000/hotels', { params })
    .then((response) => {
      setHotels(response.data.hotels);
      console.log(response.data.hotels);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  
  const handleRatingChange = e => {
    setGuestRating(e.target.value)
    params.rating = e.target.value
    console.log(params)
    getHotels();
  }

  const handleMinPriceChange = e => {
    setMinP(e.target.value)
    params.minP = e.target.value
    getHotels();
  }

  const handleMaxPriceChange = e => {
    setMaxP(e.target.value)
    params.maxP = e.target.value
    getHotels();
  }

  const handleStar5Change = e => {
    const isChecked = e.target.checked
    params.five = isChecked
    console.log(params.five)
    getHotels();
  }

  const handleStar4Change = e => {
    const isChecked = e.target.checked
    params.four = isChecked
    console.log(params.four)
    getHotels();
  }

  const handleStar3Change = e => {
    const isChecked = e.target.checked
    params.three = isChecked
    console.log(params.three)
    getHotels();
  }

  const handleStar2Change = e => {
    const isChecked = e.target.checked
    params.two = isChecked
    console.log(params.two)
    getHotels();
  }

  const handleStar1Change = e => {
    const isChecked = e.target.checked
    params.one = isChecked
    console.log(params.one)
    getHotels();
  }

  const handleStarNoChange = e => {
    const isChecked = e.target.checked
    params.no = isChecked
    console.log(params.no)
    getHotels();
  }

  const handleCMChange = e => {
    const isChecked = e.target.checked
    params.cm = isChecked
    console.log(params.cm)
    getHotels();
  }

  const handleCBChange = e => {
    const isChecked = e.target.checked
    params.cb = isChecked
    console.log(params.cb)
    getHotels();
  }

  const handleKYChange = e => {
    const isChecked = e.target.checked
    params.ky = isChecked
    console.log(params.ky)
    getHotels();
  }

  const handlePBChange = e => {
    const isChecked = e.target.checked
    params.pb = isChecked
    console.log(params.pb)
    getHotels();
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="container mx-auto flex flex-row justify-center items-center mt-[130px] relative">
        <HotelSearch />
      </div>
      <div className="container mx-auto flex gap-10 mt-40">
        {/* ------------------- filter ------------------- */}
        <form method="GET">
        <div className="flex flex-col w-full max-2xl:w-[15rem]">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-2xl font-medium">Filters</h1>
            <button className="bg-gray-3 text-gray-1 p-2 px-3 rounded-xl">
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

          {/* --------------- star rating ---------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Star Rating</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="five" onChange={handleStar5Change} />
                <label className="ml-2" for="five">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="four" onChange={handleStar4Change} />
                <label className="ml-2" for="four">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="three" onChange={handleStar3Change} />
                <label className="ml-2" for="three">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="two" onChange={handleStar2Change} />
                <label className="ml-2" for="two">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="one" onChange={handleStar1Change} />
                <label className="ml-2" for="one">
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="no" onChange={handleStarNoChange} />
                <label className="text-gray-1 ml-2" for="no">
                  No Rating
                </label>
              </div>
            </form>
          </div>

          {/* ------------- Guest Rating -------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Guest Rating</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="radio" name="guest" value="9" checked={guestRating === '9'} onChange={handleRatingChange} />
                <label className="text-gray-1 ml-2" for="nine">
                  9+ Exceptional
                </label>
              </div>
              <div>
                <input type="radio" name="guest" value="8" checked={guestRating === '8'} onChange={handleRatingChange} />
                <label className="text-gray-1 ml-2" for="eight">
                  8+ Excellent
                </label>
              </div>
              <div>
                <input type="radio" name="guest" value="7" checked={guestRating === '7'} onChange={handleRatingChange} />
                <label className="text-gray-1 ml-2" for="seven">
                  7+ Very Good
                </label>
              </div>
              <div>
                <input type="radio" name="guest" value="6" checked={guestRating === '6'} onChange={handleRatingChange} />
                <label className="text-gray-1 ml-2" for="six">
                  6+ Good
                </label>
              </div>
            </form>
          </div>

          {/* ------------- Location filter ------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Location</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="location" value="CM" onChange={handleCMChange} />
                <label className="text-gray-1 ml-2" for="CM">
                  Chiang Mai
                </label>
              </div>
              <div>
                <input type="checkbox" name="location" value="CB" onChange={handleCBChange} />
                <label className="text-gray-1 ml-2" for="CB">
                  Chon Buri
                </label>
              </div>
              <div>
                <input type="checkbox" name="location" value="KY" onChange={handleKYChange} />
                <label className="text-gray-1 ml-2" for="KY">
                  Khao Yai
                </label>
              </div>
              <div>
                <input type="checkbox" name="location" value="PB" onChange={handlePBChange} />
                <label className="text-gray-1 ml-2" for="PB">
                  Prachin Buri
                </label>
              </div>
            </form>
          </div>
        </div>
        </form>

        {/* max-2xl:w-[20rem] */}
        <div className="flex flex-col w-full">
          <h1 className="text-xl">Showing {hotels.length} search results</h1>
          {hotels.map((item) => (
            <div className="mt-8 w-full">
              <HotelCard key={item.hotel_id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotel;
