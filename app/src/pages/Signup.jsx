import React from "react";

const Signup = () => {
  return (
    <div>
      <div className=" w-full h-screen">
        <div className="absolute bg-white w-1/2 h-full flex justify-center flex-col items-center p-20">
          <h2 className="text-5xl font-bold text-center uppercase mb-16">Register</h2>
          <div className="w-full flex flex-row">
            <div className="w-1/2 mr-1 text-gray-2 py-2 px-2 mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="h-8 w-full border-balck border-b text-sm p-2 bg transparent pitline-blue-600 shadow-sm"
              />
            </div>
            <div className="w-1/2 text-gray-2 py-2 px-2 mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="h-8 w-full border-balck border-b text-sm p-2 bg transparent pitline-blue-600 shadow-sm"
              />
            </div>
          </div>

          <div className="w-full flex flex-col text-gray-2 py-2 px-2 mb-3">
            <label>Username</label>
            <input type="text" className="bg-white p-2 border-b" />
          </div>
          <div className="w-full flex flex-col text-gray-2 py-2 px-2 mb-3">
            <label>Email</label>
            <input
              type="text"
              className="bg-white p-2 border-balck border-b"
            />
          </div>
          <div className="w-full flex flex-col text-gray-2 py-2 px-2 mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="bg-white p-2 border-balck border-b"
            />
          </div>

          <button className="rounded-3xl text-lg w-full mt-10 py-3 bg-black text-white">
            Submit
          </button>
        </div>

        <div className="absolute bg-skyblue w-1/2 h-full right-0">
          <div className="flex flex-col items-center justify-center h-full">
            <a href="/" className="flex items-center mb-10">
              <i class="fab fa-slack fa-2x" alt="Logo"></i>
              <span className="self-center text-2xl font-bold whitespace-nowrap ml-2">
                KLAIKHUN
              </span>
            </a>
            <div className="flex flex-col items-center text-8xl max-2xl:text-7xl font-semibold mb-6">
              <span>WELCOME</span>
              <span>TO KLAIKHUN</span>
            </div>
            <p className="text-2xl max-2xl:text-xl font-light">Book with us! for a better experience.</p>

            <div className="flex flex-col items-center mt-32">
              <p className="text-xl font-medium mb-3">Already have an account?</p>
              <a href="/signin" className="text-white bg-black px-8 py-2 text-xl rounded-3xl">SingIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
