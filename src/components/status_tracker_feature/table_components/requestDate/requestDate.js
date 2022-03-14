import PropTypes from "prop-types";
import React from "react";
import { displayLocaleDates } from "../../../../utils/displayLocaleDates";

const RequestDate = ({ request_date }) => {
  return <>{displayLocaleDates(request_date)}</>;
};

RequestDate.propTypes = {
  request_date: PropTypes.string.isRequired,
};
export default RequestDate;
