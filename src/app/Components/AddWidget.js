"use client";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { DashBoardContext } from "../hooks/DataContext";

function AddWidget({ setIsOpen, sectionId }) {
  const { sectionalWidgets, setSectionalWidgets } =
    useContext(DashBoardContext);
  const sectionRef = useRef();
  const subSectionRef = useRef();
  const [error, setError] = useState(false);
  async function addWidget() {
    if (sectionRef.current.value == "" || subSectionRef.current.value == "") {
      setError(true);
      return;
    }
    const loading = toast.loading("Addsing Widget");

    const insertCatgory = sectionalWidgets.find((ele) => {
      return ele.sectionId == sectionId;
    });
    insertCatgory.sectinalWidgetsData.push({
      name: sectionRef.current.value,
      text: subSectionRef.current.value,
      id: (Math.random() + 1).toString(36).substring(7),
    });

    await axios
      .post("http://localhost:3000/api/addcategory", [...sectionalWidgets])
      .then(() => {
        setSectionalWidgets([...sectionalWidgets]);
        setIsOpen(false);
        toast.dismiss(loading);
        toast.success("Added Sucessfully");
      })
      .catch((e) => {
        toast.error("Ahhh.. shit here we go again Kindly Refresh", {
          icon: "🔄️",
        });
      });
  }
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 h-screen w-full backdrop-blur-sm">
      <div className="bg-white h-auto w-auto flex flex-col p-[2%] gap-[20px] rounded-md shadow-md">
        <div className="border-b-2 p-[2%] flex justify-between">
          <p className="font-extrabold text-center">Add New Widget</p>
          <button
            className="bg-red-600 text-white w-[60px] h-[30px] rounded-md"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
        </div>
        <input
          placeholder="Enter Section Name"
          className="h-[40px] w-[250px] rounded-sm border-2"
          ref={sectionRef}
        />

        {error && (
          <p className="text-red-600 font-bold text-[13px]">
            Section Name must be filled
          </p>
        )}
        <input
          placeholder="Enter Sub Section Name"
          className="h-[40px] w-[250px] rounded-sm border-2"
          ref={subSectionRef}
        />

        {error && (
          <p className="text-red-600 font-bold text-[13px]">
            Sub Section Name must be filled
          </p>
        )}
        <button
          className="w-full bg-green-600 text-white h-[35px] rounded-md"
          onClick={addWidget}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddWidget;
