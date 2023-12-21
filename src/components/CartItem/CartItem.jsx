import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../action/cartActions";
import "./cartItem.css";
import defaultImage from "../../assets/images/default-image.png";
import { Container } from "react-bootstrap";

const CartItem = ({ item }) => {
  const [cartItem, setCartItem] = useState(item);

  const dispatch = useDispatch();

  useEffect(() => {
    setCartItem(item);
  }, [item]);

  const handleRemove = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  const increaseQuantity = () => {
    dispatch(updateCartQuantity(cartItem.id, cartItem.quantity + 1));
  };

  const decreaseQuantity = () => {
    if (cartItem.quantity > 1) {
      dispatch(updateCartQuantity(cartItem.id, cartItem.quantity - 1));
    }
  };

  const totalPrice = cartItem.price * cartItem.quantity;

  return (
    <section>
      <Container>
        <div className="cart-item">
          <img
            src={cartItem.imageUrl || defaultImage}
            alt={cartItem.title}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h4>{cartItem.title}</h4>
            <p>${cartItem.price.toFixed(2)} (per cartItem)</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>{" "}
            <div className="cart-item-actions">
              <button onClick={decreaseQuantity}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={increaseQuantity}>+</button>
              <button onClick={handleRemove}>Remove</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
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
