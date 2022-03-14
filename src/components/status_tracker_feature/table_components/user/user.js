import PropTypes from "prop-types";
import React from "react";

const User = ({ email, fullname }) => {
  return !fullname ? (
    <span>{fullname}</span>
  ) : (
    <a
      className="text-blue-500 underline"
      target="_blank"
      href={`mailto:${email}`}
      rel="noreferrer noopener"
    >
      {" "}
      {fullname}
    </a>
  );
};

export default User;
User.propTypes = {
  email: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
};

User.defaultProps = {
  fullname: "Name not provided",
};
