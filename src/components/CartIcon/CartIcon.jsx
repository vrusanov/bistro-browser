import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./cartIcon.css";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const location = useLocation();
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const isCartNotEmpty = cartItems && cartItems.length > 0;
    const isCartPage = location.pathname === "/cart";

    setShowIcon(isCartNotEmpty && !isCartPage);
  }, [cartItems, location.pathname]);

  console.log(cartItems);

  const goToCart = () => {
    navigate("/cart");
  };

  if (!showIcon) {
    return null;
  }

  return (
    <div className="cart-icon-main" onClick={goToCart}>
      <span>
        <i className="ri-shopping-basket-fill"></i>
      </span>
    </div>
  );
};

export default CartIcon;
