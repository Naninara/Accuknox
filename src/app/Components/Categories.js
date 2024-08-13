import React from "react";
import SectionalWidgets from "./SectionalWidgets";
const sectionalWidgetJson = [
  {
    sectionName: "CSPM Executive DashBoard",
    sectionId: 1,
    sectinalWidgetsData: [
      {
        name: "Cloud Accounts",
        text: "Give Information about Cloud Accounts",
      },
      {
        name: "Cloud Risk",
        text: "Give Information about Cloud Risk",
      },
      {
        name: "Cloud Accounts",
        text: "Give Information about Cloud Accounts",
      },
      {
        name: "Cloud Risk",
        text: "Give Information about Cloud Risk",
      },
      {
        name: "Cloud Accounts",
        text: "Give Information about Cloud Accounts",
      },
      {
        name: "Cloud Risk",
        text: "Give Information about Cloud Risk",
      },
    ],
  },
  {
    sectionName: "CWPP Dashboard",
    sectionId: 2,
    sectinalWidgetsData: [
      {
        name: "Cloud Accounts",
        text: "Give Information about Cloud Accounts",
      },
      {
        name: "Cloud Risk",
        text: "Give Information about Cloud Risk",
      },
    ],
  },

  {
    sectionName: "Registry Scan",
    sectionId: 3,
    sectinalWidgetsData: [
      {
        name: "Cloud Accounts",
        text: "Give Information about Cloud Accounts",
      },
      {
        name: "Cloud Risk",
        text: "Give Information about Cloud Risk",
      },
    ],
  },
];

function Categories() {
  return (
    <div className="p-[25px] flex flex-col gap-4">
      {sectionalWidgetJson.map((ele) => {
        return <SectionalWidgets key={ele.sectionId} {...ele} />;
      })}
    </div>
  );
}

export default Categories;
