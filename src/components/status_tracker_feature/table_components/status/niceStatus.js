import { MatchWord } from "../../../../utils/matchWord";
import PropTypes from "prop-types";
import React from "react";

const NiceStatus = ({ status, label }) => {
  return (
    <span className="pl-3 font-normal">
      {<MatchWord status={status} label={label} />}
    </span>
  );
};

export default NiceStatus;
NiceStatus.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
