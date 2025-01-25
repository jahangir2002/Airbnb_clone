import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const PassengerCounter = ({ label, initialCount = 0, onChange }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-600">{label}</span>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          onClick={decrement}
        >
          <FaMinus />
        </button>
        <span className="px-4">{count}</span>
        <button
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          onClick={increment}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
