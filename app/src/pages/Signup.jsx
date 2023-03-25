import React from "react";

const Signup = () => {
  return (
    <div>
      <div className=" w-full h-screen">
        <div className="absolute bg-white w-3/5 h-full flex justify-center flex-col items-center p-20">
          <h2 className="text-3xl font-bold text-center p-10">Register</h2>
          <div className="w-full flex flex row">
            <div className="w-1/2 mr-1 text-gray-2 py-2 px-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="h-8 w-full  border-balck border-b text-sm p1-2 bg transparent pitline-blue-600 shadow-sm"
              />
            </div>

            <div className="w-1/2 mr-1 text-gray-2 py-2 px-2">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="h-8 w-full  border-balck border-b text-sm p1-2 bg transparent pitline-blue-600 shadow-sm"
              />
            </div>
          </div>

          <div className="w-full flex flex-col text-gray-2 py-2 px-2">
            <label htmlFor="">Username</label>
            <input type="text" className="bg-white mt-2 p-2 border-b" />
          </div>
          <div className="w-full flex flex-col text-gray-2 py-2 px-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="bg-white mt-2 p-2 border-balck border-b"
            />
          </div>
          <div className="w-full flex flex-col text-gray-2 py-2 px-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="bg-white mt-2 p-2 border-balck border-b"
            />
          </div>
          <button className="rounded-3xl w-full my-5 py-2 px-2 bg-black text-white">
            Submit
          </button>
        </div>
        <div className="absolute bg-skyblue w-2/5 h-full right-0"></div>
      </div>
    </div>
  );
};

export default Signup;
