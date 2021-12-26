import React from "react";
import "./App.css";
import rawdata from "./data";
import Table from "./components/Table";

function App() {
  //console.log(rawdata[0].kids.has_relatives?.records);

  return (
    <div className="App">
      <h1>Heirarchy Table</h1>
      <Table data={rawdata} />
    </div>
  );
}

export default App;
