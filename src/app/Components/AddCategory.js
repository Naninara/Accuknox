import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { DashBoardContext } from "../hooks/DataContext";

function AddCategory({ isCategoryOpen, setCategoryOpen }) {
  const { sectionalWidgets, setSectionalWidgets } =
    useContext(DashBoardContext);
  const categoryName = useRef();
  const [error, setError] = useState(false);
  async function addCategory() {
    if (!categoryName || categoryName.current.value == "") {
      setError(true);
      return;
    }
    const loading = toast.loading("Adding Category");
    const newCatrgories = [
      ...sectionalWidgets,
      {
        sectionName: categoryName.current.value,
        sectionId: (Math.random() + 1).toString(36).substring(7),
        sectinalWidgetsData: [],
      },
    ];
    await axios
      .post("http://localhost:3000/api/addcategory", [...newCatrgories])
      .then(() => {
        setSectionalWidgets([...newCatrgories]);
        setCategoryOpen(!isCategoryOpen);
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
    <div className="bg-white h-auto w-auto flex flex-col p-[2%] gap-[20px] rounded-md shadow-md">
      <div className="border-b-2 p-[2%] flex justify-between">
        <p className="font-extrabold text-center">Add New Category</p>
        <button
          className="bg-red-600 text-white w-[60px] h-[30px] rounded-md"
          onClick={() => {
            setCategoryOpen(!isCategoryOpen);
          }}
        >
          close
        </button>
      </div>
      <input
        placeholder="Enter Category Name"
        className="h-[40px] w-[250px] rounded-sm border-2"
        ref={categoryName}
      />
      {error && (
        <p className="text-red-600 font-bold text-[13px]">
          Category Name must be filled
        </p>
      )}
      <button
        className="w-full bg-green-600 text-white h-[35px] rounded-md"
        onClick={addCategory}
      >
        Add Category
      </button>
    </div>
  );
}

export default AddCategory;
