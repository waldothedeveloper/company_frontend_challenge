import PropTypes from "prop-types";
import React from "react";
import { TimeRemaining } from "../time/timeRemaining";

const InProgress = ({ label, remaining }) => {
  return (
    label === "in progress" && (
      <span className="flex flex-col">
        <span className="font-normal text-slate-500">{label}</span>

        <TimeRemaining miliSeconds={remaining} />
      </span>
    )
  );
};

export default InProgress;
InProgress.propTypes = {
  label: PropTypes.string.isRequired,
  remaining: PropTypes.number,
};
