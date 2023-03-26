import React from "react";
import Navbar from "../components/Navbar";
import { HotelSearch, HotelCard } from "../components/index";

const Hotel = () => {

  const hotels = [
    {
      name: 'สเตย์ วิธ นิมมาน เชียงใหม่',
      description: 'นอกจากที่พักจะได้รับการรับรองมาตรฐาน SHA Plus ที่พักยังมีบริการ Wi-Fi ฟรีในทุกห้องพัก และที่จอดรถฟรี ที่พักตั้งอยู่ในย่านนิมมานเหมินทร์ของเชียงใหม่ ผู้เข้าพักจึงได้อยู่ใกล้สถานที่ท่องเที่ยวน่าสนใจและร้านอาหารอร่อยๆ ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่าง วัดเจดีย์หลวง ด้วยอีกสักที่ ที่พัก 4 ดาวคุณภาพสูงแห่งนี้มี บริการนวด, สระว่ายน้ำกลางแจ้ง และ ฟิตเนสเซ็นเตอร์ คอยอำนวยความสะดวกแก่ผู้เข้าพัก',
      review_score: 9,
      price: 2452,
      class: 4,
    },{
      name: 'โรงแรมฟอร์จูน ดีพลัส เขาใหญ่ (Fortune D Plus Hotel Khaoyai)',
      description: 'เที่ยวเขาใหญ่ได้อย่างสบายใจเมื่อเข้าพักที่นี่ ที่พักได้รับใบรับรองมาตรฐาน SHA และมีอินเทอร์เน็ต Wi-Fi ฟรีในทุกห้องพักให้บริการ ที่พักตั้งอยู่ในย่านอุทยานแห่งชาติเขาใหญ่ จึงอยู่ใกล้กับที่เที่ยวมากมาย และสะดวกต่อการเดินทางไปสถานที่ต่างๆ ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่าง น้ำตกเหวสุวัต ด้วยอีกสักที่ ที่พัก 3 ดาวนี้มีสระว่ายน้ำกลางแจ้ง การเข้าพักจึงผ่อนคลายและสะดวกสบายสุดๆ',
      review_score: 7.6,
      price: 1105,
      class: 3,
    }
  ]

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

        <div className="flex flex-col w-[300px]">
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
                value="0"
              />
            </div>
            <div>
              <h1 className="text-gray-1 text-xl">Max Price</h1>
              <input
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                type="number"
                name="maxP"
                value="10000"
              />
            </div>
          </div>
          <div className="flex w-full justify-between items-center mt-5 gap-3">
            <div>
              <h1 className="text-gray-1 text-xl">Bedtype</h1>
              <select
                className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full"
                name="bedroom"
              >
                <option>Single/twin</option>
                <option>Double</option>
                <option>King</option>
                <option>Queen</option>
              </select>
            </div>
            {/* <div>
              <h1 className="text-gray-1 text-xl">Bathroom</h1>
              <input className="border border-solid border-gray-5 rounded-3xl p-3 px-5 text-gray-1 mt-4 w-full" type="number" name="maxP" />
            </div> */}
          </div>

          {/* --------------- star rating ---------------- */}

          <div className="mt-5">
            <h1 className="text-gray-1 text-xl">Star Rating</h1>
            <form className="flex flex-col gap-1 mt-2">
              <div>
                <input type="checkbox" name="five" />
                <label className="ml-2" for="five">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="four" />
                <label className="ml-2" for="four">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="three" />
                <label className="ml-2" for="three">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="two" />
                <label className="ml-2" for="two">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="one" />
                <label className="ml-2" for="one">
                  <i className="fa-solid fa-star" />
                </label>
              </div>
              <div>
                <input type="checkbox" name="no" />
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
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="nine">
                  9+ Exceptional
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="eight">
                  8+ Excellent
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="seven">
                  7+ Very Good
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
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
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="CM">
                  Chiang Mai
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="four">
                  Chon Buri
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="three">
                  Khao Yai
                </label>
              </div>
              <div>
                <input type="radio" name="guest" />
                <label className="text-gray-1 ml-2" for="two">
                  Prachin Buri
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-xl">Showing 123 search results</h1>
          {hotels.map((item) => (
            <div className="mt-8 w-full">
              <HotelCard hotel={item} />
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotel;
