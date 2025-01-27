import React, { useState } from 'react';
import carouselData from '../data/CarouselData';

const Filter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Number of items to show at once

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative w-full'>
      <div className='flex justify-between items-center'>
        <button onClick={handlePrevClick}>&lt;</button> {/* Previous Button */}
        <div className='flex gap-4 overflow-hidden w-[50%]'>
          {carouselData.slice(currentIndex, currentIndex + itemsToShow).map((carousel) => (
            <div key={carousel.id} className='flex-shrink-0'>
              <img
                src={carousel.img}
                alt={`carousel ${carousel.id}`}
                width={100}
                height={100}
              />
              <div>{carousel.title || ''}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNextClick}>&gt;</button> {/* Next Button */}
      </div>
    </div>
  );
};

export default Filter;
