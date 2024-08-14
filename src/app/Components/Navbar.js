"use client";
import axios from "axios";
import React, { useContext, useState } from "react";
import { DashBoardContext } from "../hooks/DataContext";
import AddCategory from "./AddCategory";

function Navbar() {
  const { sectionalWidgets } = useContext(DashBoardContext);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#f0f5fa] flex p-[2%] justify-between items-center font-dm sticky
     top-0 shadow-sm relative transition-all duration-500"
    >
      <div className="font-extrabold ">
        <p>CNAPP Dashboard</p>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-white h-[40px] w-[120px] rounded-[5px] shadow  shadow-gray-500"
          onClick={() => {
            setCategoryOpen(!isCategoryOpen);
          }}
        >
          Add widget +
        </button>
        <button className="bg-white h-[40px] w-[120px] rounded-[5px] shadow  shadow-gray-500">
          Personalize ✏️
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
    </div>
  );
}

export default Navbar;
