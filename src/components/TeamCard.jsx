import React from "react";

const TeamCard = () => {
  return (
    <div class="md:w-1/2 md:mb-0 mb-2 p-5">
      <div class="py-12 h-full text-center border-grey-200 border-2 rounded-lg hover:bg-slate-200 hover:scale-105 hover:delay-80">
        <img
          alt="testimonial"
          class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src="https://dummyimage.com/302x302"
        />
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
          Name
        </h2>
        <p class="text-gray-500">Senior Product Designer</p>
        <span class="inline-block h-0.5 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
        <p class="leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rem odio
          cumque praesentium quod, porro, totam, odit nobis incidunt ducimus
          accusamus voluptatem? Est provident excepturi numquam, ex itaque
          deserunt iste.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
