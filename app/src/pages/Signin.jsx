import React from "react";

const Signin = () => {
  return (
    <div>
      <div class=" w-full h-full">
        <div class="absolute bg-skyblue w-3/5 h-full"></div>
        <div class="absolute bg-white w-2/5 h-full right-0 flex justify-center flex-col items-center">
            <h2 classname="text-3xl font-bold text-center">Sign in</h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="user-name">User Name</label>
              <input type="text" className="rounded-lg bg-white-700 mt-2 p-2" />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="user-name">Password</label>
              <input type="text" className="rounded-lg bg-white-700 mt-2 p-2"/>
            </div>
            <div className="button-submit">
              <button classname="w-full my-5 py-2 bg-zinc-900">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
