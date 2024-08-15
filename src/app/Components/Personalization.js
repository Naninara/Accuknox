import React, { useContext, useEffect, useState } from "react";
import { DashBoardContext } from "../hooks/DataContext";

function Personalization({ setIsPersonalizationOpen }) {
  const { sectionalWidgets, setSectionalWidgets } =
    useContext(DashBoardContext);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (sectionalWidgets == null) setActiveSection(null);
    else {
      setActiveSection(sectionalWidgets[0]);
    }
  }, [sectionalWidgets]);

  function handleSubmit() {
    setSectionalWidgets([...sectionalWidgets]);
    setIsPersonalizationOpen(false);
  }
  function handleCheck(e, data) {
    if (!e.target.checked) {
      console.log(data);
      const checkedWidgets = activeSection.sectinalWidgetsData.filter((ele) => {
        return ele.id != data.id;
      });
      activeSection.sectinalWidgetsData = checkedWidgets;
    }
    if (e.target.checked) {
      const isExist = activeSection.sectinalWidgetsData.find(
        (ele) => (ele.id = data.id)
      );

      if (!isExist) {
        activeSection.sectinalWidgetsData = [
          ...activeSection.sectinalWidgetsData,
          data,
        ];
      }
    }
  }

  if (!sectionalWidgets) {
    return (
      <div className="flex flex-col">
        <div className="h-[50px] flex justify-between items-center px-[50px] bg-[#14147d] text-white font-dm">
          Nothing To show Here please add a widgets
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="h-[50px] flex justify-between items-center px-[50px] bg-[#14147d] text-white font-dm">
        <p>Personalize</p>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsPersonalizationOpen(false);
          }}
        >
          X
        </p>
      </div>
      <div className="flex px-[50px] py-[20px] flex-col gap-4">
        <p>Personalize your dashboard by adding the following widget</p>

        {sectionalWidgets && (
          <div
            className={`flex gap-5 font-dm font-bold overflow-x-scroll no-scrollbar`}
          >
            {sectionalWidgets.map((ele) => {
              return (
                <span
                  className={`border-b  border-b-gray-500 ${
                    activeSection && activeSection.sectionId == ele.sectionId
                      ? "text-blue-700"
                      : ""
                  }`}
                  onClick={() => setActiveSection(ele)}
                >
                  {ele.sectionName}
                </span>
              );
            })}
          </div>
        )}
      </div>
      {activeSection && (
        <div className="flex flex-col gap-2">
          {activeSection.sectinalWidgetsData.map((ele) => {
            return (
              <div className="flex p-[10px] mx-[50px] gap-2 border-2 border-gray-500 ">
                <input
                  type={"checkbox"}
                  defaultChecked={true}
                  onChange={(e) => {
                    handleCheck(e, ele);
                  }}
                />
                <p>{ele.name}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className="absolute bottom-0 right-0 gap-4 flex mr-10">
        <button
          className="text-black border-gray-500 border-2 p-[10px] rounded-md"
          onClick={() => setIsPersonalizationOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-[#14147d] text-white p-[10px] rounded-md"
          onClick={() => handleSubmit()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Personalization;
