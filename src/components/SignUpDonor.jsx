import React, { useState } from "react";
import donateimg from "../assets/donate-img.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";

const SignUpDonor = () => {
  const [FName, setFirstName] = useState("");
  const [LName, setLastName] = useState("");
  const [Phoneno, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const getInputData = async (e) => {
    e.preventDefault();

    const user = { FName, LName, Phoneno, Email, Password };
    console.log(user);
    try {
      const res = await axios.post(`${API_END_POINT}/register`, user);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col  sm:flex-row  justify-center items-center space-x-0 sm:space-x-4">
        <img src={donateimg} alt={donateimg} width={"500px"}></img>

        <form
          className="bg-white p-8 rounded-lg w-[400px] shadow-md"
          onSubmit={getInputData}
        >
          <h1 className="font-bold mb-4 text-orange-500">Donor Sign Up</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              value={FName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              value={LName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              value={Phoneno}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input placeholder="Confirm Password" />
          </div>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>

          <p className="mt-2 text-grey-400">
            Already have an account?
            <NavLink to="/login" className="text-orange-500">
              {" "}
              Log in{" "}
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpDonor;
