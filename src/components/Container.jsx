import React, { useState } from "react";
import { LuGlobe } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Autocomplete, TextField } from "@mui/material";

const Container = () => {
  const [activeTab, setActiveTab] = useState("Stays");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchDestination, setSearchDestination] = useState("");

  const suggestedDestinations = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Houston" },
    { id: 5, name: "Phoenix" },
    { id: 6, name: "Philadelphia" },
    { id: 7, name: "San Antonio" },
    { id: 8, name: "San Diego" },
    { id: 9, name: "Dallas" },
  ];

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
          <h2 className="hover:bg-gray-100 p-3 rounded-full">
            Airbnb your home
          </h2>
          <LuGlobe />
          <div className="login flex gap-x-4 text-4xl border-2 border-gray-200 p-2 rounded-full">
            <RxHamburgerMenu className="hover:bg-gray-100 p-3 rounded-full" />
            <MdAccountCircle />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between rounded-full shadow-md bg-white max-w-4xl mx-auto ">
        {/* Search Sections */}
        <div className="flex items-center flex-grow divide-x divide-gray-300 cursor-pointer">
          {/* Where Section */}
          <div className="flex flex-col hover:bg-gray-300 px-10 hover:rounded-full ">
            <span className="text-xs font-bold text-gray-600">Where</span>
            <Autocomplete
              id="where-autocomplete"
              options={suggestedDestinations}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="!w-40"
                  variant="outlined"
                  placeholder="Search destinations"
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  onClick={() => setShowDropdown(!showDropdown)}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              )}
              open={showDropdown}
              onClose={() => setShowDropdown(false)}
              onOpen={() => setShowDropdown(true)}
            />
          </div>

          {/* Conditional Sections */}
          {activeTab === "Stays" && (
            <>
              {/* Check-in Section */}
              <div className="flex flex-col px-4">
                <span className="text-xs font-bold text-gray-600">
                  Check in
                </span>
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
        <div className="flex items-center justify-center bg-red-500 text-white rounded-full p-3 mr-2 cursor-pointer">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Container;
