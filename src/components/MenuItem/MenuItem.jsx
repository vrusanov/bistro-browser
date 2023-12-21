import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../action/cartActions";
import { useNavigate } from "react-router-dom";

import "./menuItem.css";

const MenuItem = ({ id, title, price, imageUrl, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stars = Array.from({ length: rating }, (_, index) => (
    <i key={index} className="ri-star-fill"></i>
  ));

  const handleAddToCart = () => {
    const item = { id, title, price, imageUrl };
    dispatch(addToCart(item));
  };

  const handleItemClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="menu__item" onClick={handleItemClick}>
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
          <span onClick={handleAddToCart} className="cart-icon">
            <i className="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default MenuItem;
