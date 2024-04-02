import React from "react";
import BannerSection from "../components/BannerSection";
import Texto from "../components/Texto";
import Faq from "../components/Faq";
import CommunitySection from "../components/CommunitySection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <Texto />
      <CommunitySection />
      <Faq />
    </>
  );
};

export default Home;
