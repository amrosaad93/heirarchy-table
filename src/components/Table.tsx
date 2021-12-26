import React, { useState } from "react";
import TableRow from "./TableRow";

interface TableProps {
  data: any;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [usedData, setUsedData] = useState<any>(data);

  const handleDelete = (id_type: string, id_number: string) => {
    // TODO: code to handle removing the entry permenantly from the backend

    // Removing the entry from the view layer
    setUsedData(usedData.filter((entry: any) => entry.data[id_type] != id_number));
  };

  return (
    <>
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
          {usedData.map((row: any, index: number) => {
            if (Object.keys(row.kids).length > 0) {
              return <TableRow key={index} content={row.data} kids={row.kids} deleteCallback={handleDelete} />;
            }
            return <TableRow key={index} content={row.data} deleteCallback={handleDelete} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
