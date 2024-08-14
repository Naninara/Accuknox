"use client";
import React, { useEffect, useState } from "react";

const { createContext } = require("react");

export const DashBoardContext = createContext();

function DataContext({ children }) {
  const [sectionalWidgets, setSectionalWidgets] = useState(null);
  async function getJsonData() {
    const data = await fetch("/Widgets.json");
    try {
      const JsonData = await data.json();

      setSectionalWidgets(JsonData);
    } catch (e) {
      console.log(e);
      setSectionalWidgets([]);
    }
  }

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <DashBoardContext.Provider
      value={{ sectionalWidgets, setSectionalWidgets }}
    >
      {children}
    </DashBoardContext.Provider>
  );
}

export default DataContext;
