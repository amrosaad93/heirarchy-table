import React, { useState } from "react";
import Table from "./Table";

type TableEntry = {
  [key: string]: string;
};

interface TableRowProps {
  content: TableEntry;
  kids?: any;
  deleteCallback: (id_type: string, id_number: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ content, kids, deleteCallback }): JSX.Element => {
  console.log(kids);
  const [isExpanded, setIsExpanded] = useState(false);

  const childKey = kids && Object.keys(kids).length > 0 ? Object.keys(kids)[0] : "none";

  return (
    <>
      <tr>
        <td>{childKey !== "none" && <h1 onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "-" : "+"}</h1>}</td>
        {Object.keys(content).map((entry, index) => (
          <td key={index}>{content[entry]}</td>
        ))}
        <td
          onClick={() => {
            setIsExpanded(false);
            deleteCallback(Object.keys(content)[0], content[Object.keys(content)[0]]);
          }}
        >
          <p className="delete">Delete</p>
        </td>
      </tr>
      {childKey !== "none" && isExpanded && (
        <tr>
          <td colSpan={8}>
            <div className="kids-container">{<Table data={kids[childKey].records} />}</div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
