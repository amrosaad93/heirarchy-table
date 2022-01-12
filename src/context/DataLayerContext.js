import React, { useState, createContext } from "react";
import rawdata from "../data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [rootData, setRootData] = useState(rawdata);

  return <DataContext.Provider value={[rootData, setRootData]}>{children}</DataContext.Provider>;
};
