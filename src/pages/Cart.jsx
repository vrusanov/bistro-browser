import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const handlePlaceOrder = () => {
    alert("Your order has been accepted! Thank you for your order");
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="cart mt-5">
            <Link to="/" className="back-to-home">
              ← To the home page
            </Link>
            <h2 className="text-center">Your Cart</h2>
            <div className="cart-items">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))
              ) : (
                <p className="text-center w-100">Your cart is empty.</p>
              )}
              {cartItems.length > 0 && (
                <div className="cart-summary">
                  <p>Total Price: ${totalPrice.toFixed(2)}</p>
                  <button
                    onClick={handlePlaceOrder}
                    className="btn place-order-button mb-5"
                  >
                    Make an order
                  </button>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
