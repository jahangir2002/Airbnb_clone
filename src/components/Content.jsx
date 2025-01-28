import React, { useState } from "react";
import Filter from "./Filter";
import ContentData from "../data/ContentData";

const Content = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg((prevImage) =>
      prevImage === 0 ? ContentData.length - 1 : prevImage - 1
    );
  };

  const nextImg = () => {
    setCurrentImg((prevImage) =>
      prevImage === ContentData.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className="relative size-full py-5 px-4 xl:px-20 md:px-10 sm:px-2">
      <Filter />
      <div className="flex gap-5">
        {ContentData.map((data, index) => (
          <div key={data.id} className={`card col ${index === currentImg ? 'active' : ''}`}>
            <div className="carousel flex">
              <button onClick={prevImg}>Prev</button>
              <img src={data.images[currentImg]} alt="multi" width={200} />
              <button onClick={nextImg}>Next</button>
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
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
