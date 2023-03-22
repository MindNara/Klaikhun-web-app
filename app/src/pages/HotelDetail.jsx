import React from "react";
import Navbar from "../components/Navbar";
import { HotelSearch, HotelDetailCard } from "../components/index";

const Hotel = () => {
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
                    <div className="flex items-center">
                        <h1 className="text-4xl font-semibold">
                            Hotel Name
                        </h1>
                        <h1 className="ml-5 text-lg">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                        </h1>
                    </div>

                    {/* ------------- Reviews & Price ------------- */}
                    <div className="flex items-center gap-8">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-end items-end">
                                <div className="text-sm">Very good</div>
                                <div className="text-gray-1 text-sm font-light">100+ reviews</div>
                            </div>
                            <div className="bg-black text-white text-xl aspect-square rounded-lg h-10 flex items-center justify-center ml-4">
                                5
                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold flex justify-end">
                            THB 1,200
                        </h1>
                    </div>
                </div>

                {/* ------------- Location & Description ------------- */}
                <div className="text-gray-1 my-6 flex flex-col gap-4 font-light text-lg">
                    <span className=""><i class="fa-solid fa-location-dot mr-2"></i>location</span>
                    <span className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi error corporis reprehenderit nulla. Facere, exercitationem ut!
                        Nihil magni veniam vel voluptates exercitationem harum, iste distinctio aliquam minima magnam ea hic. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Illo quas nisi impedit, qui dignissimos placeat obcaecati expedita animi laboriosam labore repellat a, ratione eveniet adipisci sunt
                        ullam deleniti dolorem numquam.</span>
                </div>

                <div className="flex justify-between items-center space-x-8 mt-6 h-[760px]">
                    {/* ------------- Hotel Images ------------- */}
                    <div className="w-3/5 flex flex-col gap-6 h-full">
                        <div className="bg-gray-3 rounded-[40px] w-full h-[30rem]"></div>
                        <div className="w-full flex gap-6">
                            <div className="bg-gray-3 rounded-[40px] w-1/3 h-[16rem]"></div>
                            <div className="bg-gray-3 rounded-[40px] w-1/3 h-[16rem]"></div>
                            <div className="bg-gray-3 rounded-[40px] w-1/3 h-[16rem]"></div>
                        </div>
                    </div>

                    {/* ------------- Card Hotel Detail ------------- */}
                    <div className="w-2/5 h-full">
                        < HotelDetailCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;
