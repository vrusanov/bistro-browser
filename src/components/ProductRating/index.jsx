import React from "react";
import PropTypes from "prop-types";

const ProductRating = ({ rating }) => (
  <div className="rating">
    {Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">
        <i className="ri-star-fill"></i>
      </span>
    ))}
  </div>
);

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default ProductRating;
