import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
          Status
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
        >
          Progress
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
        >
          User
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Request Date
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
