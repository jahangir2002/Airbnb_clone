import React from "react";
import Filter from "./Filter";
import ContentData from "../data/ContentData";

const Content = () => {
  return (
    <div className="relative size-full py-5 px-4 xl:px-20 md:px-10 sm:px-2">
      <Filter />
      <div className="">
        {ContentData.map((data)=>(
            <div key={data.id} >
                <img src={data.images[0]} alt="multi" />
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
