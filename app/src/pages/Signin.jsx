import React from "react";

const Signin = () => {
  return (
    <div>
      <div className=" w-full h-screen">
        <div className="absolute bg-skyblue w-3/5 h-full"></div>
        <div className="absolute bg-white w-2/5 h-full right-0 flex justify-center flex-col items-center p-20">
            <h2 className="text-3xl font-bold text-center p-10">Sign in</h2>
            <div className="w-full flex flex-col text-gray-2 py-2">
              <label htmlFor="">User Name</label>
              <input type="text" className="bg-white mt-2 p-2 border-b" />
            </div>
            <div className="w-full flex flex-col text-gray-2 py-2">
              <label htmlFor="">Password</label>
              <input type="text" className="bg-white mt-2 p-2 border-balck border-b"/>
            </div>
              <button className="rounded-3xl w-full my-5 py-2 bg-black text-white">Submit</button>
        </div>
      </div>
    </div> 
  );
};

export default Signin;
