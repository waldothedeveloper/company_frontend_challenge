import PropTypes from "prop-types";
import React from "react";
import { TimeRemaining } from "../time/timeRemaining";

const Inactive = ({ label, remaining }) => {
  return (
    label === "inactive" && (
      <span className="flex flex-col">
        <span className="font-normal text-slate-500">{label}</span>
        <span className="font-normal text-slate-500">Not Started</span>
        <TimeRemaining miliSeconds={remaining} />
      </span>
    )
  );
};

export default Inactive;

Inactive.propTypes = {
  label: PropTypes.string.isRequired,
  remaining: PropTypes.number,
};
