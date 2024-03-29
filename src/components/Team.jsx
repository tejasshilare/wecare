import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-16 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Team
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="container p-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <TeamCard
              name="Sanskriti Satpute"
              designation="Full Stack Developer"
              intro="Sanskriti Satpute, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
            />
            <TeamCard
              name="Sudhanshu Sonare"
              designation="Full Stack Developer"
              intro="Sudhanshu Sonare, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
            />
            <TeamCard
              name="Tejas Mete"
              designation="Full Stack Developer"
              intro="Tejas Mete, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
            />
            <TeamCard
              name="Tejas Shilare"
              designation="Full Stack Developer"
              intro="Tejas Shilare, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
