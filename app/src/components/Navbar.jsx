import { useState } from "react";

const Navbar = () => {
  const [dropdownModel, setDropdownModel] = useState(false);

  const openDropdown = () => {
    setDropdownModel(true);
  };

  const closeDropdown = () => {
    setDropdownModel(false);
  };

  return (
    <nav className="w-full ">
      {/*                           BG                           */}
      <section class="bgImage absolute h-48"></section>

      {/*                      logo / menu                       */}
      <div className="container flex flex-row items-center justify-between mx-auto pt-8">
        <div className="items-center justify-between space-x-20 w-full md:flex md:w-auto z-10">
          <a href="/" className="flex items-center">
            <i class="fab fa-slack fa-2x" alt="Logo"></i>
            <span className="self-center text-2xl font-bold whitespace-nowrap ml-2">
              KLAIKHUN
            </span>
          </a>

          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-base md:font-medium md:border-0">
            <li>
              <a
                href="/hotels"
                className="block py-2 pl-3 pr-4  text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black rounded md:p-0"
                aria-current="page"
              >
                Hotels
              </a>
            </li>
            <li>
              <a
                href="/flights"
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                href="/deals"
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0"
              >
                Deals
              </a>
            </li>
          </ul>
        </div>

        {/*                         profile card                            */}
        <div className="relative flex items-center md:order-2 z-10">
          <span className="text-base font-medium mr-5">Hi, Member Name</span>
          <button
            onClick={() => {
              dropdownModel ? closeDropdown() : openDropdown();
            }}
            type="button"
            className="mr-3 text-sm md:mr-0 bg-black rounded-lg h-10 w-10"
          ></button>

          <div
            class={
              (dropdownModel ? "block " : "hidden ") +
              "flex absolute right-0 top-10 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg"
            }
          >
            <div class="py-1 w-full" role="none">
              <a href="/Profile" class="text-black block px-4 py-2 text-sm">
                Profile
              </a>
              <a href="/" class="text-black block w-full px-4 py-2 text-left text-sm">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
