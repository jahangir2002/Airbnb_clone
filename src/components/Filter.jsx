import React, { useState } from 'react';
import carouselData from '../data/CarouselData';

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
    <div className='relative w-full'>
      <div className='flex justify-between items-center'>
        <button onClick={handlePrevClick} disabled={isPrevDisabled}>&lt;</button> {/* Previous Button */}
        <div className='flex gap-4 overflow-hidden w-full'>
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
        <button onClick={handleNextClick} disabled={isNextDisabled}>&gt;</button> {/* Next Button */}
      </div>
    </div>
  );
};

export default Filter;
