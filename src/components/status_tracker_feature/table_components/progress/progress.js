import PropTypes from "prop-types";
import React from "react";
import { convertBytes } from "../../../../utils/convertBytes";

const Progress = ({ processed, total }) => {
  return (
    <>
      {convertBytes(processed)}/{convertBytes(total)}
    </>
  );
};

export default Progress;
Progress.propTypes = {
  processed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  processed: 0,
  total: 0,
};
