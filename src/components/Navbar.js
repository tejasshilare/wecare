import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import { useState } from 'react';
import weblg from "../Images/weblg.png";
const Navbar = () => {
  const [nav,setNav]=useState(true);

  const handleNav=()=>{
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-black">
     {/* <h1 className="w-full text-3xl text-indigo-500 font-bold"> React...</h1> */}
      <img className="w-full  w-[110px] " src={weblg}  alt="Logo" />
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Donation</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
      
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#72A0C1] ease-in-out duration-500" : "fixed left-[-100%]"}>
      <img className="w-full w-[110px] " src={weblg}  alt={weblg} />
        <ul className="p-4 uppercase">
        <li className="p-4 border-b border-gray-800  border-b border-gray-800">Home</li>
        <li className="p-4 border-b border-gray-800">Donation</li>
        <li className="p-4 border-b border-gray-800">About</li>
        <li className="p-4 border-b border-gray-800">About</li>
        <li className="p-4 border-b border-gray-800">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;