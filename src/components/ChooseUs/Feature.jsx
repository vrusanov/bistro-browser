import React from "react";
import PropTypes from "prop-types";

const Feature = ({ iconClass, title, description }) => (
  <div className="single__feature">
    <span className={`feature__icon`}>
      <i className={iconClass}></i>
    </span>
    <h6>{title}</h6>
    <p>{description}</p>
  </div>
);

Feature.propTypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
