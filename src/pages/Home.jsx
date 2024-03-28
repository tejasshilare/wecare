import React from "react";
import BannerSection from "../components/BannerSection";
import Texto from "../components/Texto";
import CommunitySection from "../components/CommunitySection";
import { createBrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BannerSection />
      <Texto />
      <CommunitySection />
    </>
  );
};

export default Home;
