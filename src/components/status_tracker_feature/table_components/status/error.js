import React from "react";
import { displayLocaleDates } from "../../../../utils/displayLocaleDates";
import propTypes from "prop-types";

const Error = ({ label, end_date }) => {
  return (
    label === "error" && (
      <span className="font-normal text-slate-700">
        Halted: {displayLocaleDates(end_date)}
      </span>
    )
  );
};

export default Error;
Error.propTypes = {
  label: propTypes.string.isRequired,
  end_date: propTypes.string,
};
