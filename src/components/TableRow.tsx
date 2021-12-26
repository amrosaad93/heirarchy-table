import React from "react";
import Table from "./Table";

type TableEntry = {
  [key: string]: string;
};

type TableKids = {
  [key: string]: {
    records: Array<any> | undefined;
  };
};

interface TableRowProps {
  content: any;
  kids?: any;
}

const TableRow: React.FC<TableRowProps> = ({ content, kids }): JSX.Element => {
  const childKey = kids && Object.keys(kids).length > 0 ? Object.keys(kids)[0] : "none";
  console.log(childKey !== "none" ? kids[childKey].records : "No Child here");

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(content).map((entry, index) => (
              <th key={index}>{entry}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(content).map((entry, index) => (
              <td key={index}>{content[entry]}</td>
            ))}
          </tr>
          <div className="kids-container">{childKey !== "none" && <Table data={kids[childKey].records} />}</div>
        </tbody>
      </table>
    </div>
  );
};

export default TableRow;
