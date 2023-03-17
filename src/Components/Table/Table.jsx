import React from "react";
import "./Table.css";

function Table({ columns, rows, className }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              {Object.keys(row).map((key) => (
                <td>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
