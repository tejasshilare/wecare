import React from "react";
import Abstract from "../components/Abstract";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import MiniDashboard from "../components/MiniDashboard";
const about = () => {
  return (
    <>
      <MiniDashboard />
      <Abstract />
      <AboutUs />
      <Gallery />
      <Team />
    </>
  );
};

export default about;
