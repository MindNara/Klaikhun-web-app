import React from "react";

const Signin = () => {
  return (
    <div>
      <div className=" w-full h-screen">
        <div className="absolute bg-skyblue w-1/2 h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <a href="/" className="flex items-center mb-10">
              <i class="fab fa-slack fa-2x" alt="Logo"></i>
              <span className="self-center text-2xl font-bold whitespace-nowrap ml-2">
                KLAIKHUN
              </span>
            </a>
            <div className="flex flex-col items-center text-8xl max-2xl:text-7xl font-semibold mb-6">
              <span>WELCOME BACK</span>
              <span>TO KLAIKHUN</span>
            </div>
            <p className="text-2xl max-2xl:text-xl font-light">Log in to continue to your account, Have fun.</p>

            <div className="flex flex-col items-center mt-32">
              <p className="text-xl font-medium mb-3">Don’t have an account?</p>
              <a href="/signup" className="text-white bg-black px-8 py-2 text-xl rounded-3xl">SingUp</a>
            </div>
          </div>
        </div>

        <div className="absolute bg-white w-1/2 h-full right-0 flex justify-center flex-col items-center px-28">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-5xl font-bold text-center mb-3 uppercase">login Account</h2>
            <span className="text-2xl font-light">Good to see you</span>
          </div>
          <div className="w-full flex flex-col text-gray-2 mb-8">
            <label>User Name</label>
            <input type="text" className="bg-white p-2 border-b" />
          </div>
          <div className="w-full flex flex-col text-gray-2">
            <label>Password</label>
            <input type="text" className="bg-white p-2 border-balck border-b" />
          </div>
          <button className="rounded-3xl text-lg w-full mt-20 py-3 bg-black text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
