import React from "react";
import Widget from "./Widget";

function SectionalWidgets({ sectionName, sectinalWidgetsData, sectionId }) {
  return (
    <div className="flex flex-col font-dm overflow-x-scroll no-scrollbar">
      <div className="font-extrabold">
        <p>{sectionName}</p>
      </div>
      <div className="flex w-full xmd:flex-row flex-col gap-7 xmd:w-fit">
        {sectinalWidgetsData.map((ele, index) => {
          return <Widget {...ele} key={index} />;
        })}
        <div className="flex">
          <div className="h-[150px] xmd:w-[350px] bg-white flex justify-center items-center rounded-[10px] w-full">
            <button className="bg-white h-[40px] w-[120px] rounded-[5px] border-gray-500 border  shadow-gray-500">
              Add widget +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionalWidgets;
