import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { DashBoardContext } from "../hooks/DataContext";
import AddWidget from "./AddWidget";
import Widget from "./Widget";

function SectionalWidgets({ sectionName, sectinalWidgetsData, sectionId }) {
  const { sectionalWidgets, setSectionalWidgets } =
    useContext(DashBoardContext);
  const [isOpen, setIsOpen] = useState(false);
  async function delCategory() {
    const isOk = confirm("Are you sure? this can't be undone!!");
    if (!isOk) return;

    const otherCategories = sectionalWidgets.filter((ele) => {
      return ele.sectionId !== sectionId + "";
    });

    console.log(otherCategories);
    const loading = toast.loading("Deleting Category");
    await axios
      .post("http://localhost:3000/api/addcategory", [...otherCategories])
      .then(() => {
        setSectionalWidgets([...otherCategories]);

        toast.dismiss(loading);
        toast.success("Deleted Sucessfully");
      })
      .catch((e) => {
        toast.error("Ahhh.. shit here we go again Kindly Refresh", {
          icon: "🔄️",
        });
      });
  }
  return (
    <div className="flex flex-col font-dm overflow-x-scroll no-scrollbar">
      <div className="font-extrabold flex items-center ">
        <p>{sectionName}</p>
        <button
          className="bg-red-600 p-[2px] flex items-center text-white ml-2 mb-2"
          onClick={() => {
            delCategory();
          }}
        >
          X
        </button>
      </div>
      <div className="flex w-full xmd:flex-row flex-col gap-7 xmd:w-fit">
        {sectinalWidgetsData.map((ele, index) => {
          return <Widget {...ele} key={index} sectionId={sectionId} />;
        })}
        <div className="flex">
          <div className="h-[150px] xmd:w-[350px] bg-white flex justify-center items-center rounded-[10px] w-full">
            <button
              className="bg-white h-[40px] w-[120px] rounded-[5px] border-gray-500 border  shadow-gray-500"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add widget +
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <AddWidget
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          sectionId={sectionId}
        />
      )}
    </div>
  );
}

export default SectionalWidgets;
