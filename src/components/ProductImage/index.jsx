import React from "react";
import PropTypes from "prop-types";
import "./productImage.css";
import defaultImage from "../../assets/images/default-image.png";

const ProductImage = ({ imageUrl, altText }) => (
  <img src={imageUrl} alt={altText} className="product-image" />
);

ProductImage.defaultProps = {
  imageUrl: defaultImage,
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ProductImage;
