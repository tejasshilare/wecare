import React from "react";

const GalleryCard = () => {
  return (
    <div className="md:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8MHwwfHx8MA%3D%3D"
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            Name
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Name
          </h1>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit
            consequuntur illo quibusdam itaque saepe nulla est quam, magnam
            quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
