import React from "react";
import "./App.css";
import rawdata from "./data";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <h1 className="header">Heirarchy Table</h1>
      <Table data={rawdata} />
    </div>
  );
}

export default App;
