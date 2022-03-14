import PropTypes from "prop-types";
import React from "react";
export default function Layout({ children }) {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
