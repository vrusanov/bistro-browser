import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
// import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={cartItems} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
