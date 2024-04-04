import React from 'react';
import registerimg from '../assets/register-img.png'
import { NavLink } from 'react-router-dom';

const SignUpReciever = () => {
  return (
    <>
      <div class="flex flex-col  sm:flex-row  justify-center items-center space-x-0 sm:space-x-4">
        <img src={registerimg} alt={registerimg} width={"500px"}></img>

        {/* Form Code */}
        <form class="bg-white p-8 rounded-lg w-[400px] shadow-md">
          <h1 className=' font-bold mb-4 text-orange-500'>Reciever Sign Up</h1>
          <div class="mb-4">
            <label for="organization-name" class="block text-gray-700 font-bold mb-2">Organization Name</label>
            <input
              type="text"
              id="Organization-name"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Organization Name"
            />
          </div>
          <div class="mb-4">
            <label for="first-name" class="block text-gray-700 font-bold mb-2">First Name</label>
            <input
              type="text"
              id="first-name"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter First Name"
            />
          </div>
          <div class="mb-4">
            <label for="last-name" class="block text-gray-700 font-bold mb-2">Last Name</label>
            <input
              type="text"
              id="last-name"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Phone Number"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-turing focus:outline-none focus:shadow-outline"
              placeholder="Enter Email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Password"
            />
          </div>
          <div class="mb-4">
            <label for="confirm-password" class="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
          </div>
          <div class="flex items-center">
            <input
              id="agree-terms"
              type="checkbox"
              class="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
            />
            <label for="agree-terms" class="ml-2 block text-sm text-gray-900">
              I agree to the WeCare Terms of Use and Privacy Policy
            </label>
          </div>
          <button
            class="bg-orange-500 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>

          <p className="mt-2 text-grey-400">Already have an account?<NavLink to="/login" className="text-orange-500"> Log in </NavLink>
          </p>
        </form>

      </div>
    </>
  );
};

export default SignUpReciever;
