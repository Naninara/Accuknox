"use client";
import axios from "axios";
import React, { useState } from "react";

import AddCategory from "./AddCategory";
import Personalization from "./Personalization";

function Navbar() {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const [isPersonalizationOpen, setIsPersonalizationOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#f0f5fa] flex p-[2%] justify-between items-center font-dm sticky
     top-0 shadow-sm  transition-all duration-500"
    >
      <div className="font-extrabold ">
        <p>CNAPP Dashboard</p>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-white h-[40px] w-[50px] md:h-[40px] md:w-[120px] rounded-[5px] shadow  shadow-gray-500"
          onClick={() => {
            setCategoryOpen(!isCategoryOpen);
          }}
        >
          <p className="hidden md:block">Add widget +</p>
          <p className="block md:hidden">+</p>
        </button>
        <button
          className="bg-white h-[40px] w-[50px] md:h-[40px] md:w-[120px] rounded-[5px] shadow  shadow-gray-500"
          onClick={() => {
            setIsPersonalizationOpen(true);
          }}
        >
          <p className="hidden md:block">Personalize ✏️</p>
          <p className="block md:hidden">✏️</p>
        </button>
      </div>
      {isCategoryOpen && (
        <div className="absolute top-0 left-0 flex  h-[100vh] w-full justify-center items-center backdrop-blur-sm ">
          <AddCategory
            setCategoryOpen={setCategoryOpen}
            isCategoryOpen={isCategoryOpen}
          />
        </div>
      )}
      {isPersonalizationOpen && (
        <div className="absolute top-0 right-0 h-[100vh] w-[100vw] md:w-[50vw] bg-white">
          <Personalization
            setIsPersonalizationOpen={setIsPersonalizationOpen}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
