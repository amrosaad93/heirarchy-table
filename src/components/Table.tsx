import React from "react";
import TableRow from "./TableRow";

interface TableProps {
  data: any;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      {data.map((row: any) => {
        if (Object.keys(row.kids).length > 0) {
          return <TableRow key={row.data["Identification number"]} content={row.data} kids={row.kids} />;
        }
        return <TableRow key={row.data["Identification number"]} content={row.data} />;
      })}
    </div>
  );
};

export default Table;
