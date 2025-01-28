import React, { useState } from "react";
import Filter from "./Filter";
import ContentData from "../data/ContentData";

const Content = () => {
  const [currentImgs, setCurrentImgs] = useState(Array(ContentData.length).fill(0));

  const prevImg = (index) => {
    setCurrentImgs((prevImages) =>
      prevImages.map((imgIndex, i) => 
        i === index ? (imgIndex === 0 ? ContentData[index].images.length - 1 : imgIndex - 1) : imgIndex
      )
    );
  };

  const nextImg = (index) => {
    setCurrentImgs((prevImages) =>
      prevImages.map((imgIndex, i) => 
        i === index ? (imgIndex === ContentData[index].images.length - 1 ? 0 : imgIndex + 1) : imgIndex
      )
    );
  };

  return (
    <div className="relative mt-5 max-w-[2520px] mx-auto px-4 xl:px-20 md:px-10 sm:px-2">
      <Filter />
      <div className="flex flex-wrap justify-between mt-2">
        {ContentData.map((data, index) => (
          <div key={data.id} className="card relative lg:mb-10">
            <div className="carousel relative flex items-center justify-center">
              <button 
                onClick={() => prevImg(index)} 
                className="absolute left-0 bg-white !m-2 text-white text-2xl px-2.5 py-1 !rounded-full"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Previous image"
              >
                &lt;
              </button>
              <img src={data.images[currentImgs[index]]} alt="multi" width={250} />
              <button 
                onClick={() => nextImg(index)} 
                className="absolute right-0 bg-white !m-2 text-white text-2xl px-2.5 py-1 !rounded-full"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
            <p className="text-lg font-bold">{data.title}</p>
            <p>{data.builtYear}</p>
            <p>{data.dates}</p>
            <p>{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
