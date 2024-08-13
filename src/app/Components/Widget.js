import React from "react";

function Widget({ name, text }) {
  return (
    <div className="h-[150px] w-full xmd:w-[350px] bg-white p-[15px] font-dm shadow-gray-500 rounded-[10px] ">
      <div className="h-1/5 w-full border-b-2 ">
        <p className="font-extrabold">{name}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Widget;
