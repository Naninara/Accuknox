"use client";
import React from "react";

function Navbar() {
  return (
    <div
      className="w-full bg-[#f0f5fa] flex p-[2%] justify-between items-center font-dm sticky
     top-0 shadow-sm"
    >
      <div className="font-extrabold ">
        <p>CNAPP Dashboard</p>
      </div>
      <div className="flex gap-5">
        <button className="bg-white h-[40px] w-[120px] rounded-[5px] shadow  shadow-gray-500">
          Add widget +
        </button>
        <input type="text" placeholder="Search Widgets" className="pl-[5px]" />
      </div>
    </div>
  );
}

export default Navbar;
