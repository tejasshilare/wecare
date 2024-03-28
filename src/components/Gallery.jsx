import React from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Gallery
            </h1>
            <p className="md:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              porro laboriosam assumenda corrupti quasi eligendi, dicta illo
              praesentium quaerat facilis!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
