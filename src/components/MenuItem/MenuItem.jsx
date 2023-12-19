import React from "react";
import PropTypes from "prop-types";

import "./menuItem.css";

const MenuItem = ({ title, price, imageUrl, rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <i key={index} className="ri-star-fill"></i>
  ));

  return (
    <div className="menu__item">
      <div className="menu__item-image">
        <img className="w-100" src={imageUrl} alt={title} />
      </div>
      <div className="menu__item-content">
        <div className="rating text-center">
          <span>{stars}</span>
        </div>
        <h3>{title}</h3>
        <div className="d-flex align-content-center justify-content-between">
          <p>Price: ${price}</p>
          <span className="cart-icon">
            <i className="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default MenuItem;
