import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { HotelSearch, HotelDetailCard, StarRating } from "../components/index";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Hotel = () => {

    const routeParams = useParams();

    const numberWithCommas = (x) => {
        if (x === undefined) {
            return "";
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [hotelDetail, setHotelDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    function getHotelDetail() {
        axios.get('http://localhost:3000/hotels/' + routeParams.hotelId)
            .then((response) => {
                setHotelDetail(response.data.hotelDetail[0]);
                // console.log(response.data.hotelDetail[0]);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getHotelDetail();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center">
                <Navbar />
            </div>
            <div className="container mx-auto flex flex-row justify-center items-center mt-[130px] relative">
                <HotelSearch />
            </div>

            <div className="container mx-auto flex flex-col my-52">
                <div className="flex justify-between">

                    {/* ------------- Name Hotel & Star ------------- */}
                    <div className="flex flex-col w-[70%]">
                        <h1 className="text-4xl font-semibold">
                            {hotelDetail.hotel_name}
                        </h1>
                        <span className="mt-2 text-lg">
                            <StarRating rating={hotelDetail.hotel_class} />
                        </span>
                    </div>

                    {/* ------------- Reviews & Price ------------- */}
                    <div className="flex items-start gap-8">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-end items-end">
                                <div className="text-sm">Very good</div>
                                <div className="text-gray-1 text-sm font-light">100+ reviews</div>
                            </div>
                            <div className="bg-black text-white text-xl aspect-square rounded-lg h-10 flex items-center justify-center ml-4">
                                {hotelDetail.review_score}
                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold flex justify-end">
                            THB {numberWithCommas(hotelDetail.room_price)}
                        </h1>
                    </div>
                </div>

                {/* ------------- Location & Description ------------- */}
                <div className="text-gray-1 my-6 flex flex-col gap-4 font-light text-lg">
                    <span className=""><i class="fa-solid fa-location-dot mr-2"></i>{hotelDetail.hotel_location}</span>
                    <span className="">{hotelDetail.hotel_description}</span>
                </div>

                <div className="flex justify-between space-x-8 mt-6">
                    {/* ------------- Hotel Images ------------- */}
                    <div className="w-3/5 flex flex-col gap-6 h-full">
                        <div className="bg-gray-3 rounded-[40px] w-full h-[40rem]">
                            <img className="object-cover w-full h-full rounded-[40px]" src={hotelDetail.hotel_image1} />
                        </div>
                        <div className="w-full h-[14em] flex gap-6">
                            <div className="bg-gray-3 rounded-[40px] w-1/3">
                                <img className="object-cover w-full h-full rounded-[40px]" src={hotelDetail.hotel_image2} />
                            </div>
                            <div className="bg-gray-3 rounded-[40px] w-1/3">
                                <img className="object-cover w-full h-full rounded-[40px]" src={hotelDetail.hotel_image3} />
                            </div>
                            <div className="bg-gray-3 rounded-[40px] w-1/3">
                                <img className="object-cover w-full h-full rounded-[40px]" src={hotelDetail.hotel_image4} />
                            </div>
                        </div>
                    </div>

                    {/* ------------- Card Hotel Detail ------------- */}
                    <div className="w-2/5 h-full">
                        < HotelDetailCard hotelDetail={hotelDetail} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;
