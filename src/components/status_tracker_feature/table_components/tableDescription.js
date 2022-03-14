import PropTypes from "prop-types";
import React from "react";
import TableSelect from "./tableSelect";
//
const TableDescription = ({ handleAPIEndPoints, endpoints }) => {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-gray-900">Globus</h1>
        <p className="mt-2 text-sm text-gray-700">
          Status of all files being transferred.
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <TableSelect
          handleAPIEndPoints={handleAPIEndPoints}
          endpoints={endpoints}
        />
      </div>
    </div>
  );
};

export default TableDescription;
TableDescription.propTypes = {
  handleAPIEndPoints: PropTypes.func.isRequired,
  endpoints: PropTypes.object.isRequired,
};
