import React from "react";
import PropTypes from "prop-types";
import "./productInfo.css";

const ProductInfo = ({
  title,
  description,
  price,
  ingredients,
  allergens,
  deliveryOptions,
}) => (
  <div className="product-info">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Ingredients: {ingredients.join(", ")}</p>
    <p>Allergens: {allergens.join(", ") || "None"}</p>
    <p>Delivery Options: {deliveryOptions.join(", ")}</p>
    <p className="price">Price: ${price}</p>
  </div>
);

ProductInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  allergens: PropTypes.arrayOf(PropTypes.string),
  deliveryOptions: PropTypes.arrayOf(PropTypes.string),
};

export default ProductInfo;
