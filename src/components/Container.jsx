import React, { useState } from "react";
import { LuGlobe } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Container = () => {
  const [activeTab, setActiveTab] = useState("Stays");

  return (
    <div className="max-w-[2520px] mx-auto px-4 xl:px-20 md:px-10 sm:px-2">
      {/* Navbar */}
      <div className="flex justify-between items-center py-4">
        <div className="w-[10vw]">
          <img src="./Airbnb-Logo.wine.png" alt="Airbnb Logo" />
        </div>
        <div className="flex gap-x-10 text-1xl">
          <h2
            className={`cursor-pointer hover:bg-gray-100 p-2 rounded-full ${
              activeTab === "Stays" ? "font-bold " : ""
            }`}
            onClick={() => setActiveTab("Stays")}
          >
            Stays
          </h2>
          <h2
            className={`cursor-pointer hover:bg-gray-100 p-2 rounded-full ${
              activeTab === "Experience" ? "font-bold " : ""
            }`}
            onClick={() => setActiveTab("Experience")}
          >
            Experience
          </h2>
        </div>
        <div className="flex text-[16px] items-center gap-x-4 cursor-pointer">
          <h2 className="hover:bg-gray-100 p-3 rounded-full">Airbnb your home</h2>
          <LuGlobe />
          <div className="login flex gap-x-4 text-4xl border-2 border-gray-200 p-2 rounded-full">
            <RxHamburgerMenu className="hover:bg-gray-100 p-3 rounded-full" />
            <MdAccountCircle />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between rounded-full shadow-md bg-white max-w-4xl mx-auto py-2 px-4">
        {/* Search Sections */}
        <div className="flex items-center flex-grow divide-x divide-gray-300">
          {/* Where Section */}
          <div className="flex flex-col px-4">
            <span className="text-xs font-bold text-gray-600">Where</span>
            <input
              type="text"
              placeholder="Search destinations"
              className="text-sm text-gray-400 outline-none"
            />
          </div>

          {/* Conditional Sections */}
          {activeTab === "Stays" && (
            <>
              {/* Check-in Section */}
              <div className="flex flex-col px-4">
                <span className="text-xs font-bold text-gray-600">Check in</span>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm text-gray-400 outline-none"
                />
              </div>

              {/* Check-out Section */}
              <div className="flex flex-col px-4">
                <span className="text-xs font-bold text-gray-600">
                  Check out
                </span>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm text-gray-400 outline-none"
                />
              </div>
            </>
          )}

          {activeTab === "Experience" && (
            <>
              {/* Date Section */}
              <div className="flex flex-col px-4">
                <span className="text-xs font-bold text-gray-600">Date</span>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm text-gray-400 outline-none"
                />
              </div>
            </>
          )}

          {/* Who Section */}
          <div className="flex flex-col px-4">
            <span className="text-xs font-bold text-gray-600">Who</span>
            <input
              type="text"
              placeholder="Add guests"
              className="text-sm text-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-center justify-center bg-red-500 text-white rounded-full p-2 cursor-pointer">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Container;
