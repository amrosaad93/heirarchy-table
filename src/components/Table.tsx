import React, { useState, useContext } from "react";
import TableRow from "./TableRow";
import { DataContext } from "../context/DataLayerContext";
interface TableItem {
  data: { [key: string]: string };
  kids: Object;
}

interface TableProps {
  data?: TableItem[];
}

const Table: React.FC<TableProps> = ({ data }): JSX.Element => {
  // This variable holds the current state of the data which controls the view layer
  // The state is edited when an entry is deleted.

  const [rootData, setRootData] = useContext(DataContext);

  const [usedData, setUsedData] = useState<TableItem[]>(data ? data : rootData);

  console.log(rootData);

  const handleDelete = (id_type: string, id_number: string) => {
    // TODO: code to handle removing the entry permenantly from the backend

    console.log(id_number, id_type);

    // Removing the entry from the view layer
    if (!data) {
      setUsedData(usedData.filter((entry: TableItem) => entry.data[id_type] != id_number));
      setRootData(rootData.filter((entry: TableItem) => entry.data[id_type] != id_number));
    }
    removeData(rootData, id_type);
    // setRootData(rootData.filter((entry:TableItem) => ))
  };

  const removeData = (dataArray: any, id_type: string) => {
    console.log(dataArray.kids);
  };

  if (usedData.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {Object.keys(usedData[0].data).map((entry, index) => (
              <th key={index}>{entry}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usedData.map((row: TableItem, index: number) => {
            if (Object.keys(row.kids).length > 0) {
              return <TableRow key={index} content={row.data} kids={row.kids} deleteCallback={handleDelete} />;
            }
            return <TableRow key={index} content={row.data} deleteCallback={handleDelete} />;
          })}
        </tbody>
      </table>
    );
  } else {
    return <div style={{ display: "none" }}></div>;
  }
};

export default Table;
