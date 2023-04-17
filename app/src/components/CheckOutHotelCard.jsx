import React, { useState } from "react";
import { StarRating } from '../components'
import axios from 'axios';

const CheckOutHotelCard = ({ hotel_id, hotel_name, hotel_class, hotel_description, hotel_location, room_price, review_score, hotel_image1 }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [loading, setLoading] = useState(true);
    // const [isDeleted, setIsDeleted] = useState(false);

    function deleteHotel() {
        axios.delete('http://localhost:3000/profile', { params: { hotel_id } })
            .then((response) => {
                const isDeleted = response.data;
                if (isDeleted) {
                    window.location.href = '/profile';
                } else {
                    alert('Unable to delete hotel');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
            {/* {isDeleted ? '' : */}
            <div className="bg-white drop-shadow-lg rounded-2xl h-[240px] flex">
                <div className="bg-gray-3 h-full aspect-square rounded-2xl">
                    <a href={'hotels/' + hotel_id}>
                        <img src={hotel_image1} className="object-cover h-full rounded-2xl" />
                    </a>
                </div>
                <div className="mx-3 px-5 py-4 w-[53rem] max-2xl:w-[41rem]">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center w-[80%] max-2xl:w-[70%]">
                            <a href={'hotels/' + hotel_id} className="text-2xl whitespace-nowrap text-ellipsis overflow-hidden hover:underline">
                                {hotel_name}
                            </a>
                            <span className="mx-3 text-sm w-40 max-2xl:w-44">
                                <StarRating rating={hotel_class} />
                            </span>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-end w-20">
                                <span className="text-sm">Very good</span>
                                <span className="text-gray-1 text-sm font-light">100+ reviews</span>
                            </div>
                            <div className="bg-black text-white text-xl aspect-square rounded-lg h-10 flex items-center justify-center ml-4">
                                {review_score}
                            </div>
                        </div>
                    </div>
                    <h1 className="mt-1 text-gray-1 text-sm font-light w-[70%] whitespace-nowrap text-ellipsis overflow-hidden">
                        <i class="fa-solid fa-location-dot mr-2"></i>{hotel_location}
                    </h1>
                    <div className="flex justify-between mt-3 h-[65%]">
                        <div className="w-[75%] h-full bg-gradient-to-r from-gray-3 to-white-0% rounded-lg p-5">
                            <p className="text-gray-1 font-light h-full overflow-hidden">{hotel_description}</p>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <h1 className="text-2xl font-semibold flex justify-end">
                                THB {numberWithCommas(room_price)}
                            </h1>
                            <button onClick={deleteHotel} className="bg-red text-white text-lg rounded-xl p-2 px-5 mt-2">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            {/* } */}
        </div>
    );
};

export default CheckOutHotelCard;
