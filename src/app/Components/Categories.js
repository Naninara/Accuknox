"use client";
import React, { useContext, useEffect, useState } from "react";
import { DashBoardContext } from "../hooks/DataContext";
import SectionalWidgets from "./SectionalWidgets";

function Categories() {
  const { sectionalWidgets } = useContext(DashBoardContext);

  if (!sectionalWidgets) {
    return (
      <div className="h-[60vh] w-full flex justify-center items-center flex-col gap-11 font-sans font-bold">
        <div className="bg-black w-[100px] h-[100px] animate-ping rounded-full"></div>
        <p>Please hold on Loading...</p>
      </div>
    );
  }
  if (sectionalWidgets && sectionalWidgets.length == 0)
    return <div className="text-center font-dm font-bold">Nothing Found</div>;

  const [dummyWidgetsData, setDummyWidgetsData] = useState(sectionalWidgets);
  useEffect(() => {
    setDummyWidgetsData(sectionalWidgets);
  }, [sectionalWidgets]);

  function handleChange(e) {
    const searchResults = sectionalWidgets.filter((ele) => {
      return ele.sectionName.toLowerCase().includes(e.target.value + "");
    });
    setDummyWidgetsData(searchResults);
  }
  return (
    <div className="p-[25px] flex flex-col gap-4 ">
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search Category"
          className="pl-[10px] h-[40px] rounded-[5px]"
          onChange={(e) => {
            console.log(e);
            handleChange(e);
          }}
        />
      </div>
      {dummyWidgetsData.map((ele) => {
        return <SectionalWidgets key={ele.sectionId} {...ele} />;
      })}
    </div>
  );
}

export default Categories;
