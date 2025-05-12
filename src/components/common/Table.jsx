import React from "react";

function Table({ columns, data }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ml-5">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="py-2 px-4">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, idx) => (
          <tr key={idx} className="border-b border-gray-400 dark:bg-gray-800">
            {columns.map((col, i) => (
              <td key={i} className="py-2 px-4">
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
