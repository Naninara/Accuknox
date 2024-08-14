import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { DashBoardContext } from "../hooks/DataContext";

function Widget({ name, text, sectionId, id }) {
  const { sectionalWidgets, setSectionalWidgets } =
    useContext(DashBoardContext);
  async function delWidget() {
    const section = sectionalWidgets.find((ele) => {
      return (ele.id = sectionId);
    });
    const otherWidgets = section.sectinalWidgetsData.filter((ele) => {
      return ele.id != id;
    });
    const loading = toast.loading("Adding Widget");
    section.sectinalWidgetsData = otherWidgets;
    await axios
      .post("http://localhost:3000/api/addcategory", [...sectionalWidgets])
      .then(() => {
        setSectionalWidgets([...sectionalWidgets]);
        toast.dismiss(loading);
        toast.error("Deleted Sucessfully", { icon: "🗑️" });
      })
      .catch((e) => {
        console.log(e);
        toast.dismiss(loading);
        toast.error("Ahhh.. shit here we go again Kindly Refresh", {
          icon: "🔄️",
        });
      });
  }
  return (
    <div className="h-[150px] w-full xmd:w-[350px] bg-white p-[15px] font-dm shadow-gray-500 rounded-[10px] ">
      <div className="h-1/5 w-full border-b-2 flex justify-between">
        <p className="font-extrabold">{name}</p>
        <button
          className="bg-red-600 p-[5px] flex items-center text-white mb-1"
          onClick={() => {
            delWidget();
          }}
        >
          X
        </button>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Widget;
