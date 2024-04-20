import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import weblg from "../assets/weblg.png";
import { Link } from "react-router-dom";
import usericon from "../assets/usericon.svg";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-black">
      <a href="/Home">
        <img className="w-[120px] h-[110px] " src={weblg} alt="Logo" />
      </a>

      <ul className="hidden md:flex ">
        <Link to="/Home">
          <li className="p-4  hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Home
          </li>
        </Link>
        <Link to="/Donation">
          <li className="p-4  hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Donation
          </li>
        </Link>
        <Link to="/about">
          <li className="p-4  hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            About
          </li>
        </Link>
        <Link to="/Contact">
          <li className="p-4 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Contact
          </li>
        </Link>
        <Link to="/" className="pl-[10px]">
          <li className="p-4 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            logout
          </li>
        </Link>
        <Link to="/signup" className="pl-[10px]">
          <li className="p-4 text-green-500 font-medium hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer rounded-md md:hover:bg-orange-300 lg:hover:font-2xl ">
            Register
          </li>
        </Link>
        <Link to="/login" className="pl-[10px]">
          <button className="w-[110px] h-[35px] mt-[7px] text-white  bg-orange-400 rounded-full hover:bg-red-500 text-center hidden sm:inline-block">
            Login
          </button>
        </Link>
        <Link to="/" className="pl-[10px]">
          <li className="w-[35px] h-[35px] mt-[8px]">
            <img src={usericon} alt="" />
          </li>
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#416986] md:hidden ease-in-out duration-500"
            : "fixed left-[-100%] z-10 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#416986] ease-in-out duration-500 "
        }
      >
        <div className="flex justify-between">
          <img className="w-[110px] " src={weblg} alt={weblg} />
          <Link
            to="/login"
            onClick={handleNav}
            className=" my-auto mx-6 md:hidden inline-block "
          >
            <button className="w-[110px] h-[35px] text-white  bg-orange-400 rounded-full hover:bg-red-500 text-center ">
              Login
            </button>
          </Link>
        </div>

        <ul className="p-4 uppercase">
          <Link to="/" onClick={handleNav}>
            <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-ggray-400 md:hover:bg-gray-400 lg:hover:font-2xl">
              Home
            </li>
          </Link>
          <Link to="/Donation" onClick={handleNav}>
            <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-400 md:hover:bg-gray-400 lg:hover:font-2xl">
              Donation
            </li>
          </Link>
          <Link to="/about" onClick={handleNav}>
            <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-400 md:hover:bg-gray-400 lg:hover:font-2xl">
              About
            </li>
          </Link>
          <Link to="/Contact" onClick={handleNav}>
            <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
              Contact
            </li>
          </Link>
          <Link to="/signup" onClick={handleNav}>
            <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
              Register
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
