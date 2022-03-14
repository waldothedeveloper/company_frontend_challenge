import PropTpes from "prop-types";
import React from "react";
import { getTimeRemaining } from "../../../../utils/getTimeRemaining";
export const TimeRemaining = ({ miliSeconds }) => {
  return (
    <span className="font-normal text-slate-800">
      Time Remaining:{` `}
      {getTimeRemaining(miliSeconds).d
        ? `${getTimeRemaining(miliSeconds).d} days`
        : `${getTimeRemaining(miliSeconds).h}:${
            getTimeRemaining(miliSeconds).m
          }:${getTimeRemaining(miliSeconds).s}`}
    </span>
  );
};

TimeRemaining.propTypes = {
  miliSeconds: PropTpes.number.isRequired,
};
