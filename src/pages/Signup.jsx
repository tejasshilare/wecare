import React from "react";
import donlogo from "../assets/don-logo.png";
import reclogo from "../assets/rec-logo.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
     <h1 className="text-center mb-10 mt-5 font-bold text-[30px]">Create Your Account</h1>
      <div class="flex flex-col  sm:flex-row  justify-center items-center space-x-0 sm:space-x-4">
       
        <div class="donate-food bg-gradient-to-b from-[#ff8955] to-[#Ce0c00] p-6 py-10 rounded-lg shadow-md sm:w-[30%] w-[70%]  ">
          <img
            src={donlogo}
            alt="[image_1_alt_text]"
            class="w-32  rounded-full mx-auto mb-4"
          />

          <h2 class="text-xl text-white font-bold mb-4 text-center">Donate Food</h2>
        
          <p class="text-gray-200 text-center">
            I am a Business / Individual
          </p>
          <div class="flex items-center justify-center">
          <button class="bg-white text-black py-2 px-4 rounded mt-4">
            Sign Up Now
          </button>
          </div>
        </div>

        <div class="recieve-food mt-5 sm:mt-0 bg-gradient-to-b from-[#b0b0b0] to-[#3d3d3d] py-10 p-6 rounded-lg shadow-md sm:w-[30%] w-[70%] ">
          <img
            src={reclogo}
            alt="[image_2_alt_text]"
            class="w-28 rounded-full mx-auto mb-4"
          />

          <h2 class="text-xl text-white font-bold mb-4 text-center">Recieve Food Donation</h2>

          <p class="text-gray-200 text-center">
            I am a Non Profit Organization
          </p>
          <div class="flex items-center justify-center">
          <button class="bg-white text-black py-2 px-4 rounded mt-4">
            Sign Up Now
          </button>
          </div>
        </div>

      </div>
      <br className="mb-5"></br>

    </>
  );
};

export default Contact;
