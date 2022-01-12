import React from "react";
import "./App.css";
import rawdata from "./data";
import Table from "./components/Table";
import { DataProvider } from "./context/DataLayerContext";

function App() {
  return (
    <div className="App">
      <h1 className="header">Heirarchy Table</h1>
      <DataProvider>
        <Table />
      </DataProvider>
    </div>
  );
}

export default App;
