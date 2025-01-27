import React, { useState } from 'react';
import carouselData from '../data/CarouselData';
import { FiFilter } from "react-icons/fi";
import { Toggle } from 'rsuite';

const Filter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 7; // Number of items to show at once

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - itemsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= carouselData.length - itemsToShow ? prevIndex : prevIndex + itemsToShow
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= carouselData.length - itemsToShow;

  return (
    <div className='relative w-full flex justify-between'>
        <div className='w-[65%]'>
            <div className='flex justify-between items-center'>
        <button className='arrow !border-1 border-gray-400 hover:!shadow-md shadow-gray-400 px-2.5 py-1 !rounded-full' onClick={handlePrevClick} disabled={isPrevDisabled}>&lt;</button> {/* Previous Button */}
        <div className='flex justify-evenly overflow-hidden w-full'>
          {carouselData.slice(currentIndex, currentIndex + itemsToShow).map((carousel) => (
            <div key={carousel.id} className='flex-shrink-0'>
              <img
                src={carousel.img}
                alt={`carousel ${carousel.id}`}
                width={30}
                height={30}
              />
              <div>{carousel.title || ''}</div>
            </div>
          ))}
        </div>
        <button className='arrow !border-1 border-gray-400 hover:!shadow-md shadow-gray-400 px-2.5 py-1 !rounded-full' onClick={handleNextClick} disabled={isNextDisabled}>&gt;</button> {/* Next Button */}
      </div>
        </div>

        <div className=' flex gap-5'>
           <button className='!border-1 border-gray-300 px-4 py-3 !rounded-md flex items-center gap-2 hover:bg-gray-200 hover:border-gray-500'>
           <FiFilter />
            Filters
           </button>
           <button className='!border-1 border-gray-300 px-4 py-3 !rounded-md flex items-center gap-2 hover:bg-gray-200 hover:border-gray-500'> Display total before taxes
           <Toggle defaultChecked color="red" />
           </button>

        </div>
      
    </div>
  );
};

export default Filter;
