import PropTypes from "prop-types";
import React from "react";
import { displayLocaleDates } from "../../../../utils/displayLocaleDates";

const Success = ({ label, end_date }) => {
  return (
    label === "success" && (
      <span className="font-normal text-slate-700">
        Completed: {displayLocaleDates(end_date)}
      </span>
    )
  );
};

export default Success;

Success.propTypes = {
  label: PropTypes.string.isRequired,
  end_date: PropTypes.string,
};
