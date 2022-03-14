import PropTypes from "prop-types";
import React from "react";
import { matchingStringHelper } from "../utils/matchingStringHelper";

export const MatchWord = ({ status, label }) => {
  return (
    (label === "error" || label === "success") && (
      <span dangerouslySetInnerHTML={matchingStringHelper(status)} />
    )
  );
};

MatchWord.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
