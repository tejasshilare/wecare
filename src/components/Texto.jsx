import React from "react";
import world from "../assets/world.png";
import truck from "../assets/truck.png";
import location from "../assets/location.png";
// import { ReactTyped } from "react-typed";
const Texto = () => {
  return (
    <div className=" md:mx-36 mx-8 md:px-24 ">
      <div class="w-full h-auto flex flex-wrap flex-col items-center">
        <p class="text-[#FF7918] font-bold text-xl md:text-2xl text-center">
          "How WeCare Works.."
        </p>
        <div class="w-36 h-1 border-b-4 border-yellow-200 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        <p className="text-center text-lg">
          WeCare platform is a web app, allowing food donors to schedule <br />
          pick-up services in a few clicks. Our data-driven technology provides{" "}
          <br />
          detailed metrics on the impact of those contributions.
        </p>
        <div className="grid grid-rows-3  bg-slate-300 my-16 text-lg text-center">
          <div className="grid grid-cols-2 m-12">
            <div className="flex justify-evenly">
              <img src={location} alt="" className="w-8 h-8" />
              Request a pickup
            </div>
            <div>
              From your dashboard select a day and time for your food to be
              picked up.
            </div>
          </div>
          <div className="grid grid-cols-2 m-12">
            <div className="flex justify-evenly">
              <img src={truck} alt="" className="w-8 h-8" />
              Track your driver
            </div>
            <div>
              One of our friendly Food Rescuers will retrieve and deliver your
              food donation.
            </div>
          </div>
          <div className="grid grid-cols-2 m-12">
            <div className="flex justify-evenly">
              <img src={world} alt="" className="w-8 h-8" />
              See your impact
            </div>
            <div>
              Track the social and environmental impact of your food donations
              through your personalized dashboard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texto;
