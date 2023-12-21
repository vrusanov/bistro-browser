import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../action/cartActions";
import "./cartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const increaseQuantity = () => {
    dispatch(updateCartQuantity(item.id, item.quantity + 1));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateCartQuantity(item.id, item.quantity - 1));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div className="cart-item-actions">
          <button onClick={decreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
